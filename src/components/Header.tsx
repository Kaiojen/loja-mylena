import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { navItems } from '../data/content';
import { Brand } from './Brand';

const navLinkIds: Record<string, string> = {
  '#inicio': 'nav-home-link',
  '#catalogo': 'nav-catalog-link',
  '#personalizado': 'nav-custom-link',
  '#como-funciona': 'nav-steps-link',
  '#faq': 'nav-faq-link',
  '#contato': 'nav-contact-link',
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('is-menu-open', isMenuOpen);

    return () => document.body.classList.remove('is-menu-open');
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a id="nav-logo-link" className="site-header__logo" href="#inicio" onClick={closeMenu}>
          <Brand />
        </a>

        <nav className="site-header__nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} id={navLinkIds[item.href]} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a id="header-cta-btn" className="button button--lavender button--compact site-header__cta" href="#catalogo">
            Ver catálogos
          </a>
          <button
            className="mobile-menu-button"
            type="button"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id="mobile-navigation" className={`mobile-nav ${isMenuOpen ? 'mobile-nav--open' : ''}`}>
        <nav className="mobile-nav__panel" aria-label="Navegação mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="button button--rose" href="#catalogo" onClick={closeMenu}>
            Ver catálogos
          </a>
        </nav>
      </div>
    </header>
  );
}
