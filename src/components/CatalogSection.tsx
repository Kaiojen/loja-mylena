import { useMemo, useState } from 'react';

import {
  buildWhatsappUrl,
  catalogCollections,
  catalogFilters,
  icons,
  products,
  type CatalogFilter,
  type Product,
} from '../data/content';
import { SectionHeading } from './SectionHeading';

function ProductCard({ product }: { product: Product }) {
  const { ShoppingBag } = icons;
  const message = `Olá, quero comprar o modelo ${product.title} da My Dream.`;

  return (
    <article className="product-card">
      <div className="product-card__image">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 25vw"
        />
        <span className={`product-card__badge product-card__badge--${product.badgeTone}`}>{product.badge}</span>
      </div>
      <div className="product-card__body">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <dl className="product-card__meta">
          <div>
            <dt>Formato</dt>
            <dd>{product.format}</dd>
          </div>
          <div>
            <dt>Entrega</dt>
            <dd>{product.delivery}</dd>
          </div>
        </dl>
        <div className="product-card__footer">
          <strong>{product.price}</strong>
          <a
            className="buy-link"
            href={buildWhatsappUrl(message)}
            target="_blank"
            rel="noreferrer"
            aria-label={`Comprar ${product.title} pelo WhatsApp`}
          >
            <ShoppingBag aria-hidden="true" />
            Comprar
          </a>
        </div>
      </div>
    </article>
  );
}

const normalizeText = (value: string) =>
  value
    .toLocaleLowerCase('pt-BR')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

export function CatalogSection() {
  const { Search } = icons;
  const [activeFilter, setActiveFilter] = useState<CatalogFilter>('Todos');
  const [query, setQuery] = useState('');

  const filterCounts = useMemo(
    () =>
      catalogFilters.reduce(
        (counts, filter) => ({
          ...counts,
          [filter]:
            filter === 'Todos' ? products.length : products.filter((product) => product.filters.includes(filter)).length,
        }),
        {} as Record<CatalogFilter, number>,
      ),
    [],
  );

  const filteredProducts = useMemo(() => {
    const normalizedQuery = normalizeText(query.trim());

    return products.filter((product) => {
      const matchesFilter = activeFilter === 'Todos' || product.filters.includes(activeFilter);
      const searchableContent = normalizeText(
        [product.title, product.description, product.badge, product.format, product.delivery, ...product.filters].join(' '),
      );
      const matchesQuery = !normalizedQuery || searchableContent.includes(normalizedQuery);

      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  const clearFilters = () => {
    setActiveFilter('Todos');
    setQuery('');
  };

  return (
    <section id="catalogo" className="section catalog-section">
      <div className="container">
        <SectionHeading
          eyebrow="Catálogos"
          title="Modelos por ocasião"
          description="Encontre o design perfeito por tema, formato ou tipo de evento. Nós cuidamos da personalização para você."
          align="left"
        />

        <div className="catalog-collections" aria-label="Catálogos por ocasião">
          {catalogCollections.map((collection) => (
            <button
              key={collection.title}
              className={`catalog-collection ${
                activeFilter === collection.filter ? 'catalog-collection--active' : ''
              }`}
              type="button"
              aria-pressed={activeFilter === collection.filter}
              onClick={() => setActiveFilter(collection.filter)}
            >
              <span className="catalog-collection__image">
                <img src={collection.image} alt="" loading="lazy" decoding="async" />
              </span>
              <span className="catalog-collection__body">
                <strong>{collection.title}</strong>
                <small>{filterCounts[collection.filter]} modelos</small>
                <span>{collection.description}</span>
              </span>
            </button>
          ))}
        </div>

        <div className="catalog-toolbar">
          <label className="catalog-search">
            <Search aria-hidden="true" />
            <span className="sr-only">Buscar modelo no catálogo</span>
            <input
              type="search"
              value={query}
              placeholder="Buscar por modelo, tema ou formato"
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <p className="catalog-count" aria-live="polite">
            {filteredProducts.length} de {products.length} modelos
          </p>
        </div>

        <div className="filter-list" aria-label="Filtrar catálogo">
          {catalogFilters.map((filter) => (
            <button
              key={filter}
              className={`filter-button ${activeFilter === filter ? 'filter-button--active' : ''}`}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              <span>{filter}</span>
              <small>{filterCounts[filter]}</small>
            </button>
          ))}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>
        ) : (
          <div className="catalog-empty">
            <h3>Nenhum modelo encontrado</h3>
            <p>Tente buscar outro tema ou voltar para todos os catálogos.</p>
            <button className="button button--rose button--compact" type="button" onClick={clearFilters}>
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
