import { buildWhatsappUrl } from '../data/content';
import { trackWhatsAppClick } from '../utils/pixel';

export function PromoBanner() {
  return (
    <div className="promo-banner" role="region" aria-label="Promoção Dia dos Namorados">
      <div className="promo-banner__inner">
        <p className="promo-banner__text">
          💕 <strong>Especial Dia dos Namorados</strong> — Tradicional por{' '}
          <strong>R$&nbsp;35,00</strong> e Interativo por <strong>R$&nbsp;60,00</strong>
          <span className="promo-banner__deadline"> · Só modelos prontos · Até 12/06</span>
        </p>
        <a
          className="promo-banner__cta"
          href={buildWhatsappUrl(
            'Olá! Vi a promoção de Dia dos Namorados da My Dream e quero garantir meu convite com desconto. Pode me ajudar?'
          )}
          target="_blank"
          rel="noreferrer"
          onClick={trackWhatsAppClick}
        >
          Garantir agora
        </a>
      </div>
    </div>
  );
}
