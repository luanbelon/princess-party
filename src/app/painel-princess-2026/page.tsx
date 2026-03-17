'use client';

import { useEffect, useState } from 'react';

type ContactRequest = {
  id: number;
  name: string | null;
  email: string | null;
  phone: string | null;
  event_date: string | null;
  message: string | null;
  created_at: string;
};

type RgpdFormConsent = {
  id: number;
  name: string | null;
  email: string | null;
  ip_address: string | null;
  user_agent: string | null;
  consent_given: boolean | null;
  created_at: string;
};

type RgpdBannerConsent = {
  id: number;
  ip_address: string | null;
  user_agent: string | null;
  consent_given: boolean | null;
  policy_version: string | null;
  created_at: string;
};

type GalleryItem = {
  id: number;
  path: string;
  alt: string | null;
  active: boolean;
  created_at: string;
};

export default function AdminPanelPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [contacts, setContacts] = useState<ContactRequest[]>([]);
  const [formConsents, setFormConsents] = useState<RgpdFormConsent[]>([]);
  const [bannerConsents, setBannerConsents] = useState<RgpdBannerConsent[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [newImagePath, setNewImagePath] = useState('');
  const [newImageAlt, setNewImageAlt] = useState('');
  const [activeTab, setActiveTab] = useState<'contacts' | 'rgpdForm' | 'rgpdBanner' | 'gallery' | 'smtp'>('contacts');
  const [smtpPassword, setSmtpPassword] = useState('');
  const [smtpSaving, setSmtpSaving] = useState(false);

  useEffect(() => {
    // tentativa simples: se já existir cookie, tentar carregar dados
    const tryFetch = async () => {
      try {
        const res = await fetch('/api/admin/contacts');
        if (res.ok) {
          const data = await res.json();
          setContacts(data.items || []);
          setLoggedIn(true);

          const [formRes, bannerRes] = await Promise.all([
            fetch('/api/admin/rgpd-form-consents'),
            fetch('/api/admin/rgpd-banner-consents'),
          ]);

          if (formRes.ok) {
            const d = await formRes.json();
            setFormConsents(d.items || []);
          }

          if (bannerRes.ok) {
            const d = await bannerRes.json();
            setBannerConsents(d.items || []);
          }

          const galleryRes = await fetch('/api/admin/gallery');
          if (galleryRes.ok) {
            const d = await galleryRes.json();
            setGallery(d.items || []);
          }
        }
      } catch {
        // ignore
      }
    };

    tryFetch();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        setError('Credenciais inválidas');
        setLoading(false);
        return;
      }

      // depois do login, recarregar dados
      const contactsRes = await fetch('/api/admin/contacts');
      if (contactsRes.ok) {
        const data = await contactsRes.json();
        setContacts(data.items || []);
      }

      const [formRes, bannerRes] = await Promise.all([
        fetch('/api/admin/rgpd-form-consents'),
        fetch('/api/admin/rgpd-banner-consents'),
      ]);

      if (formRes.ok) {
        const d = await formRes.json();
        setFormConsents(d.items || []);
      }

      if (bannerRes.ok) {
        const d = await bannerRes.json();
        setBannerConsents(d.items || []);
      }

      const galleryRes = await fetch('/api/admin/gallery');
      if (galleryRes.ok) {
        const d = await galleryRes.json();
        setGallery(d.items || []);
      }

      setLoggedIn(true);
    } catch (err) {
      console.error(err);
      setError('Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  const handleAddImage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImagePath.trim()) return;

    try {
      const res = await fetch('/api/admin/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: newImagePath.trim(), alt: newImageAlt.trim() || null }),
      });
      if (!res.ok) {
        alert('Erro ao gravar imagem');
        return;
      }

      const galleryRes = await fetch('/api/admin/gallery');
      if (galleryRes.ok) {
        const d = await galleryRes.json();
        setGallery(d.items || []);
      }

      setNewImagePath('');
      setNewImageAlt('');
    } catch (err) {
      console.error(err);
      alert('Erro ao gravar imagem');
    }
  };

  const handleDeactivateImage = async (id: number) => {
    if (!confirm('Remover esta imagem da galeria?')) return;
    try {
      const res = await fetch('/api/admin/gallery/deactivate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) {
        alert('Erro ao remover imagem');
        return;
      }
      setGallery((prev) => prev.map((g) => (g.id === id ? { ...g, active: false } : g)));
    } catch (err) {
      console.error(err);
      alert('Erro ao remover imagem');
    }
  };

  const handleSaveSmtpPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!smtpPassword.trim()) return;
    setSmtpSaving(true);
    try {
      const res = await fetch('/api/admin/smtp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: smtpPassword.trim() }),
      });
      if (!res.ok) {
        alert('Erro ao guardar a senha. Tente novamente.');
        return;
      }
      alert('Senha do email atualizada com sucesso. Os próximos envios irão usar esta senha.');
      setSmtpPassword('');
    } catch (err) {
      console.error(err);
      alert('Erro ao guardar a senha. Tente novamente.');
    } finally {
      setSmtpSaving(false);
    }
  };

  if (!loggedIn) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--pink-pale)' }}>
        <div style={{ background: '#fff', padding: '32px', borderRadius: '24px', width: '100%', maxWidth: '420px', boxShadow: 'var(--shadow-md)' }}>
          <h1 style={{ marginBottom: '16px', fontSize: '1.4rem' }}>Admin Princess Party</h1>
          <p style={{ marginBottom: '20px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Acesso restrito. Introduza utilizador e palavra-passe.
          </p>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label htmlFor="username" style={{ display: 'block', fontSize: '0.85rem', marginBottom: '4px' }}>Utilizador</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{ width: '100%', padding: '8px 10px', borderRadius: '8px', border: '1px solid var(--border)' }}
              />
            </div>
            <div>
              <label htmlFor="password" style={{ display: 'block', fontSize: '0.85rem', marginBottom: '4px' }}>Palavra-passe</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: '100%', padding: '8px 10px', borderRadius: '8px', border: '1px solid var(--border)' }}
              />
            </div>
            {error && (
              <p style={{ color: 'red', fontSize: '0.85rem' }}>{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              style={{
                marginTop: '8px',
                padding: '10px 16px',
                borderRadius: '999px',
                border: 'none',
                background: 'var(--purple)',
                color: '#fff',
                fontWeight: 600,
                cursor: 'pointer',
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? 'A entrar...' : 'Entrar'}
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', background: 'var(--pink-pale)', padding: '32px 0' }}>
      <div className="container" style={{ maxWidth: '1200px', display: 'flex', gap: '24px' }}>
        <aside
          style={{
            width: '260px',
            background: '#fff',
            borderRadius: '20px',
            padding: '20px 16px',
            boxShadow: 'var(--shadow-sm)',
            alignSelf: 'flex-start',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <img src="/logo.png" alt="Princess Party" style={{ height: 56, width: 'auto' }} />
            <div>
              <strong style={{ fontSize: '0.95rem' }}>Painel Princess Party</strong>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Gestão interna</div>
            </div>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <button
              type="button"
              onClick={() => setActiveTab('contacts')}
              style={{
                textAlign: 'left',
                padding: '8px 12px',
                borderRadius: '999px',
                border: 'none',
                background: activeTab === 'contacts' ? 'var(--purple)' : 'transparent',
                color: activeTab === 'contacts' ? '#fff' : 'var(--text-dark)',
                cursor: 'pointer',
                fontSize: '0.9rem',
              }}
            >
              Pedidos de orçamento
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('rgpdForm')}
              style={{
                textAlign: 'left',
                padding: '8px 12px',
                borderRadius: '999px',
                border: 'none',
                background: activeTab === 'rgpdForm' ? 'var(--purple)' : 'transparent',
                color: activeTab === 'rgpdForm' ? '#fff' : 'var(--text-dark)',
                cursor: 'pointer',
                fontSize: '0.9rem',
              }}
            >
              Consentimento RGPD – Formulário
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('rgpdBanner')}
              style={{
                textAlign: 'left',
                padding: '8px 12px',
                borderRadius: '999px',
                border: 'none',
                background: activeTab === 'rgpdBanner' ? 'var(--purple)' : 'transparent',
                color: activeTab === 'rgpdBanner' ? '#fff' : 'var(--text-dark)',
                cursor: 'pointer',
                fontSize: '0.9rem',
              }}
            >
              Consentimento banner cookies
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('gallery')}
              style={{
                textAlign: 'left',
                padding: '8px 12px',
                borderRadius: '999px',
                border: 'none',
                background: activeTab === 'gallery' ? 'var(--purple)' : 'transparent',
                color: activeTab === 'gallery' ? '#fff' : 'var(--text-dark)',
                cursor: 'pointer',
                fontSize: '0.9rem',
              }}
            >
              Galeria completa
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('smtp')}
              style={{
                textAlign: 'left',
                padding: '8px 12px',
                borderRadius: '999px',
                border: 'none',
                background: activeTab === 'smtp' ? 'var(--purple)' : 'transparent',
                color: activeTab === 'smtp' ? '#fff' : 'var(--text-dark)',
                cursor: 'pointer',
                fontSize: '0.9rem',
              }}
            >
              Alterar senha do email
            </button>
          </nav>
        </aside>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {activeTab === 'contacts' && (
            <section>
              <h2 style={{ marginBottom: '12px', fontSize: '1.2rem' }}>Pedidos de orçamento (formulário)</h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                Mostrando os últimos {contacts.length} pedidos guardados.
              </p>
              <div style={{ overflowX: 'auto', background: '#fff', borderRadius: '16px', padding: '16px', boxShadow: 'var(--shadow-sm)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', padding: '6px' }}>Data</th>
                      <th style={{ textAlign: 'left', padding: '6px' }}>Nome</th>
                      <th style={{ textAlign: 'left', padding: '6px' }}>Email</th>
                      <th style={{ textAlign: 'left', padding: '6px' }}>Telefone</th>
                      <th style={{ textAlign: 'left', padding: '6px' }}>Data desejada</th>
                      <th style={{ textAlign: 'left', padding: '6px' }}>Mensagem</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((c) => (
                      <tr key={c.id}>
                        <td style={{ padding: '6px', borderTop: '1px solid #f1e4f4' }}>{new Date(c.created_at).toLocaleString('pt-PT')}</td>
                        <td style={{ padding: '6px', borderTop: '1px solid #f1e4f4' }}>{c.name}</td>
                        <td style={{ padding: '6px', borderTop: '1px solid #f1e4f4' }}>{c.email}</td>
                        <td style={{ padding: '6px', borderTop: '1px solid #f1e4f4' }}>{c.phone}</td>
                        <td style={{ padding: '6px', borderTop: '1px solid #f1e4f4' }}>{c.event_date}</td>
                        <td style={{ padding: '6px', borderTop: '1px solid #f1e4f4', maxWidth: '260px' }}>
                          <span style={{ whiteSpace: 'pre-wrap' }}>{c.message}</span>
                        </td>
                      </tr>
                    ))}
                    {contacts.length === 0 && (
                      <tr>
                        <td colSpan={6} style={{ padding: '10px', textAlign: 'center', color: 'var(--text-muted)' }}>
                          Ainda não há registos.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {activeTab === 'rgpdForm' && (
            <section>
              <h2 style={{ marginBottom: '12px', fontSize: '1.2rem' }}>Consentimentos RGPD — Formulário</h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                Últimos {formConsents.length} consentimentos guardados via formulário de contacto.
              </p>
              <button
                type="button"
                onClick={() => window.open('/api/admin/rgpd-form-consents/csv', '_blank')}
                style={{
                  marginBottom: '10px',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  border: 'none',
                  background: 'var(--purple)',
                  color: '#fff',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                }}
              >
                Exportar CSV
              </button>
              <div style={{ overflowX: 'auto', background: '#fff', borderRadius: '16px', padding: '16px', boxShadow: 'var(--shadow-sm)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', padding: '6px' }}>Data</th>
                      <th style={{ textAlign: 'left', padding: '6px' }}>Nome</th>
                      <th style={{ textAlign: 'left', padding: '6px' }}>Email</th>
                      <th style={{ textAlign: 'left', padding: '6px' }}>IP</th>
                      <th style={{ textAlign: 'left', padding: '6px' }}>Consentiu</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formConsents.map((c) => (
                      <tr key={c.id}>
                        <td style={{ padding: '6px', borderTop: '1px solid #f1e4f4' }}>{new Date(c.created_at).toLocaleString('pt-PT')}</td>
                        <td style={{ padding: '6px', borderTop: '1px solid #f1e4f4' }}>{c.name}</td>
                        <td style={{ padding: '6px', borderTop: '1px solid #f1e4f4' }}>{c.email}</td>
                        <td style={{ padding: '6px', borderTop: '1px solid #f1e4f4' }}>{c.ip_address}</td>
                        <td style={{ padding: '6px', borderTop: '1px solid #f1e4f4' }}>{c.consent_given ? 'Sim' : 'Não'}</td>
                      </tr>
                    ))}
                    {formConsents.length === 0 && (
                      <tr>
                        <td colSpan={5} style={{ padding: '10px', textAlign: 'center', color: 'var(--text-muted)' }}>
                          Ainda não há registos.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {activeTab === 'rgpdBanner' && (
            <section>
              <h2 style={{ marginBottom: '12px', fontSize: '1.2rem' }}>Consentimentos RGPD — Banner Cookies</h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                Últimos {bannerConsents.length} consentimentos do banner LGPD/RGPD.
              </p>
              <button
                type="button"
                onClick={() => window.open('/api/admin/rgpd-banner-consents/csv', '_blank')}
                style={{
                  marginBottom: '10px',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  border: 'none',
                  background: 'var(--purple)',
                  color: '#fff',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                }}
              >
                Exportar CSV
              </button>
              <div style={{ overflowX: 'auto', background: '#fff', borderRadius: '16px', padding: '16px', boxShadow: 'var(--shadow-sm)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', padding: '6px' }}>Data</th>
                      <th style={{ textAlign: 'left', padding: '6px' }}>IP</th>
                      <th style={{ textAlign: 'left', padding: '6px' }}>Versão Política</th>
                      <th style={{ textAlign: 'left', padding: '6px' }}>Consentiu</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bannerConsents.map((c) => (
                      <tr key={c.id}>
                        <td style={{ padding: '6px', borderTop: '1px solid #f1e4f4' }}>{new Date(c.created_at).toLocaleString('pt-PT')}</td>
                        <td style={{ padding: '6px', borderTop: '1px solid #f1e4f4' }}>{c.ip_address}</td>
                        <td style={{ padding: '6px', borderTop: '1px solid #f1e4f4' }}>{c.policy_version}</td>
                        <td style={{ padding: '6px', borderTop: '1px solid #f1e4f4' }}>{c.consent_given ? 'Sim' : 'Não'}</td>
                      </tr>
                    ))}
                    {bannerConsents.length === 0 && (
                      <tr>
                        <td colSpan={4} style={{ padding: '10px', textAlign: 'center', color: 'var(--text-muted)' }}>
                          Ainda não há registos.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {activeTab === 'gallery' && (
            <section>
              <h2 style={{ marginBottom: '12px', fontSize: '1.2rem' }}>Gestão da galeria completa</h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                Controle quais imagens aparecem na galeria completa. Use caminhos relativos à pasta <code>/public</code>, por exemplo:{' '}
                <code>/galeria/0003.png</code>.
              </p>

              <form onSubmit={handleAddImage} style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                <input
                  type="text"
                  placeholder="/galeria/ficheiro.jpg"
                  value={newImagePath}
                  onChange={(e) => setNewImagePath(e.target.value)}
                  style={{ flex: '1 1 260px', padding: '8px 10px', borderRadius: '8px', border: '1px solid var(--border)' }}
                  required
                />
                <input
                  type="text"
                  placeholder="Alt text (opcional)"
                  value={newImageAlt}
                  onChange={(e) => setNewImageAlt(e.target.value)}
                  style={{ flex: '1 1 220px', padding: '8px 10px', borderRadius: '8px', border: '1px solid var(--border)' }}
                />
                <button
                  type="submit"
                  style={{
                    padding: '8px 16px',
                    borderRadius: '999px',
                    border: 'none',
                    background: 'var(--purple)',
                    color: '#fff',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Adicionar/reativar
                </button>
              </form>

              <div style={{ overflowX: 'auto', background: '#fff', borderRadius: '16px', padding: '16px', boxShadow: 'var(--shadow-sm)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', padding: '6px' }}>ID</th>
                      <th style={{ textAlign: 'left', padding: '6px' }}>Caminho</th>
                      <th style={{ textAlign: 'left', padding: '6px' }}>Alt</th>
                      <th style={{ textAlign: 'left', padding: '6px' }}>Ativa</th>
                      <th style={{ textAlign: 'left', padding: '6px' }}>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gallery.map((g) => (
                      <tr key={g.id}>
                        <td style={{ padding: '6px', borderTop: '1px solid #f1e4f4' }}>{g.id}</td>
                        <td style={{ padding: '6px', borderTop: '1px solid #f1e4f4' }}>{g.path}</td>
                        <td style={{ padding: '6px', borderTop: '1px solid #f1e4f4' }}>{g.alt}</td>
                        <td style={{ padding: '6px', borderTop: '1px solid #f1e4f4' }}>{g.active ? 'Sim' : 'Não'}</td>
                        <td style={{ padding: '6px', borderTop: '1px solid #f1e4f4' }}>
                          {g.active ? (
                            <button
                              type="button"
                              onClick={() => handleDeactivateImage(g.id)}
                              style={{
                                padding: '4px 10px',
                                borderRadius: '999px',
                                border: 'none',
                                background: '#fce4ec',
                                color: '#c2185b',
                                fontSize: '0.8rem',
                                cursor: 'pointer',
                              }}
                            >
                              Remover
                            </button>
                          ) : (
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Removida</span>
                          )}
                        </td>
                      </tr>
                    ))}
                    {gallery.length === 0 && (
                      <tr>
                        <td colSpan={5} style={{ padding: '10px', textAlign: 'center', color: 'var(--text-muted)' }}>
                          Ainda não há imagens na base de dados. A galeria usa a lista padrão do código.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {activeTab === 'smtp' && (
            <section>
              <h2 style={{ marginBottom: '12px', fontSize: '1.2rem' }}>Alterar senha do email</h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                Esta senha será usada para enviar emails a partir do endereço <strong>info@princessparty.pt</strong>. A senha antiga
                não será mostrada aqui por motivos de segurança.
              </p>
              <form onSubmit={handleSaveSmtpPassword} style={{ maxWidth: '420px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div>
                  <label htmlFor="smtpPassword" style={{ display: 'block', fontSize: '0.85rem', marginBottom: '4px' }}>
                    Nova senha SMTP
                  </label>
                  <input
                    id="smtpPassword"
                    type="password"
                    value={smtpPassword}
                    onChange={(e) => setSmtpPassword(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '8px 10px',
                      borderRadius: '8px',
                      border: '1px solid var(--border)',
                    }}
                  />
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Sugestão: sempre que alterar a senha do email na hospedagem, venha aqui atualizar também. Os próximos envios do site
                  irão usar esta nova senha automaticamente.
                </p>
                <button
                  type="submit"
                  disabled={smtpSaving}
                  style={{
                    alignSelf: 'flex-start',
                    padding: '8px 18px',
                    borderRadius: '999px',
                    border: 'none',
                    background: 'var(--purple)',
                    color: '#fff',
                    fontWeight: 600,
                    cursor: 'pointer',
                    opacity: smtpSaving ? 0.7 : 1,
                  }}
                >
                  {smtpSaving ? 'A guardar...' : 'Guardar nova senha'}
                </button>
              </form>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}

