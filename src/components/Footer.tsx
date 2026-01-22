import logo from "@/assets/logo-creddin.png";
import { MapPin, Phone, Building2, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - About */}
          <div className="space-y-4">
            <img src={logo} alt="Creddin Financeira" className="h-12 brightness-0 invert" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Soluções em crédito consignado e antecipação FGTS com taxas justas e atendimento personalizado.
            </p>
          </div>

          {/* Column 2 - Institutional Data */}
          <div className="space-y-4">
            <h3 className="text-primary-foreground font-semibold text-base">Dados Institucionais</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/70">
                  <p className="font-medium text-primary-foreground/90">Creddin Financeira LTDA</p>
                  <p className="text-xs">CNPJ: 64.406.461/0001-41</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="tel:+5527992451413"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  (27) 99245-1413
                </a>
              </div>
            </div>
          </div>

          {/* Column 3 - Address */}
          <div className="space-y-4">
            <h3 className="text-primary-foreground font-semibold text-base">Endereço</h3>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <address className="text-primary-foreground/70 not-italic leading-relaxed">
                R. Humberto Serrano, 650 - Sala 901<br />
                Bairro Praia da Costa<br />
                Vila Velha - ES, 29101-460<br />
                Brasil
              </address>
            </div>
          </div>

          {/* Column 4 - Social Media */}
          <div className="space-y-4">
            <h3 className="text-primary-foreground font-semibold text-base">Redes Sociais</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/sejacreddin/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm group"
              >
                <div className="bg-primary-foreground/10 p-2 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <span>@sejacreddin</span>
              </a>
              <a
                href="https://wa.me/5527981064382"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm group"
              >
                <div className="bg-primary-foreground/10 p-2 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-primary-foreground/60 text-sm text-center">
            © {new Date().getFullYear()} Creddin Financeira LTDA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
