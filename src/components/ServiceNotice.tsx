import { buildWhatsappUrl, icons, serviceRules } from '../data/content';

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
            <h2>Artes digitais, atendimento humano e prazo combinado</h2>
            <p>
              Cada pedido é alinhado no WhatsApp para evitar erro nos dados do evento e deixar a entrega clara desde
              o início.
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
              href={buildWhatsappUrl('Olá, quero tirar uma dúvida antes de fazer meu pedido na My Dream.')}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle aria-hidden="true" />
              Falar com atendente
            </a>
            <a className="button button--outline" href="#personalizado">
              Quero meu personalizado
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
