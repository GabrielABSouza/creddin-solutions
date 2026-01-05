import { Briefcase, PiggyBank, Clock, Shield } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "CLT",
    description: "Crédito com desconto em folha para trabalhadores CLT. Taxas reduzidas e parcelas fixas.",
    features: ["Até 48x", "Taxas a partir de 3%"],
  },
  {
    icon: PiggyBank,
    title: "FGTS",
    description: "Antecipe seu saque-aniversário do FGTS e tenha dinheiro na mão agora.",
    features: ["Libere até 5 anos", "Pagamento em 10 minutos"],
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções de crédito pensadas para o trabalhador brasileiro
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-xl transition-shadow border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
          {[
            { icon: Clock, label: "Aprovação Rápida", value: "Em até 24h" },
            { icon: Shield, label: "100% Seguro", value: "Dados protegidos" },
          ].map((item, index) => (
            <div key={index} className="text-center p-6">
              <item.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
              <p className="font-semibold text-foreground">{item.label}</p>
              <p className="text-sm text-muted-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
