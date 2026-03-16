import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { consent, policyVersion } = body;
    
    // Obter informacoes do utilizador
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';
    
    // Conectar ao banco de dados Neon
    const sql = neon(process.env.DATABASE_URL!);
    
    // Criar a tabela se não existir (apenas para garantir)
    await sql`
      CREATE TABLE IF NOT EXISTS rgpd_consents (
        id SERIAL PRIMARY KEY,
        ip_address VARCHAR(255),
        user_agent TEXT,
        consent_given BOOLEAN,
        policy_version VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    
    // Inserir registro de consentimento
    await sql`
      INSERT INTO rgpd_consents (ip_address, user_agent, consent_given, policy_version)
      VALUES (${ip}, ${userAgent}, ${consent}, ${policyVersion})
    `;
    
    return NextResponse.json({ success: true, message: 'Consentimento guardado legalmente (RGPD).' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao guardar o consentimento RGPD na base de dados:', error);
    return NextResponse.json({ success: false, error: 'Erro no servidor' }, { status: 500 });
  }
}
