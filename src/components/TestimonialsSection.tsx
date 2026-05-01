import { Star } from 'lucide-react';

import { testimonials } from '../data/content';

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="section testimonials-section section--white">
      <div className="container">
        <div className="section-heading">
          <h2>Experiências My Dream</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonial-card stripe-pattern">
              <div className="testimonial-card__stars" aria-label="5 estrelas">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} aria-hidden="true" fill="currentColor" />
                ))}
              </div>
              <p>"{testimonial.text}"</p>
              <footer>
                <span className={`avatar avatar--${testimonial.tone}`}>{testimonial.initials}</span>
                <strong>{testimonial.name}</strong>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
