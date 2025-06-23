// src/App.tsx
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    datetime: '',
    order: ''
  });
  
  const [bgImageLoaded, setBgImageLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Verifica se a imagem de fundo foi carregada
  useEffect(() => {
    const img = new Image();
    img.src = '/images/logo-boutique.png';
    img.onload = () => setBgImageLoaded(true);
    img.onerror = () => console.error('Erro ao carregar a imagem de fundo');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formatar mensagem para o WhatsApp
    const message = `Olá, gostaria de fazer uma encomenda:%0A%0A*Nome:* ${formData.name}%0A*Telefone:* ${formData.phone}%0A*Data/Hora:* ${formData.datetime}%0A%0A*Encomenda:*%0A${formData.order}`;

    // Abrir o WhatsApp
    window.open(`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${message}`, '_blank');
    
    // Resetar formulário após 1 segundo
    setTimeout(() => {
      setFormData({ name: '', phone: '', datetime: '', order: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-gray-100">
      {/* Plano de fundo com fallback */}
      {bgImageLoaded ? (
        <div 
          className="fixed inset-0 z-0 opacity-15"
          style={{
            backgroundImage: `url('/images/logo-boutique.png')`,
            backgroundSize: '50%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            filter: 'sepia(100%) saturate(300%) hue-rotate(5deg)'
          }}
        ></div>
      ) : (
        <div className="fixed inset-0 z-0 bg-gradient-to-br from-yellow-50 to-amber-100"></div>
      )}
      
      {/* Overlay escuro com desfoque */}
      <div className="fixed inset-0 z-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>
      
      {/* Conteúdo principal */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-bread-light bg-opacity-80 text-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="flex justify-center mb-8">
                  <div className="bg-white bg-opacity-80 p-4 rounded-full">
                    <img
                      src="/images/logo-boutique.png"
                      alt="Logo Boutique do Pão"
                      className="mx-auto h-32 w-32"
                    />
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-bread-dark mb-4">
                  Boutique do Pão
                </h1>
                
                <div className="w-32 h-1 bg-bread-primary mx-auto mb-6"></div>
                
                <p className="text-xl md:text-2xl text-bread-secondary mb-6">
                  Pães artesanais feitos com amor e tradição
                </p>
                
                <p className="text-lg text-bread-dark italic max-w-2xl mx-auto">
                  "Faça sua encomenda e retire na hora marcada!"
                </p>
              </div>
            </div>
          </section>

          {/* Formulário de Encomenda */}
          <section className="py-12 md:py-16 bg-white bg-opacity-90">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-bread-dark mb-4">
                  Faça sua Encomenda
                </h2>
                <p className="text-lg text-bread-secondary">
                  Preencha o formulário abaixo e garanta seus produtos frescos
                </p>
              </div>
              
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-bread-dark mb-3 font-medium text-lg">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-bread-light rounded-lg focus:ring-2 focus:ring-bread-primary focus:border-transparent"
                      required
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label className="block text-bread-dark mb-3 font-medium text-lg">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-bread-light rounded-lg focus:ring-2 focus:ring-bread-primary focus:border-transparent"
                      required
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-bread-dark mb-3 font-medium text-lg">
                      Data e horário para retirada
                    </label>
                    <input
                      type="datetime-local"
                      name="datetime"
                      value={formData.datetime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-bread-light rounded-lg focus:ring-2 focus:ring-bread-primary focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-bread-dark mb-3 font-medium text-lg">
                      Sua encomenda
                    </label>
                    <textarea
                      name="order"
                      value={formData.order}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-bread-light rounded-lg focus:ring-2 focus:ring-bread-primary focus:border-transparent"
                      rows={5}
                      required
                      placeholder="Descreva detalhadamente o que você deseja encomendar..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-bread-primary text-white py-4 rounded-lg font-bold shadow-lg transition-all duration-300 hover:scale-[1.02] ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-bread-secondary'
                    }`}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Encomenda'}
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* Contatos */}
          <section className="py-12 md:py-16 bg-bread-light bg-opacity-90">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-bread-dark mb-10">
                Nossos Contatos
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-8 max-w-2xl mx-auto">
                <a
                  href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-5 rounded-xl flex flex-col items-center justify-center transition-all duration-300 shadow-lg hover:scale-[1.03]"
                >
                  <div className="bg-white p-3 rounded-full mb-3">
                    <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold">WhatsApp</span>
                </a>

                <a
                  href={import.meta.env.VITE_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white px-6 py-5 rounded-xl flex flex-col items-center justify-center transition-all duration-300 shadow-lg hover:scale-[1.03]"
                >
                  <div className="bg-white p-3 rounded-full mb-3">
                    <svg className="w-10 h-10 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold">Instagram</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;