import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (!password || typeof password !== 'string') {
      return NextResponse.json({ error: 'Senha é obrigatória' }, { status: 400 });
    }

    const sql = neon(process.env.DATABASE_URL!);

    await sql`
      CREATE TABLE IF NOT EXISTS smtp_settings (
        id SERIAL PRIMARY KEY,
        password VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await sql`
      INSERT INTO smtp_settings (password)
      VALUES (${password})
    `;

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Erro ao gravar senha SMTP', error);
    return NextResponse.json({ error: 'Erro ao gravar senha' }, { status: 500 });
  }
}

