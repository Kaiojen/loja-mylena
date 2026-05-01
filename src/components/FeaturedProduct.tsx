import { assets, buildWhatsappUrl, icons } from '../data/content';

export function FeaturedProduct() {
  const { MessageCircle, ShoppingBag } = icons;

  return (
    <section id="detalhe" className="section featured-section section--white">
      <div className="container container--narrow">
        <article className="featured-product stripe-pattern">
          <div className="featured-product__image">
            <img
              src={assets.floralLavender}
              alt="Modelo Floral Lavanda em destaque"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 860px) 100vw, 50vw"
            />
          </div>

          <div className="featured-product__content">
            <span className="mini-badge">Convite Digital Interativo</span>
            <h2>Floral Lavanda</h2>
            <p className="featured-product__price">
              R$ 59,90 <span>R$ 89,90</span>
            </p>
            <p className="featured-product__description">
              Um design romântico e delicado, com botões interativos para RSVP e lista de presentes.
              Entrega em até 3 dias úteis.
            </p>

            <div className="featured-product__actions">
              <a
                className="button button--rose"
                href={buildWhatsappUrl('Olá, quero comprar o modelo Floral Lavanda da My Dream.')}
                target="_blank"
                rel="noreferrer"
              >
                <ShoppingBag aria-hidden="true" />
                Comprar agora
              </a>
              <a
                className="button button--whatsapp"
                href={buildWhatsappUrl('Olá, quero falar sobre o modelo Floral Lavanda.')}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
