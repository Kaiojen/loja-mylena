import { useState } from 'react';

import { commercialPolicies } from '../data/content';

export function CommercialPolicySection() {
  const [activePolicy, setActivePolicy] = useState(commercialPolicies[0].title);
  const currentPolicy = commercialPolicies.find((policy) => policy.title === activePolicy) ?? commercialPolicies[0];

  return (
    <section id="politica" className="section policy-section">
      <div className="container container--narrow">
        <div className="section-heading">
          <p className="section-heading__eyebrow">Regras</p>
          <h2>Política comercial</h2>
          <p className="section-heading__description">
            Informações objetivas para a cliente comprar sabendo exatamente como funciona a entrega digital.
          </p>
        </div>

        <div className="policy-tabs" role="tablist" aria-label="Política comercial">
          {commercialPolicies.map((policy) => (
            <button
              key={policy.title}
              className={`policy-tab ${activePolicy === policy.title ? 'policy-tab--active' : ''}`}
              type="button"
              role="tab"
              aria-selected={activePolicy === policy.title}
              onClick={() => setActivePolicy(policy.title)}
            >
              {policy.title}
            </button>
          ))}
        </div>

        <article className="policy-panel">
          <h3>{currentPolicy.title}</h3>
          <p>{currentPolicy.summary}</p>
          <ul>
            {currentPolicy.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
