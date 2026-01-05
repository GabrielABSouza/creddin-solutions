import logo from "@/assets/logo-creddin.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <img src={logo} alt="Creddin Financeira" className="h-10 md:h-12" />
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-accent-foreground px-5 py-2.5 rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Fale Conosco
        </a>
      </div>
    </header>
  );
};

export default Header;
