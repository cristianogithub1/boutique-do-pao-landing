// src/sections/HeroSection.tsx
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-screen flex items-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Boutique do Pão</h1>
        <p className="text-xl md:text-2xl text-white mb-8">Pães artesanais feitos com amor e tradição</p>
        <Link 
          to="/encomendas" 
          className="bg-bread-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-bread-secondary transition-colors"
        >
          Faça sua encomenda
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;