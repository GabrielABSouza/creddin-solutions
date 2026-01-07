import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-hero-gradient min-h-[90vh] flex items-center pt-20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in">
            Crédito rápido e{" "}
            <span className="text-accent">seguro</span> para você
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Especialistas em empréstimo consignado CLT e antecipação do saque-aniversário FGTS. Taxas justas e aprovação facilitada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <a
              href="#servicos"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all hover:gap-3"
            >
              Simular Agora
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5527981064382"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-foreground/20 transition-all"
            >
              WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/90 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Sem burocracia</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Taxas competitivas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Crédito na hora</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
