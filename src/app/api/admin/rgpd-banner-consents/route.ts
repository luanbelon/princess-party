import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const sql = neon(process.env.DATABASE_URL!);

    const rows = await sql`
      SELECT id, ip_address, user_agent, consent_given, policy_version, created_at
      FROM rgpd_consents
      ORDER BY created_at DESC
      LIMIT 100
    `;

    return NextResponse.json({ items: rows });
  } catch (error) {
    console.error('Erro ao listar consentimentos RGPD (banner)', error);
    return NextResponse.json({ error: 'Erro ao listar consentimentos' }, { status: 500 });
  }
}

