import { Brand } from './Brand';
import { buildWhatsappUrl, icons, navItems, siteConfig } from '../data/content';

export function Footer() {
  const { Heart, Instagram, Mail, MapPin, MessageCircle } = icons;

  return (
    <footer id="contato" className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <a id="footer-logo-link" className="site-footer__brand" href="#inicio">
              <Brand align="left" />
            </a>
            <p className="site-footer__summary">
              Celebrando momentos únicos com delicadeza e design exclusivo. Sua história começa no convite.
            </p>
            <div className="social-list" aria-label="Redes sociais">
              <a id="footer-social-ig" href={siteConfig.instagramUrl} aria-label="Instagram">
                <Instagram aria-hidden="true" />
              </a>
              <a id="footer-social-wa" href={buildWhatsappUrl()} aria-label="WhatsApp" target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" />
              </a>
              <a id="footer-social-pin" href={siteConfig.pinterestUrl} aria-label="Pinterest">
                <Heart aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3>Explorar</h3>
            <ul>
              {navItems.slice(0, 3).map((item) => (
                <li key={item.href}>
                  <a
                    id={
                      item.href === '#inicio'
                        ? 'footer-link-home'
                        : item.href === '#catalogo'
                          ? 'footer-link-cat'
                          : 'footer-link-custom'
                    }
                    href={item.href}
                  >
                    {item.label === 'Personalizado' ? 'Artes Exclusivas' : item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Ajuda</h3>
            <ul>
              <li>
                <a id="footer-link-faq" href="#faq">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a id="footer-link-terms" href="#contato">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a id="footer-link-privacy" href="#contato">
                  Privacidade
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Contato</h3>
            <address>
              <span>
                <Mail aria-hidden="true" />
                {siteConfig.email}
              </span>
              <span>
                <MapPin aria-hidden="true" />
                Atendimento Online
              </span>
              <a id="footer-link-wa-btn" className="footer-whatsapp" href={buildWhatsappUrl()} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" />
                Chamar Agora
              </a>
            </address>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>&copy; 2026 My Dream Artes Gráficas. Todos os direitos reservados.</p>
          <span>
            Artesanalmente feito para momentos <Heart aria-hidden="true" fill="currentColor" />
          </span>
        </div>
      </div>
    </footer>
  );
}
