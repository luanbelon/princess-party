import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const sql = neon(process.env.DATABASE_URL!);

    const rows = await sql<
      {
        id: number;
        name: string | null;
        email: string | null;
        ip_address: string | null;
        user_agent: string | null;
        consent_given: boolean | null;
        created_at: string;
      }[]
    >`
      SELECT id, name, email, ip_address, user_agent, consent_given, created_at
      FROM rgpd_form_consents
      ORDER BY created_at DESC
      LIMIT 100
    `;

    return NextResponse.json({ items: rows });
  } catch (error) {
    console.error('Erro ao listar consentimentos de formulário', error);
    return NextResponse.json({ error: 'Erro ao listar consentimentos' }, { status: 500 });
  }
}

