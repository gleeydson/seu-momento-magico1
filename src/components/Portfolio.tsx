import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      image: portfolio1,
      title: "Casamento Elegante",
      description: "Mesa principal com decoração sofisticada em tons dourados",
      category: "Casamento"
    },
    {
      id: 2,
      image: portfolio2,
      title: "Recepção Romântica",
      description: "Salão de festa com iluminação especial e ambiente acolhedor",
      category: "Casamento"
    },
    {
      id: 3,
      image: portfolio3,
      title: "Evento Corporativo",
      description: "Organização profissional para eventos empresariais",
      category: "Corporativo"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            Nosso
            <span className="block bg-gradient-accent bg-clip-text text-transparent font-semibold">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada evento é único e especial. Veja alguns dos nossos trabalhos mais marcantes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elegant transition-smooth animate-scale-in"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-smooth"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-smooth">
                <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4">
                  <span className="inline-block px-3 py-1 bg-gradient-primary text-primary-foreground text-sm rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Gostou do que viu? Entre em contato para conhecer mais projetos.
          </p>
          <button 
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-accent text-accent-foreground px-8 py-3 rounded-lg hover:shadow-elegant transition-smooth transform hover:scale-105"
          >
            Ver Mais Projetos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;