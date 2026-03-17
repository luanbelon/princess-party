import { neon } from '@neondatabase/serverless';

export async function GET() {
  try {
    const sql = neon(process.env.DATABASE_URL!);

    const rows = await sql`
      SELECT created_at, name, email, ip_address, consent_given
      FROM rgpd_form_consents
      ORDER BY created_at DESC
    `;

    const header = 'data;nome;email;ip;consentiu';
    const lines = rows.map((r) =>
      [
        new Date(r.created_at).toISOString(),
        r.name ?? '',
        r.email ?? '',
        r.ip_address ?? '',
        r.consent_given ? 'Sim' : 'Nao',
      ].join(';'),
    );

    const csv = [header, ...lines].join('\n');

    return new Response(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename=\"rgpd-form-consents.csv\"',
      },
    });
  } catch (error) {
    console.error('Erro a gerar CSV de consentimentos formulario', error);
    return new Response('Erro a gerar CSV', { status: 500 });
  }
}

