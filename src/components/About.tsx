import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light text-foreground">
              Sobre
              <span className="block bg-gradient-accent bg-clip-text text-transparent font-semibold">
                Nossa História
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com mais de 10 anos de experiência em cerimonial, nossa missão é tornar 
              cada evento uma experiência única e emocionante. Acreditamos que cada 
              celebração merece atenção especial aos detalhes.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Especializados em casamentos, eventos corporativos, formaturas e 
              celebrações especiais, trabalhamos com dedicação para superar as 
              expectativas de nossos clientes em cada projeto.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-muted-foreground">Eventos Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-muted-foreground">Anos de Experiência</div>
              </div>
            </div>
            
            <Button 
              variant="elegant" 
              size="lg"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Entre em Contato
            </Button>
          </div>
          
          {/* Image/Stats */}
          <div className="relative">
            <div className="bg-gradient-hero rounded-2xl p-8 shadow-elegant">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Nossos Serviços
              </h3>
              <div className="space-y-4">
                {[
                  "Cerimonial de Casamento",
                  "Eventos Corporativos", 
                  "Formaturas e Confraternizações",
                  "Aniversários e Celebrações",
                  "Consultoria em Etiqueta",
                  "Coordenação de Fornecedores"
                ].map((service) => (
                  <div key={service} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;