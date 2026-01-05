import logo from "@/assets/logo-creddin.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logo} alt="Creddin Financeira" className="h-10 brightness-0 invert" />
          <p className="text-primary-foreground/60 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Creddin Financeira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
