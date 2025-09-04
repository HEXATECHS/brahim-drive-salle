import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/212658859713?text=Bonjour, je souhaite m'inscrire à l'auto-école"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppFloat;