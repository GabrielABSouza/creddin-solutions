import { MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Pronto para conquistar seu crédito?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
          Entre em contato com nossa equipe e faça uma simulação sem compromisso.
        </p>
        <a
          href="https://wa.me/5527981064382"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          <MessageCircle className="w-6 h-6" />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CTA;
