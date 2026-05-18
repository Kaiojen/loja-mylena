import { assets, heroStats, icons } from '../data/content';

export function HeroSection() {
  const { ArrowRight, Smartphone, Sparkles } = icons;

  return (
    <section id="inicio" className="hero section">
      <div className="container hero__grid">
        <div className="hero__content reveal">
          <div className="eyebrow-pill">
            <Sparkles aria-hidden="true" />
            <span>Especialistas em casamento</span>
          </div>

          <h1>
            Convites digitais e{' '}
            <span className="hero__accent">papelaria</span> para casamentos inesquecíveis
          </h1>

          <p className="hero__description">
            Sua história, do save the date ao agradecimento. Identidade visual única, atendimento
            consultivo com a noiva e ajustes até você dizer sim ao convite.
          </p>

          <p className="hero__trust-pill">
            A partir de <strong>R$ 49,90</strong> · Entrega em <strong>2 dias úteis</strong>
          </p>

          <div className="hero__actions">
            <a id="hero-primary-cta" className="button button--rose" href="#catalogo">
              Ver modelos de casamento
              <ArrowRight aria-hidden="true" />
            </a>
            <a id="hero-secondary-cta" className="button button--outline" href="#personalizado">
              Quero um convite exclusivo
            </a>
          </div>

          <div className="hero__proof" aria-label="Mais de 500 casamentos celebrados">
            <div className="avatar-stack" aria-hidden="true">
              {heroStats.map((stat) => (
                <span key={stat.initials} className={`avatar avatar--${stat.tone}`}>
                  {stat.initials}
                </span>
              ))}
            </div>
            <p>
              Mais de <strong>500</strong> casamentos celebrados
            </p>
          </div>
        </div>

        <div className="hero__media reveal reveal--delay">
          <div className="hero-card">
            <img
              src={assets.hero}
              alt="Convite floral My Dream com laço em cetim"
              width="1088"
              height="1360"
              decoding="async"
              fetchPriority="high"
            />
            <div className="hero-card__shade" aria-hidden="true" />
            <div className="format-card">
              <span className="format-card__icon">
                <Smartphone aria-hidden="true" />
              </span>
              <span>
                <small>Formato</small>
                <strong>100% Digital</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
