import nodemailer from 'nodemailer';
import { neon } from '@neondatabase/serverless';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      date,
      message,
    } = body as {
      name: string;
      email: string;
      phone?: string;
      date?: string;
      message: string;
    };

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
      });
    }

    // Use environment variables for SMTP configuration
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
    const user = process.env.SMTP_USER;

    // password: tenta ler da base (ultima senha), se não houver usa .env
    let pass = process.env.SMTP_PASS;
    try {
      if (process.env.DATABASE_URL) {
        const sql = neon(process.env.DATABASE_URL);
        const rows = await sql`
          SELECT password
          FROM smtp_settings
          ORDER BY created_at DESC
          LIMIT 1
        `;
        if (rows.length > 0 && rows[0].password) {
          pass = rows[0].password;
        }
      }
    } catch (err) {
      console.error('Nao foi possivel ler senha SMTP da base, usando .env', err);
    }
    const to = process.env.SMTP_TO || 'info@princessparty.pt';

    if (!host || !user || !pass) {
      return new Response(
        JSON.stringify({ error: 'SMTP not configured on server' }),
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const subject = `Pedido de orcamento — ${name}`;

    const text = [
      `Nome: ${name}`,
      `Email: ${email}`,
      phone ? `Telefone: ${phone}` : '',
      date ? `Data desejada: ${date}` : '',
      '',
      'Mensagem:',
      message,
    ]
      .filter(Boolean)
      .join('\n');

    await transporter.sendMail({
      from: `"Princess Party Website" <${user}>`,
      to,
      replyTo: email,
      subject,
      text,
    });

    // Log the request in the database (for admin view)
    try {
      const sql = neon(process.env.DATABASE_URL!);
      await sql`
        CREATE TABLE IF NOT EXISTS contact_requests (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255),
          email VARCHAR(255),
          phone VARCHAR(100),
          event_date VARCHAR(100),
          message TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `;

      await sql`
        INSERT INTO contact_requests (name, email, phone, event_date, message)
        VALUES (${name}, ${email}, ${phone || ''}, ${date || ''}, ${message})
      `;
    } catch (error) {
      console.error('Erro ao gravar pedido de contacto na base de dados', error);
      // não falhar o envio por causa do log
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    console.error('Erro a enviar email', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
    });
  }
}

