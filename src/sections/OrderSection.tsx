// src/sections/OrderSection.tsx
import { useState } from 'react';
import { Product } from '@/data/products';
import products from '@/data/products';

const OrderSection = () => {
  const [orderData, setOrderData] = useState({
    productId: '',
    size: '',
    quantity: 1,
    pickupDate: '',
    pickupTime: '',
    customerName: '',
    phone: '',
    notes: ''
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setOrderData(prev => ({
      ...prev,
      [name]: name === 'quantity' ? parseInt(value) : value
    }));
  };

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const productId = e.target.value;
    const product = products.find(p => p.id === productId) || null;
    setSelectedProduct(product);
    setOrderData(prev => ({
      ...prev,
      productId,
      size: product?.sizes[0] || ''
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  // Validação
  if (!orderData.productId || !orderData.size || !orderData.pickupDate || 
      !orderData.pickupTime || !orderData.customerName || !orderData.phone) {
    alert('Por favor, preencha todos os campos obrigatórios');
    return;
  }
  
  const product = products.find(p => p.id === orderData.productId);
  sendWhatsAppOrder(product);
};

const sendWhatsAppOrder = (product: Product | undefined) => {
  if (!product) return;
  
  const message = `Nova Encomenda - Boutique do Pão%0A%0A
    *Produto:* ${product.name}%0A
    *Tamanho:* ${orderData.size}%0A
    *Quantidade:* ${orderData.quantity}%0A
    *Data de Retirada:* ${orderData.pickupDate}%0A
    *Horário:* ${orderData.pickupTime}%0A%0A
    *Cliente:* ${orderData.customerName}%0A
    *Telefone:* ${orderData.phone}%0A%0A
    *Observações:* ${orderData.notes || 'Nenhuma'}`;

  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5522998448059';
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
};

// Chamar esta função no handleSubmit
}
  