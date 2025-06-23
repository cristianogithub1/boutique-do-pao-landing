// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-bread-dark text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Boutique do Pão. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;