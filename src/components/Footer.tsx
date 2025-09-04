import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Formations', href: '#formations' },
    { name: 'Tarifs', href: '#tarifs' },
    { name: 'Avis', href: '#avis' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Permis B - Conduite',
    'Code de la route',
    'Formation accompagnée',
    'Cours particuliers',
    'Tests blancs',
    'Révisions intensives'
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-dark to-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">AB</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Auto École</h3>
                <p className="text-sm opacity-90">Brahim Bougadom</p>
              </div>
            </div>
            
            <p className="text-sm opacity-90 mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
              إبراهيم بوݣدوم لتعليم السياقة
            </p>
            
            <p className="opacity-90 mb-6">
              Votre partenaire de confiance pour apprendre à conduire en toute sécurité à Salé.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="tel:0658859713"
                className="w-10 h-10 bg-success rounded-full flex items-center justify-center hover:bg-success-light transition-colors duration-300"
                aria-label="Appeler"
              >
                <Phone size={20} />
              </a>
              <a
                href="https://wa.me/212658859713"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="opacity-90 hover:opacity-100 hover:text-success transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="opacity-90 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-success" />
                <div>
                  <p className="text-sm opacity-90">
                    101 Rte de Mehdia, Hay Al Mouhit, Salé 11160, Maroc
                  </p>
                  <p className="text-xs opacity-75 mt-1" style={{ fontFamily: 'Arial, sans-serif' }}>
                    رقم 101، حي المحيط، بوشوك، طريق المهدية، سلا
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-success" />
                <a href="tel:0658859713" className="opacity-90 hover:opacity-100 transition-opacity">
                  0658-859713
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock size={18} className="mt-1 flex-shrink-0 text-success" />
                <div>
                  <p className="text-sm opacity-90">Lun–Sam: 09:00–19:00</p>
                  <p className="text-sm opacity-90">Dimanche fermé</p>
                  <p className="text-xs opacity-75 mt-1" style={{ fontFamily: 'Arial, sans-serif' }}>
                    الإثنين–السبت: 09:00–19:00 • الأحد مغلق
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm opacity-90">
                © 2024 Auto École Brahim Bougadom. Tous droits réservés.
              </p>
              <p className="text-xs opacity-75 mt-1" style={{ fontFamily: 'Arial, sans-serif' }}>
                © 2024 إبراهيم بوݣدوم لتعليم السياقة. جميع الحقوق محفوظة.
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm opacity-90">
              <span>🏆 15+ ans d'expérience</span>
              <span>✅ 95% de réussite</span>
              <span>🚗 Véhicules modernes</span>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs opacity-75">
              Les horaires peuvent varier pendant les périodes de fêtes religieuses (Mawlid, Ramadan, etc.)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;