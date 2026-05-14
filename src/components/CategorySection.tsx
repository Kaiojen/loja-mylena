import { categories, icons } from '../data/content';
import { SectionHeading } from './SectionHeading';

const categoryLinkIds = ['cat-digital-link', 'cat-wedding-link', 'cat-kids-link', 'cat-15years-link'];

export function CategorySection() {
  const { ArrowRight } = icons;

  return (
    <section id="categorias" className="section categories-section section--white">
      <div className="container">
        <SectionHeading eyebrow="Para o seu casamento" title="Tudo que a noiva precisa, do convite ao agradecimento" />

        <div className="category-grid">
          {categories.map((category, index) => (
            <a key={category.title} id={categoryLinkIds[index]} className="category-card" href={category.href}>
              <span className="category-card__image">
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 25vw"
                />
              </span>
              <span className="category-card__body">
                <strong>{category.title}</strong>
                <span>{category.description}</span>
                <em>
                  Ver modelos
                  <ArrowRight aria-hidden="true" />
                </em>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
