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

    const rows = await sql<{ id: number; path: string; alt: string | null }[]>`
      SELECT id, path, alt
      FROM gallery_images
      WHERE active = TRUE
      ORDER BY created_at DESC
    `;

    return NextResponse.json({ items: rows });
  } catch (error) {
    console.error('Erro ao listar imagens da galeria', error);
    return NextResponse.json({ error: 'Erro ao listar imagens' }, { status: 500 });
  }
}

