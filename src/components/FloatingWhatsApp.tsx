import { buildWhatsappUrl, icons } from '../data/content';
import { trackWhatsAppClick } from '../utils/pixel';

export function FloatingWhatsApp() {
  const { MessageCircle } = icons;

  return (
    <a
      className="floating-whatsapp"
      href={buildWhatsappUrl()}
      target="_blank"
      rel="noreferrer"
      onClick={trackWhatsAppClick}
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>Fale conosco</span>
    </a>
  );
}
