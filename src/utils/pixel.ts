declare global {
  interface Window {
    fbq: (method: string, event: string, params?: Record<string, unknown>) => void;
  }
}

export const trackWhatsAppClick = () => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('trackCustom', 'IniciarConversaWhatsApp');
  }
};
