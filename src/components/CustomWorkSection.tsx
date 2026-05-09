import { buildWhatsappUrl, customWorks, icons } from '../data/content';
import { trackWhatsAppClick } from '../utils/pixel';
import { SectionHeading } from './SectionHeading';

export function CustomWorkSection() {
  const { MessageCircle } = icons;

  return (
    <section id="personalizado" className="section custom-section">
      <div className="container">
        <SectionHeading
          title="Artes exclusivas"
          description="Se não encontrou o que buscava, nós criamos do zero seguindo o seu sonho."
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
            <h3>Quer uma arte feita do zero?</h3>
            <p>Conte o tema, a data e a ideia principal. A My Dream orienta o melhor formato pelo WhatsApp.</p>
          </div>
          <a
            className="button button--rose"
            href={buildWhatsappUrl('Olá, quero pedir uma arte personalizada do zero.')}
            target="_blank"
            rel="noreferrer"
            onClick={trackWhatsAppClick}
          >
            <MessageCircle aria-hidden="true" />
            Quero meu personalizado
          </a>
        </div>
      </div>
    </section>
  );
}
