import { Brand } from './Brand';
import { buildWhatsappUrl, icons, navItems, siteConfig } from '../data/content';
import { trackWhatsAppClick } from '../utils/pixel';

export function Footer() {
  const { Heart, Instagram, Mail, MapPin, MessageCircle } = icons;
  const footerNavItems = navItems.filter((item) =>
    ['#inicio', '#pacotes', '#catalogo', '#personalizado'].includes(item.href),
  );
  const footerLinkIds: Record<string, string> = {
    '#inicio': 'footer-link-home',
    '#pacotes': 'footer-link-offers',
    '#catalogo': 'footer-link-cat',
    '#personalizado': 'footer-link-custom',
  };

  return (
    <footer id="contato" className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <a id="footer-logo-link" className="site-footer__brand" href="#inicio">
              <Brand align="left" />
            </a>
            <p className="site-footer__summary">
              Especialistas em convites digitais e papelaria para casamentos. Sua história, do save the date ao agradecimento.
            </p>
            <div className="social-list" aria-label="Redes sociais">
              <a id="footer-social-ig" href={siteConfig.instagramUrl} aria-label="Instagram" target="_blank" rel="noreferrer">
                <Instagram aria-hidden="true" />
              </a>
              <a id="footer-social-wa" href={buildWhatsappUrl()} aria-label="WhatsApp" target="_blank" rel="noreferrer" onClick={trackWhatsAppClick}>
                <MessageCircle aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3>Explorar</h3>
            <ul>
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <a id={footerLinkIds[item.href]} href={item.href}>
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
                <a id="footer-link-policy" href="#politica">
                  Política Comercial
                </a>
              </li>
              <li>
                <a id="footer-link-privacy" href="#privacidade">
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
              <a id="footer-link-wa-btn" className="footer-whatsapp" href={buildWhatsappUrl()} target="_blank" rel="noreferrer" onClick={trackWhatsAppClick}>
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
