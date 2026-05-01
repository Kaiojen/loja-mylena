import { ChevronDown } from 'lucide-react';

import { faqs } from '../data/content';

export function FaqSection() {
  return (
    <section id="faq" className="section faq-section">
      <div className="container container--faq">
        <div className="section-heading">
          <h2>Dúvidas frequentes</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary>
                <span>{faq.question}</span>
                <ChevronDown aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
