import { Check, MessageCircle, Star } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: 'Pack Code',
      nameAr: 'حزمة قانون السير',
      price: '800',
      currency: 'DH',
      period: 'Forfait complet',
      periodAr: 'باقة شاملة',
      description: 'Préparation complète pour l\'examen théorique',
      features: [
        'Cours théoriques en salle',
        'Tests blancs illimités',
        'Support pédagogique',
        'Suivi personnalisé',
        'Révisions intensives'
      ],
      popular: false,
      buttonText: 'Choisir ce pack'
    },
    {
      name: 'Pack Conduite',
      nameAr: 'حزمة القيادة',
      price: '2500',
      currency: 'DH',
      period: '20h de conduite',
      periodAr: '20 ساعة قيادة',
      description: 'Formation pratique intensive avec moniteur expérimenté',
      features: [
        '20 heures de conduite',
        'Véhicules modernes',
        'Moniteur certifié',
        'Horaires flexibles',
        'Préparation à l\'examen'
      ],
      popular: true,
      buttonText: 'Le plus populaire'
    },
    {
      name: 'Pack Complet',
      nameAr: 'الحزمة الشاملة',
      price: '3200',
      currency: 'DH',
      period: 'Code + 20h conduite',
      periodAr: 'قانون + 20 ساعة',
      description: 'Formation complète pour obtenir votre permis B',
      features: [
        'Cours de code complets',
        '20 heures de conduite',
        'Tests blancs illimités',
        'Suivi personnalisé',
        'Garantie de réussite',
        'Support continu'
      ],
      popular: false,
      buttonText: 'Économie maximale'
    }
  ];

  const additionalServices = [
    { service: 'Heure de conduite supplémentaire', price: '150 DH' },
    { service: 'Test blanc individuel', price: '50 DH' },
    { service: 'Cours de rattrapage', price: '100 DH' },
    { service: 'Accompagnement examen', price: '200 DH' }
  ];

  return (
    <section id="tarifs" className="py-20 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tarifs & Formules
          </h2>
          <h3 className="text-2xl md:text-3xl text-muted-foreground mb-6" style={{ fontFamily: 'Arial, sans-serif' }}>
            الأسعار والحزم
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des formules adaptées à votre budget avec un excellent rapport qualité-prix
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`card-elegant p-8 fade-in relative ${pkg.popular ? 'ring-2 ring-primary scale-105 md:scale-110' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span>Recommandé</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <h4 className="text-lg text-muted-foreground mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
                  {pkg.nameAr}
                </h4>
                
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gradient">{pkg.price}</span>
                  <span className="text-xl text-muted-foreground ml-2">{pkg.currency}</span>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <div>{pkg.period}</div>
                  <div style={{ fontFamily: 'Arial, sans-serif' }}>{pkg.periodAr}</div>
                </div>
              </div>
              
              <p className="text-center text-muted-foreground mb-8">{pkg.description}</p>
              
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={`https://wa.me/212658859713?text=Bonjour, je souhaite m'inscrire au ${pkg.name} à ${pkg.price} DH`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center flex items-center justify-center space-x-2 ${
                  pkg.popular ? 'btn-hero' : 'btn-outline'
                }`}
              >
                <MessageCircle size={20} />
                <span>{pkg.buttonText}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-card rounded-2xl p-8 md:p-12 fade-in">
          <h3 className="text-3xl font-bold text-foreground text-center mb-8">
            Services Supplémentaires
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-secondary rounded-lg">
                <span className="text-foreground font-medium">{item.service}</span>
                <span className="text-primary font-bold text-lg">{item.price}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a
              href="https://wa.me/212658859713?text=Bonjour, je souhaite un devis personnalisé"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-success inline-flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>Demander un Devis</span>
            </a>
          </div>
        </div>

        {/* Payment Info */}
        <div className="text-center mt-12 fade-in">
          <div className="bg-gradient-card rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold text-foreground mb-4">Modalités de Paiement</h4>
            <p className="text-muted-foreground">
              Paiement échelonné possible • Espèces acceptées • Devis gratuit sur demande
            </p>
            <p className="text-sm text-muted-foreground mt-2" style={{ fontFamily: 'Arial, sans-serif' }}>
              إمكانية الدفع على أقساط • نقداً مقبول • تقدير مجاني عند الطلب
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;