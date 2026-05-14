import { buildWhatsappUrl, icons, serviceRules } from '../data/content';
import { trackWhatsAppClick } from '../utils/pixel';

export function ServiceNotice() {
  const { MessageCircle, Sparkles } = icons;

  return (
    <section className="service-notice-section" aria-label="Avisos importantes sobre a compra">
      <div className="container">
        <article className="service-notice">
          <div className="service-notice__intro">
            <span className="service-notice__eyebrow">
              <Sparkles aria-hidden="true" />
              Antes de pedir
            </span>
            <h2>Atendimento consultivo com a noiva, prazo claro e ajustes até o sim</h2>
            <p>
              Cada convite de casamento é alinhado no WhatsApp — dados da cerimônia, estilo e detalhes — para que você receba exatamente o que imaginou.
            </p>
          </div>

          <div className="service-notice__rules">
            {serviceRules.map((rule) => {
              const Icon = rule.icon;

              return (
                <div key={rule.title} className="service-rule">
                  <span className={`service-rule__icon service-rule__icon--${rule.tone}`}>
                    <Icon aria-hidden="true" />
                  </span>
                  <span>
                    <strong>{rule.title}</strong>
                    <small>{rule.description}</small>
                  </span>
                </div>
              );
            })}
          </div>

          <div className="service-notice__actions">
            <a
              className="button button--rose"
              href={buildWhatsappUrl('Olá, quero tirar uma dúvida sobre o convite do meu casamento na My Dream.')}
              target="_blank"
              rel="noreferrer"
              onClick={trackWhatsAppClick}
            >
              <MessageCircle aria-hidden="true" />
              Falar com atendente
            </a>
            <a className="button button--outline" href="#personalizado">
              Quero identidade exclusiva
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
