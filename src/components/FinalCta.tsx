import { buildWhatsappUrl, icons } from '../data/content';
import { trackWhatsAppClick } from '../utils/pixel';

export function FinalCta() {
  const { MessageCircle, Sparkles } = icons;

  return (
    <section className="final-cta pattern-bg">
      <div className="container container--narrow final-cta__content">
        <Sparkles aria-hidden="true" />
        <h2>Seu casamento merece um convite à sua altura.</h2>
        <p>Fale com a My Dream e encontre juntas o formato certo — do convite interativo ao kit completo com identidade exclusiva.</p>
        <div className="final-cta__actions">
          <a
            id="final-cta-primary"
            className="button button--rose"
            href={buildWhatsappUrl('Olá, quero criar o convite do meu casamento com a My Dream.')}
            target="_blank"
            rel="noreferrer"
            onClick={trackWhatsAppClick}
          >
            <MessageCircle aria-hidden="true" />
            Falar no WhatsApp
          </a>
          <a id="final-cta-secondary" className="button button--outline" href="#catalogo">
            Ver modelos
          </a>
        </div>
      </div>
    </section>
  );
}
