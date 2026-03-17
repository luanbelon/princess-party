import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

export async function GET() {
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

    const rows = await sql`
      SELECT id, name, email, phone, event_date, message, created_at
      FROM contact_requests
      ORDER BY created_at DESC
      LIMIT 100
    `;

    return NextResponse.json({ items: rows });
  } catch (error) {
    console.error('Erro ao listar pedidos de contacto', error);
    return NextResponse.json({ error: 'Erro ao listar pedidos de contacto' }, { status: 500 });
  }
}

