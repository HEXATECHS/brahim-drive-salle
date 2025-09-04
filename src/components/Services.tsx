import { Car, BookOpen, Users, Shield, Clock, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: 'Permis B - Conduite',
      titleAr: 'رخصة السياقة ب - قيادة',
      description: 'Formation pratique complète avec véhicules modernes et sécurisés',
      features: ['Leçons individuelles', 'Véhicules récents', 'Moniteur expérimenté', 'Flexibilité horaire'],
      popular: true
    },
    {
      icon: BookOpen,
      title: 'Code de la Route',
      titleAr: 'قانون السير',
      description: 'Préparation théorique intensive avec support pédagogique moderne',
      features: ['Cours en salle', 'Tests blancs', 'Support numérique', 'Accompagnement personnalisé'],
      popular: false
    },
    {
      icon: Users,
      title: 'Formation Accompagnée',
      titleAr: 'التكوين المصحوب',
      description: 'Apprentissage progressif avec supervision familiale',
      features: ['Encadrement parental', 'Suivi régulier', 'Préparation optimale', 'Confiance renforcée'],
      popular: false
    }
  ];

  const advantages = [
    { icon: Shield, title: 'Sécurité Garantie', description: 'Véhicules contrôlés et assurés' },
    { icon: Clock, title: 'Horaires Flexibles', description: 'Adaptation à votre emploi du temps' },
    { icon: CheckCircle, title: 'Réussite Assurée', description: '95% de taux de réussite' }
  ];

  return (
    <section id="formations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos Formations
          </h2>
          <h3 className="text-2xl md:text-3xl text-muted-foreground mb-6" style={{ fontFamily: 'Arial, sans-serif' }}>
            التكوينات المتوفرة
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des formations adaptées à tous les profils pour une conduite sûre et responsable
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className={`card-elegant p-8 fade-in ${service.popular ? 'ring-2 ring-primary ring-opacity-50' : ''}`}>
              {service.popular && (
                <div className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                  Le Plus Populaire
                </div>
              )}
              
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
              <h4 className="text-lg text-muted-foreground mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
                {service.titleAr}
              </h4>
              
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://wa.me/212658859713?text=Bonjour, je souhaite en savoir plus sur la formation"
                target="_blank"
                rel="noopener noreferrer"
                className={service.popular ? 'btn-hero w-full text-center' : 'btn-outline w-full text-center'}
              >
                S'inscrire
              </a>
            </div>
          ))}
        </div>

        {/* Advantages */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 fade-in">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Pourquoi Choisir Notre Auto-École ?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <advantage.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{advantage.title}</h4>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;