import { processSteps } from '../data/content';

export function ProcessSection() {
  return (
    <section id="como-funciona" className="section process-section">
      <div className="container">
        <div className="section-heading">
          <h2>Simples e prático</h2>
        </div>

        <div className="process-grid">
          <span className="process-grid__line" aria-hidden="true" />
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article key={step.title} className="process-step">
                <span className="process-step__icon">
                  <Icon aria-hidden="true" />
                  <small>{index + 1}</small>
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
