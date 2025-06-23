// src/hooks/useWhatsAppIntegration.ts
const formatWhatsAppMessage = (data: OrderFormValues, product: Product) => {
  return `🛒 *NOVA ENCOMENDA - BOUTIQUE DO PÃO* 🥖\n\n` +
    `*Produto:* ${product.name}\n` +
    `*Tamanho:* ${data.size}\n` +
    `*Quantidade:* ${data.quantity}\n` +
    `*Retirada:* ${new Date(data.pickupDate).toLocaleDateString('pt-BR')} às ${data.pickupTime}\n\n` +
    `*Cliente:* ${data.customerName}\n` +
    `*Contato:* ${data.phone}\n\n` +
    `*Observações:*\n${data.notes || 'Nenhuma'}\n\n` +
    `_Pedido gerado via site em ${new Date().toLocaleString('pt-BR')}_`;
};

const useWhatsAppIntegration = () => {
  const sendOrder = (data: OrderFormValues, product: Product) => {
    const message = formatWhatsAppMessage(data, product);
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const encodedMessage = encodeURIComponent(message);
    
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      '_blank'
    );
  };

  return { sendOrder };
};