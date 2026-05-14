import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useRef } from 'react';

import { testimonials } from '../data/content';

export function TestimonialsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollTestimonials = (direction: 'previous' | 'next') => {
    carouselRef.current?.scrollBy({
      left: direction === 'next' ? 360 : -360,
      behavior: 'smooth',
    });
  };

  return (
    <section id="depoimentos" className="section testimonials-section section--white">
      <div className="container">
        <div className="testimonials-section__header">
          <div className="section-heading section-heading--left">
            <p className="section-heading__eyebrow">Noivas My Dream</p>
            <h2>O que as noivas dizem</h2>
            <p className="section-heading__description">
              Relatos de noivas que passaram pelo processo — do primeiro contato até o dia do casamento.
            </p>
          </div>

          <div className="testimonial-controls" aria-label="Controle dos depoimentos">
            <button type="button" aria-label="Depoimento anterior" onClick={() => scrollTestimonials('previous')}>
              <ChevronLeft aria-hidden="true" />
            </button>
            <button type="button" aria-label="Próximo depoimento" onClick={() => scrollTestimonials('next')}>
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="testimonial-carousel" ref={carouselRef}>
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
