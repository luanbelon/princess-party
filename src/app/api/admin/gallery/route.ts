import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const sql = neon(process.env.DATABASE_URL!);

    await sql`
      CREATE TABLE IF NOT EXISTS gallery_images (
        id SERIAL PRIMARY KEY,
        path VARCHAR(255) UNIQUE,
        alt TEXT,
        active BOOLEAN DEFAULT TRUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    const rows = await sql`
      SELECT id, path, alt, active, created_at
      FROM gallery_images
      ORDER BY created_at DESC
      LIMIT 200
    `;

    return NextResponse.json({ items: rows });
  } catch (error) {
    console.error('Erro ao listar imagens da galeria (admin)', error);
    return NextResponse.json({ error: 'Erro ao listar imagens' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { path, alt } = await request.json();

    if (!path || typeof path !== 'string') {
      return NextResponse.json({ error: 'Caminho da imagem é obrigatório' }, { status: 400 });
    }

    const sql = neon(process.env.DATABASE_URL!);

    await sql`
      CREATE TABLE IF NOT EXISTS gallery_images (
        id SERIAL PRIMARY KEY,
        path VARCHAR(255) UNIQUE,
        alt TEXT,
        active BOOLEAN DEFAULT TRUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await sql`
      INSERT INTO gallery_images (path, alt, active)
      VALUES (${path}, ${alt || null}, TRUE)
      ON CONFLICT (path) DO UPDATE SET alt = EXCLUDED.alt, active = TRUE
    `;

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Erro ao gravar imagem da galeria', error);
    return NextResponse.json({ error: 'Erro ao gravar imagem' }, { status: 500 });
  }
}

