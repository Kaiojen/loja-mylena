import { buildWhatsappUrl, icons, offerPackages } from '../data/content';
import { SectionHeading } from './SectionHeading';

export function OfferSection() {
  const { MessageCircle, Sparkles } = icons;

  return (
    <section id="pacotes" className="section offer-section section--white">
      <div className="container">
        <SectionHeading
          eyebrow="Pacotes"
          title="Escolha pelo momento do seu evento"
          description="Os valores ajudam a cliente a entender o que está incluso antes de falar no WhatsApp. O atendimento confirma o melhor pacote para cada pedido."
        />

        <div className="offer-grid">
          {offerPackages.map((item) => (
            <article key={item.title} className={`offer-card ${item.highlighted ? 'offer-card--featured' : ''}`}>
              <div className="offer-card__top">
                <span className="offer-card__badge">
                  <Sparkles aria-hidden="true" />
                  {item.badge}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <strong className="offer-card__price">{item.price}</strong>

              <ul className="offer-card__features">
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <a
                className={`button ${item.highlighted ? 'button--rose' : 'button--outline'}`}
                href={buildWhatsappUrl(item.message)}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle aria-hidden="true" />
                Quero esse pacote
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
