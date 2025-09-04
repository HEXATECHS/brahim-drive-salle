import { useState } from 'react';
import { Phone, Menu, X, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#accueil', label: 'Accueil', labelAr: 'الرئيسية' },
    { href: '#apropos', label: 'À propos', labelAr: 'من نحن' },
    { href: '#formations', label: 'Formations', labelAr: 'التكوينات' },
    { href: '#tarifs', label: 'Tarifs', labelAr: 'الأسعار' },
    { href: '#avis', label: 'Avis', labelAr: 'الآراء' },
    { href: '#contact', label: 'Contact', labelAr: 'اتصل بنا' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AB</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-foreground">Auto École</h1>
              <p className="text-xs text-muted-foreground">Brahim Bougadom</p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:0658859713"
              className="flex items-center space-x-2 px-4 py-2 bg-success text-success-foreground rounded-lg hover:bg-success-light transition-all duration-300 font-medium"
            >
              <Phone size={16} />
              <span>Appeler</span>
            </a>
            <a
              href="https://www.google.com/maps/place/Driving+School+Brahim+Bougadom/@34.0837482,-6.7840189,238m/data=!3m1!1e3!4m12!1m5!3m4!2zMzTCsDA1JzAzLjEiTiA2wrA0NycwMC45Ilc!8m2!3d34.0841944!4d-6.7835833!3m5!1s0xda7696aebd4c4df:0x2b7913ab2a1c27dd!8m2!3d34.0841316!4d-6.7836674!16s%2Fg%2F11xfpqzbkr?hl=en&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 btn-outline"
            >
              <MapPin size={16} />
              <span>Itinéraire</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                >
                  <span>{item.label}</span>
                  <span className="text-sm text-muted-foreground mr-2 float-right">{item.labelAr}</span>
                </a>
              ))}
              <div className="flex space-x-3 pt-4">
                <a
                  href="tel:0658859713"
                  className="flex-1 btn-success text-center"
                >
                  Appeler
                </a>
                <a
                  href="https://www.google.com/maps/place/Driving+School+Brahim+Bougadom/@34.0837482,-6.7840189,238m/data=!3m1!1e3!4m12!1m5!3m4!2zMzTCsDA1JzAzLjEiTiA2wrA0NycwMC45Ilc!8m2!3d34.0841944!4d-6.7835833!3m5!1s0xda7696aebd4c4df:0x2b7913ab2a1c27dd!8m2!3d34.0841316!4d-6.7836674!16s%2Fg%2F11xfpqzbkr?hl=en&entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-outline text-center"
                >
                  Itinéraire
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;