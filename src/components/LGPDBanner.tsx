'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './LGPDBanner.module.css';

export default function LGPDBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Verificar se ja existe um consentimento valido
    const consentLog = localStorage.getItem('rgpd-consent');
    
    if (consentLog) {
      try {
        const data = JSON.parse(consentLog);
        const expiresAt = new Date(data.expiresAt);
        const now = new Date();
        
        // Se ainda for valido (não expirou)
        if (now < expiresAt) {
          setIsVisible(false);
          return;
        }
      } catch (e) {
        console.error("Erro ao ler cookies");
      }
    }
    
    // Mostrar banner se nao tiver aceite ou tiver expirado (3 meses passados)
    const timeoutMsg = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timeoutMsg);
  }, []);

  const saveConsent = async (consentValue: boolean) => {
    setLoading(true);

    try {
      const res = await fetch('/api/consent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          consent: consentValue,
          policyVersion: 'v1.0',
        }),
      });

      if (!res.ok) throw new Error('Erro na API');

      const now = new Date();
      now.setDate(now.getDate() + 90);

      localStorage.setItem(
        'rgpd-consent',
        JSON.stringify({
          accepted: consentValue,
          expiresAt: now.toISOString(),
          version: 'v1.0',
        }),
      );

      setIsVisible(false);
    } catch (error) {
      console.error('Erro ao gravar consentimento', error);
      const now = new Date();
      now.setDate(now.getDate() + 90);
      localStorage.setItem(
        'rgpd-consent',
        JSON.stringify({
          accepted: consentValue,
          expiresAt: now.toISOString(),
          error: true,
        }),
      );
      setIsVisible(false);
    } finally {
      setLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.banner}>
        <div className={styles.content}>
          <label className={styles.checkboxContainer}>
            <input 
              type="checkbox" 
              checked={accepted} 
              onChange={(e) => setAccepted(e.target.checked)}
            />
            <span className={styles.checkmark}></span>
            <span className={styles.text}>
              Autorizo o envio de dados de acordo com o Regulamento Geral de Proteção de Dados e os nossos
              Termos e Condições Gerais.
              <br />
              Leia a nossa{' '}
              <Link href="/privacidade" className={styles.link}>
                Privacidade
              </Link>
              ,{' '}
              <Link href="/cookies" className={styles.link}>
                Política de cookies
              </Link>{' '}
              e{' '}
              <Link href="/condicoes-gerais" className={styles.link}>
                Condições Gerais
              </Link>
              .
            </span>
          </label>
        </div>

        <div className={styles.buttonRow}>
          <button
            className={styles.button}
            disabled={!accepted || loading}
            onClick={() => saveConsent(true)}
            type="button"
          >
            {loading ? 'A guardar...' : 'Confirmar e Aceitar'}
          </button>

          <button
            className={styles.rejectButton}
            disabled={loading}
            onClick={() => saveConsent(false)}
            type="button"
          >
            {loading ? 'A guardar...' : 'Recusar'}
          </button>
        </div>
      </div>
    </div>
  );
}
