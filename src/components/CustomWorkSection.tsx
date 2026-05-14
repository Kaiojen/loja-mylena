import { buildWhatsappUrl, customWorks, icons } from '../data/content';
import { trackWhatsAppClick } from '../utils/pixel';
import { SectionHeading } from './SectionHeading';

export function CustomWorkSection() {
  const { MessageCircle } = icons;

  return (
    <section id="personalizado" className="section custom-section">
      <div className="container">
        <SectionHeading
          title="Identidade visual exclusiva para o seu casamento"
          description="Quando o catálogo não traduz a sua visão, criamos do zero. Você orienta, nós desenhamos cada detalhe junto com você."
        />

        <div className="custom-grid">
          {customWorks.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="custom-card">
                {item.featured ? <span className="custom-card__flag">Destaque</span> : null}
                <span className={`custom-card__icon custom-card__icon--${item.tone}`}>
                  <Icon aria-hidden="true" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>

        <div className="custom-section__cta">
          <div>
            <h3>Pronta para criar sua identidade de casamento?</h3>
            <p>Conta a data, o estilo e suas referências. A gente orienta o melhor caminho pelo WhatsApp — você não escolhe sozinha.</p>
          </div>
          <a
            className="button button--rose"
            href={buildWhatsappUrl('Olá, quero criar uma identidade visual exclusiva para o meu casamento com a My Dream.')}
            target="_blank"
            rel="noreferrer"
            onClick={trackWhatsAppClick}
          >
            <MessageCircle aria-hidden="true" />
            Começar meu projeto
          </a>
        </div>
      </div>
    </section>
  );
}
