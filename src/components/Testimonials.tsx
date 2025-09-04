import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Salma Benali',
      nameAr: 'سلمى بنعلي',
      rating: 5,
      comment: 'Excellent moniteur ! M. Brahim est très patient et explique très bien. J\'ai eu mon permis du premier coup grâce à ses conseils.',
      commentAr: 'مدرب ممتاز! السيد إبراهيم صبور جداً ويشرح بشكل واضح. حصلت على رخصتي من المحاولة الأولى بفضل نصائحه.',
      course: 'Pack Complet',
      date: 'Mars 2024'
    },
    {
      name: 'Ahmed Slimani',
      nameAr: 'أحمد سليماني',
      rating: 5,
      comment: 'Formation de qualité avec un moniteur professionnel. Les véhicules sont récents et bien entretenus. Je recommande vivement !',
      commentAr: 'تكوين عالي الجودة مع مدرب محترف. السيارات حديثة ومُصانة جيداً. أنصح بشدة!',
      course: 'Pack Conduite',
      date: 'Février 2024'
    },
    {
      name: 'Fatima Zahra',
      nameAr: 'فاطمة الزهراء',
      rating: 5,
      comment: 'Auto-école sérieuse, horaires respectés, prix raisonnables. M. Brahim m\'a donné confiance en moi pour conduire.',
      commentAr: 'مدرسة سياقة جدية، مواعيد محترمة، أسعار معقولة. السيد إبراهيم أعطاني الثقة في النفس للقيادة.',
      course: 'Pack Complet',
      date: 'Janvier 2024'
    },
    {
      name: 'Youssef Tazi',
      nameAr: 'يوسف التازي',
      rating: 5,
      comment: 'Préparation au code excellente avec des explications claires. Réussi à l\'examen grâce à la qualité des cours.',
      commentAr: 'إعداد ممتاز لقانون السير مع شروحات واضحة. نجحت في الامتحان بفضل جودة الدروس.',
      course: 'Pack Code',
      date: 'Décembre 2023'
    },
    {
      name: 'Aicha Bennani',
      nameAr: 'عائشة بناني',
      rating: 5,
      comment: 'Moniteur à l\'écoute et très pédagogue. Atmosphère détendue qui permet d\'apprendre sereinement.',
      commentAr: 'مدرب مستمع وتربوي جداً. جو مريح يساعد على التعلم بهدوء.',
      course: 'Pack Conduite',
      date: 'Novembre 2023'
    },
    {
      name: 'Omar Kassimi',
      nameAr: 'عمر قاسمي',
      rating: 5,
      comment: 'Service impeccable ! Flexibilité des horaires appréciée. Auto-école que je recommande sans hésitation.',
      commentAr: 'خدمة لا تشوبها شائبة! مرونة المواعيد محل تقدير. مدرسة سياقة أنصح بها دون تردد.',
      course: 'Pack Complet',
      date: 'Octobre 2023'
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="avis" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Avis de Nos Élèves
          </h2>
          <h3 className="text-2xl md:text-3xl text-muted-foreground mb-6" style={{ fontFamily: 'Arial, sans-serif' }}>
            آراء طلابنا
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez ce que nos élèves pensent de leur formation avec nous
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 fade-in">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">500+</div>
            <div className="text-muted-foreground">Élèves Formés</div>
            <div className="text-sm text-muted-foreground" style={{ fontFamily: 'Arial, sans-serif' }}>طالب متخرج</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">95%</div>
            <div className="text-muted-foreground">Taux de Réussite</div>
            <div className="text-sm text-muted-foreground" style={{ fontFamily: 'Arial, sans-serif' }}>معدل النجاح</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <span className="text-4xl font-bold text-gradient mr-2">4.9</span>
              <div className="flex">{renderStars(5)}</div>
            </div>
            <div className="text-muted-foreground">Note Moyenne</div>
            <div className="text-sm text-muted-foreground" style={{ fontFamily: 'Arial, sans-serif' }}>التقييم المتوسط</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">15+</div>
            <div className="text-muted-foreground">Années d'Expérience</div>
            <div className="text-sm text-muted-foreground" style={{ fontFamily: 'Arial, sans-serif' }}>سنوات الخبرة</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-elegant p-6 fade-in">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Arial, sans-serif' }}>
                    {testimonial.nameAr}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {testimonial.course} • {testimonial.date}
                  </p>
                </div>
                <Quote className="w-8 h-8 text-primary/20 flex-shrink-0" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Comment */}
              <div className="space-y-3">
                <p className="text-foreground leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }}>
                  "{testimonial.commentAr}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Rejoignez Nos Élèves Satisfaits !
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Commencez votre formation dès aujourd'hui et obtenez votre permis avec confiance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/212658859713?text=Bonjour, je souhaite m'inscrire à l'auto-école"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero"
              >
                S'inscrire Maintenant
              </a>
              <a
                href="tel:0658859713"
                className="btn-outline"
              >
                Appeler pour Plus d'Infos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;