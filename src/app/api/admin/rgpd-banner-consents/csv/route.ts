import { neon } from '@neondatabase/serverless';

export async function GET() {
  try {
    const sql = neon(process.env.DATABASE_URL!);

    const rows = await sql<
      {
        created_at: string;
        ip_address: string | null;
        policy_version: string | null;
        consent_given: boolean | null;
      }[]
    >`
      SELECT created_at, ip_address, policy_version, consent_given
      FROM rgpd_consents
      ORDER BY created_at DESC
    `;

    const header = 'data;ip;versao_politica;consentiu';
    const lines = rows.map((r) =>
      [
        new Date(r.created_at).toISOString(),
        r.ip_address ?? '',
        r.policy_version ?? '',
        r.consent_given ? 'Sim' : 'Nao',
      ].join(';'),
    );

    const csv = [header, ...lines].join('\n');

    return new Response(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename=\"rgpd-banner-consents.csv\"',
      },
    });
  } catch (error) {
    console.error('Erro a gerar CSV de consentimentos banner', error);
    return new Response('Erro a gerar CSV', { status: 500 });
  }
}

