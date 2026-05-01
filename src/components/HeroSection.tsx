import { assets, heroStats, icons } from '../data/content';

export function HeroSection() {
  const { ArrowRight, Smartphone, Sparkles } = icons;

  return (
    <section id="inicio" className="hero section">
      <div className="container hero__grid">
        <div className="hero__content reveal">
          <div className="eyebrow-pill">
            <Sparkles aria-hidden="true" />
            <span>Detalhes que encantam</span>
          </div>

          <h1>
            Convites digitais e{' '}
            <span className="hero__accent">papelaria personalizada</span> para momentos inesquecíveis
          </h1>

          <p className="hero__description">
            Escolha um modelo pronto com design exclusivo ou solicite uma criação única para casamento,
            festas e aniversários.
          </p>

          <div className="hero__actions">
            <a id="hero-primary-cta" className="button button--rose" href="#catalogo">
              Ver catálogos
              <ArrowRight aria-hidden="true" />
            </a>
            <a id="hero-secondary-cta" className="button button--outline" href="#personalizado">
              Quero um personalizado
            </a>
          </div>

          <div className="hero__proof" aria-label="Mais de 500 sonhos realizados">
            <div className="avatar-stack" aria-hidden="true">
              {heroStats.map((stat) => (
                <span key={stat.initials} className={`avatar avatar--${stat.tone}`}>
                  {stat.initials}
                </span>
              ))}
            </div>
            <p>
              Mais de <strong>500</strong> sonhos realizados
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
