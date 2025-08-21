const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ana e Carlos Silva",
      event: "Casamento",
      text: "Nosso casamento foi perfeito! Cada detalhe foi cuidadosamente planejado e executado. A equipe superou todas as nossas expectativas.",
      rating: 5
    },
    {
      id: 2,
      name: "Empresa TechCorp",
      event: "Evento Corporativo",
      text: "Organização impecável do nosso evento anual. Profissionalismo e atenção aos detalhes que fizeram toda a diferença.",
      rating: 5
    },
    {
      id: 3,
      name: "Maria Fernanda",
      event: "Formatura",
      text: "Minha formatura foi inesquecível! Agradeço pela dedicação e carinho na organização deste momento tão especial.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            O que dizem
            <span className="block bg-gradient-primary bg-clip-text text-transparent font-semibold">
              Nossos Clientes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-smooth animate-fade-up"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-accent fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-foreground mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold text-foreground">
                  {testimonial.name}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {testimonial.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;