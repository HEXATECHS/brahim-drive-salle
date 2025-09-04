import { Phone, MapPin, MessageCircle } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section id="accueil" className="relative py-32 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Auto École Brahim Bougadom - Driving School in Salé"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in">
            Auto École
            <span className="block text-success">Brahim Bougadom</span>
          </h1>

          {/* Arabic Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 fade-in" style={{ fontFamily: 'Arial, sans-serif' }}>
            إبراهيم بوݣدوم لتعليم السياقة
          </h2>

          {/* Slogans */}
          <div className="space-y-4 mb-12 fade-in">
            <p className="text-xl md:text-2xl font-light text-white/90">
              Apprenez à conduire facilement et en toute sécurité à Salé
            </p>
            <p className="text-lg md:text-xl font-light text-white/80" style={{ fontFamily: 'Arial, sans-serif' }}>
              تعلم السياقة بسهولة وبأمان في سلا
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in">
            <a
              href="tel:0658859713"
              className="btn-hero flex items-center space-x-3 min-w-[200px] justify-center"
            >
              <Phone size={24} />
              <span>Appeler Maintenant</span>
            </a>
            
            <a
              href="https://wa.me/212658859713?text=Bonjour, je souhaite m'inscrire à l'auto-école"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-success flex items-center space-x-3 min-w-[200px] justify-center"
            >
              <MessageCircle size={24} />
              <span>Réserver sur WhatsApp</span>
            </a>
            
            <a
              href="https://www.google.com/maps/place/Driving+School+Brahim+Bougadom/@34.0837482,-6.7840189,238m/data=!3m1!1e3!4m12!1m5!3m4!2zMzTCsDA1JzAzLjEiTiA2wrA0NycwMC45Ilc!8m2!3d34.0841944!4d-6.7835833!3m5!1s0xda7696aebd4c4df:0x2b7913ab2a1c27dd!8m2!3d34.0841316!4d-6.7836674!16s%2Fg%2F11xfpqzbkr?hl=en&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/40 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 flex items-center space-x-3 min-w-[200px] justify-center"
            >
              <MapPin size={24} />
              <span>Itinéraire</span>
            </a>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-2">Pédagogie Moderne</h3>
              <p className="text-white/80">Méthodes d'apprentissage adaptées à chaque élève</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-2">Moniteur Expérimenté</h3>
              <p className="text-white/80">Plus de 15 ans d'expérience dans l'enseignement</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-2">Véhicules Modernes</h3>
              <p className="text-white/80">Flotte récente et parfaitement entretenue</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;