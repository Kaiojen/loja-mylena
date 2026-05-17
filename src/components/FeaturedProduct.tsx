import { assets, buildWhatsappUrl, icons } from '../data/content';
import { trackWhatsAppClick } from '../utils/pixel';

export function FeaturedProduct() {
  const { MessageCircle } = icons;

  return (
    <section id="detalhe" className="section featured-section section--white">
      <div className="container container--narrow">
        <article className="featured-product stripe-pattern">
          <div className="featured-product__image">
            <img
              src={assets.botanicalSaveTheDate}
              alt="Modelo Verde & Ouro em destaque"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 860px) 100vw, 50vw"
            />
          </div>

          <div className="featured-product__content">
            <span className="mini-badge">Convite Interativo de Casamento</span>
            <h2>Verde & Ouro</h2>
            <p className="featured-product__price">R$ 79,90</p>
            <p className="featured-product__alt-price">
              Também disponível em versão tradicional (somente arte, sem RSVP) por <strong>R$ 49,90</strong>.
            </p>
            <p className="featured-product__description">
              Eucalipto aquarelado com moldura dourada e dois botões interativos: confirmar presença e sugestão de presente.
              Seus convidados confirmam com um clique. Entrega em até 3 dias úteis.
            </p>

            <div className="featured-product__actions">
              <a
                className="button button--rose"
                href={buildWhatsappUrl('Olá, quero personalizar o Convite Interativo Verde & Ouro da My Dream.')}
                target="_blank"
                rel="noreferrer"
                onClick={trackWhatsAppClick}
              >
                <MessageCircle aria-hidden="true" />
                Personalizar no WhatsApp
              </a>
              <a
                className="button button--whatsapp"
                href={buildWhatsappUrl('Olá, quero tirar dúvidas sobre o convite Verde & Ouro.')}
                target="_blank"
                rel="noreferrer"
                onClick={trackWhatsAppClick}
              >
                <MessageCircle aria-hidden="true" />
                Tirar dúvidas
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
