import { buildWhatsappUrl, icons, offerPackages } from '../data/content';
import { trackWhatsAppClick } from '../utils/pixel';
import { SectionHeading } from './SectionHeading';

export function OfferSection() {
  const { MessageCircle, Sparkles } = icons;

  return (
    <section id="pacotes" className="section offer-section section--white">
      <div className="container">
        <SectionHeading
          eyebrow="Pacotes de casamento"
          title="Quatro caminhos para o convite perfeito"
          description="Promoção Dia dos Namorados: Tradicional por R$&nbsp;35 e Interativo por R$&nbsp;60 até 12/06. O atendimento confirma o melhor pacote antes de qualquer pagamento."
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

              {item.originalPrice && (
                <s className="offer-card__original-price">{item.originalPrice}</s>
              )}
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
                onClick={trackWhatsAppClick}
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
