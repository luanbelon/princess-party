import nodemailer from 'nodemailer';

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
    const pass = process.env.SMTP_PASS;
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

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    console.error('Erro a enviar email', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
    });
  }
}

