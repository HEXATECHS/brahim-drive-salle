import { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Send, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Bonjour, je suis ${formData.name}. Téléphone: ${formData.phone}. Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/212658859713?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      titleAr: 'الهاتف',
      content: '0658-859713',
      link: 'tel:0658859713',
      description: 'Appelez-nous directement'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      titleAr: 'واتساب',
      content: '0658-859713',
      link: 'https://wa.me/212658859713',
      description: 'Contactez-nous sur WhatsApp'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      titleAr: 'العنوان',
      content: '101 Rte de Mehdia, Hay Al Mouhit, Salé',
      contentAr: 'رقم 101، حي المحيط، بوشوك، طريق المهدية، سلا',
      link: 'https://www.google.com/maps/place/Driving+School+Brahim+Bougadom/@34.0837482,-6.7840189,238m/data=!3m1!1e3!4m12!1m5!3m4!2zMzTCsDA1JzAzLjEiTiA2wrA0NycwMC45Ilc!8m2!3d34.0841944!4d-6.7835833!3m5!1s0xda7696aebd4c4df:0x2b7913ab2a1c27dd!8m2!3d34.0841316!4d-6.7836674!16s%2Fg%2F11xfpqzbkr?hl=en&entry=ttu',
      description: 'Voir sur Google Maps'
    },
    {
      icon: Clock,
      title: 'Horaires',
      titleAr: 'ساعات العمل',
      content: 'Lun–Sam: 09:00–19:00',
      contentAr: 'الإثنين–السبت: 09:00–19:00',
      description: 'Dimanche fermé • الأحد مغلق'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contactez-Nous
          </h2>
          <h3 className="text-2xl md:text-3xl text-muted-foreground mb-6" style={{ fontFamily: 'Arial, sans-serif' }}>
            اتصل بنا
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prêt à commencer votre formation ? Contactez-nous dès maintenant !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 fade-in">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8">
                Informations de Contact
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="card-elegant p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-foreground">{info.title}</h4>
                          <span className="text-sm text-muted-foreground" style={{ fontFamily: 'Arial, sans-serif' }}>
                            {info.titleAr}
                          </span>
                        </div>
                        
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-primary hover:text-primary-light transition-colors duration-300 font-medium"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{info.content}</p>
                        )}
                        
                        {info.contentAr && (
                          <p className="text-sm text-muted-foreground mt-1" style={{ fontFamily: 'Arial, sans-serif' }}>
                            {info.contentAr}
                          </p>
                        )}
                        
                        <p className="text-sm text-muted-foreground mt-2">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-card rounded-xl p-6">
              <h4 className="text-xl font-semibold text-foreground mb-4">Actions Rapides</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:0658859713"
                  className="btn-success text-center"
                >
                  <Phone className="w-5 h-5 mx-auto mb-1" />
                  Appeler
                </a>
                <a
                  href="https://wa.me/212658859713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-center"
                >
                  <MessageCircle className="w-5 h-5 mx-auto mb-1" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in">
            <div className="card-elegant p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Envoyez-nous un Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-foreground font-medium mb-2">
                    Nom Complet <span className="text-muted-foreground" style={{ fontFamily: 'Arial, sans-serif' }}>الاسم الكامل</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-foreground font-medium mb-2">
                    Téléphone <span className="text-muted-foreground" style={{ fontFamily: 'Arial, sans-serif' }}>الهاتف</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="06XX-XXXXXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-foreground font-medium mb-2">
                    Message <span className="text-muted-foreground" style={{ fontFamily: 'Arial, sans-serif' }}>الرسالة</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-hero w-full flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Envoyer via WhatsApp</span>
                </button>
              </form>
              
              <div className="mt-6 p-4 bg-secondary rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Ce formulaire enverra votre message via WhatsApp pour une réponse rapide
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Integration */}
        <div className="mt-16 fade-in">
          <div className="bg-card rounded-2xl p-4 shadow-elegant">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Notre Localisation
            </h3>
            <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472.6326881804447!2d-6.784018914537718!3d34.08374822135947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7696aebd4c4df%3A0x2b7913ab2a1c27dd!2sDriving%20School%20Brahim%20Bougadom!5e0!3m2!1sen!2sma!4v1703123456789!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Auto École Brahim Bougadom - Localisation"
              ></iframe>
            </div>
            <div className="text-center mt-4">
              <a
                href="https://www.google.com/maps/place/Driving+School+Brahim+Bougadom/@34.0837482,-6.7840189,238m/data=!3m1!1e3!4m12!1m5!3m4!2zMzTCsDA1JzAzLjEiTiA2wrA0NycwMC45Ilc!8m2!3d34.0841944!4d-6.7835833!3m5!1s0xda7696aebd4c4df:0x2b7913ab2a1c27dd!8m2!3d34.0841316!4d-6.7836674!16s%2Fg%2F11xfpqzbkr?hl=en&entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center space-x-2"
              >
                <MapPin size={20} />
                <span>Ouvrir dans Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;