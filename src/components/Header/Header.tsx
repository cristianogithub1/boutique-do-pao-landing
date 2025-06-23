// src/components/Header.tsx
const Header = () => {
  return (
    <header className="bg-bread-secondary text-white py-4">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="flex items-center">
          <img 
            src="/images/logo.png" 
            alt="Logo Boutique do Pão" 
            className="h-12 w-12"
          />
          <h1 className="ml-3 text-xl font-bold">Boutique do Pão</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;