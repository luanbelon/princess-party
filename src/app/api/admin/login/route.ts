import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { username, password } = await request.json();

  const adminUser = process.env.ADMIN_USER || 'princess_admin';
  const adminPass = process.env.ADMIN_PASS || 'Pp@2026!Festas';

  if (username !== adminUser || password !== adminPass) {
    return NextResponse.json({ error: 'Credenciais inválidas' }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set('admin_session', 'ok', {
    path: '/painel-princess-2026',
    httpOnly: false,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 4, // 4 horas
  });

  return res;
}

