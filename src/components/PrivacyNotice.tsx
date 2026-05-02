import { useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';

const PRIVACY_CONSENT_KEY = 'mydream-privacy-consent';

export function PrivacyNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(localStorage.getItem(PRIVACY_CONSENT_KEY) !== 'accepted');
  }, []);

  const acceptNotice = () => {
    localStorage.setItem(PRIVACY_CONSENT_KEY, 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <aside className="privacy-notice" aria-label="Aviso de privacidade">
      <div className="privacy-notice__icon">
        <ShieldCheck aria-hidden="true" />
      </div>
      <div className="privacy-notice__content">
        <strong>Privacidade e cookies</strong>
        <p>
          Usamos recursos essenciais do site e medição da Meta para entender visitas, cliques e melhorar os anúncios.
        </p>
      </div>
      <div className="privacy-notice__actions">
        <a href="#privacidade">Detalhes</a>
        <button type="button" onClick={acceptNotice}>
          Entendi
        </button>
      </div>
    </aside>
  );
}
