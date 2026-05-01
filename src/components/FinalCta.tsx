import { icons } from '../data/content';

export function FinalCta() {
  const { Sparkles } = icons;

  return (
    <section className="final-cta pattern-bg">
      <div className="container container--narrow final-cta__content">
        <Sparkles aria-hidden="true" />
        <h2>Pronta para começar?</h2>
        <p>Transforme sua ideia em um convite inesquecível com o toque especial da My Dream.</p>
        <div className="final-cta__actions">
          <a id="final-cta-primary" className="button button--rose" href="#catalogo">
            Ver catálogos
          </a>
          <a id="final-cta-secondary" className="button button--outline" href="#personalizado">
            Pedir personalizado
          </a>
        </div>
      </div>
    </section>
  );
}
