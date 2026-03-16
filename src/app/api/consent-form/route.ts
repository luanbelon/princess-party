import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, consent } = body;
    
    // Obter informacoes do utilizador
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';
    
    // Conectar ao banco de dados Neon
    const sql = neon(process.env.DATABASE_URL!);
    
    // Criar a tabela se não existir (para os consentimentos via formulário)
    await sql`
      CREATE TABLE IF NOT EXISTS rgpd_form_consents (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255),
        ip_address VARCHAR(255),
        user_agent TEXT,
        consent_given BOOLEAN,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    
    // Inserir registro de consentimento
    await sql`
      INSERT INTO rgpd_form_consents (name, email, ip_address, user_agent, consent_given)
      VALUES (${name}, ${email}, ${ip}, ${userAgent}, ${consent})
    `;
    
    return NextResponse.json({ success: true, message: 'Consentimento de formulário guardado legalmente (RGPD).' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao guardar o consentimento RGPD de formulário na base de dados:', error);
    return NextResponse.json({ success: false, error: 'Erro no servidor' }, { status: 500 });
  }
}
