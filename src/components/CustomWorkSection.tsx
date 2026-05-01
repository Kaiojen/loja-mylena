import { customWorks } from '../data/content';
import { SectionHeading } from './SectionHeading';

export function CustomWorkSection() {
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
      </div>
    </section>
  );
}
