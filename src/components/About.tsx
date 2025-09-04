import { Award, Users, Car, Clock } from 'lucide-react';
import instructorImage from '@/assets/instructor-image.jpg';

const About = () => {
  const stats = [
    { icon: Award, value: '15+', label: 'Années d\'expérience', labelAr: 'سنوات من الخبرة' },
    { icon: Users, value: '500+', label: 'Élèves formés', labelAr: 'طالب متخرج' },
    { icon: Car, value: '95%', label: 'Taux de réussite', labelAr: 'معدل النجاح' },
    { icon: Clock, value: '6j/7', label: 'Disponibilité', labelAr: 'متاح' }
  ];

  return (
    <section id="apropos" className="py-20 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            À Propos de Nous
          </h2>
          <h3 className="text-2xl md:text-3xl text-muted-foreground mb-6" style={{ fontFamily: 'Arial, sans-serif' }}>
            من نحن
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une formation de qualité pour devenir un conducteur responsable et confiant sur les routes du Maroc
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Instructor Image */}
          <div className="fade-in">
            <div className="relative">
              <img
                src={instructorImage}
                alt="Brahim Bougadom - Moniteur d'auto-école expérimenté"
                className="w-full h-[500px] object-cover rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 fade-in">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Brahim Bougadom
              </h3>
              <h4 className="text-xl text-primary font-semibold mb-6">
                Moniteur d'Auto-École Certifié
              </h4>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Avec plus de 15 ans d'expérience dans l'enseignement de la conduite, 
                  je me dédie à former des conducteurs responsables et confiants.
                </p>
                <p>
                  Ma méthode pédagogique personnalisée s'adapte au rythme de chaque élève, 
                  garantissant un apprentissage efficace et sécurisé.
                </p>
                <p>
                  Basé à Salé, je connais parfaitement les routes locales et prépare 
                  mes élèves aux défis réels de la conduite urbaine et périurbaine.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="bg-card-elegant p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-foreground mb-4">Nos Valeurs</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Sécurité :</strong> Priorité absolue dans tous nos enseignements</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Patience :</strong> Accompagnement bienveillant de chaque élève</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Excellence :</strong> Formation de qualité pour une conduite maîtrisée</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 fade-in">
          {stats.map((stat, index) => (
            <div key={index} className="card-elegant p-6 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
              <div className="text-xs text-muted-foreground mt-1" style={{ fontFamily: 'Arial, sans-serif' }}>
                {stat.labelAr}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;