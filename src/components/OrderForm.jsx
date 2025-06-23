// src/components/OrderForm.jsx
import React, { useState } from 'react';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    order: '',
    datetime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Formatar mensagem para WhatsApp
    const message = `Nova encomenda:%0A%0A*Nome:* ${formData.name}%0A*Telefone:* ${formData.phone}%0A*Data/Hora:* ${formData.datetime}%0A%0A*Encomenda:*%0A${formData.order}`;
    
    // Abrir WhatsApp
    window.open(`https://wa.me/5522998448059?text=${message}`, '_blank');
    
    // Limpar formulário
    setFormData({ name: '', phone: '', order: '', datetime: '' });
  };

  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-gold-300 mb-6 text-center">Faça sua Encomenda</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gold-200 mb-2">Nome completo</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black bg-opacity-30 border border-gold-500 rounded-lg text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label className="block text-gold-200 mb-2">Telefone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black bg-opacity-30 border border-gold-500 rounded-lg text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label className="block text-gold-200 mb-2">Data e horário para retirada</label>
          <input
            type="datetime-local"
            name="datetime"
            value={formData.datetime}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black bg-opacity-30 border border-gold-500 rounded-lg text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label className="block text-gold-200 mb-2">Sua encomenda</label>
          <textarea
            name="order"
            value={formData.order}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black bg-opacity-30 border border-gold-500 rounded-lg text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            rows={4}
            required
            placeholder="Descreva aqui o que você deseja encomendar..."
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-gold-600 to-gold-800 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity mt-6"
        >
          Enviar Encomenda
        </button>
      </form>
    </div>
  );
};

export default OrderForm;