import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'ID é obrigatório' }, { status: 400 });
    }

    const sql = neon(process.env.DATABASE_URL!);

    await sql`
      UPDATE gallery_images
      SET active = FALSE
      WHERE id = ${id}
    `;

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Erro ao desativar imagem da galeria', error);
    return NextResponse.json({ error: 'Erro ao desativar imagem' }, { status: 500 });
  }
}

