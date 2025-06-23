import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Product } from '@data/products';

const schema = z.object({
  productId: z.string(),
  size: z.string(),
  quantity: z.number().min(1).max(20),
  pickupDate: z.string().refine(val => !isNaN(Date.parse(val)), 
  pickupTime: z.string().regex(/^\d{2}:\d{2}$/),
  customerName: z.string().min(3),
  phone: z.string().min(11).regex(/^\d+$/),
  notes: z.string().optional()
});

type OrderFormValues = z.infer<typeof schema>;

interface OrderFormProps {
  product: Product;
  onClose: () => void;
}

const OrderForm = ({ product, onClose }: OrderFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<OrderFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      productId: product.id,
      quantity: 1
    }
  });

  const onSubmit = (data: OrderFormValues) => {
   // Dentro de OrderForm.tsx

// Adicione após o título do formulário:
<div className="space-y-4">
  {/* Campo Tamanho */}
  <div>
    <label className="block text-bread-dark mb-1">Tamanho</label>
    <div className="grid grid-cols-4 gap-2">
      {product.sizes.map(size => (
        <label 
          key={size}
          className="flex items-center justify-center p-2 border border-bread-primary rounded-lg cursor-pointer"
        >
          <input
            type="radio"
            value={size}
            {...register('size')}
            className="hidden peer"
          />
          <span className="peer-checked:font-bold peer-checked:text-bread-accent">
            {size}
          </span>
        </label>
      ))}
    </div>
    {errors.size && <p className="text-red-500 mt-1">Selecione um tamanho</p>}
  </div>

  {/* Campo Quantidade */}
  <div>
    <label className="block text-bread-dark mb-1">Quantidade</label>
    <div className="flex items-center">
      <button
        type="button"
        onClick={() => setValue('quantity', Math.max(1, getValues('quantity') - 1))}
        className="px-4 py-2 bg-gray-200 rounded-l-lg"
      >
        -
      </button>
      <input
        type="number"
        {...register('quantity', { valueAsNumber: true })}
        className="w-full py-2 text-center border-y"
      />
      <button
        type="button"
        onClick={() => setValue('quantity', getValues('quantity') + 1)}
        className="px-4 py-2 bg-gray-200 rounded-r-lg"
      >
        +
      </button>
    </div>
    {errors.quantity && <p className="text-red-500 mt-1">{errors.quantity.message}</p>}
  </div>

  {/* Data e Hora */}
  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="block text-bread-dark mb-1">Data de Retirada</label>
      <input
        type="date"
        min={new Date().toISOString().split('T')[0]}
        {...register('pickupDate')}
        className="w-full p-2 border rounded-lg"
      />
      {errors.pickupDate && <p className="text-red-500 mt-1">Data inválida</p>}
    </div>
    <div>
      <label className="block text-bread-dark mb-1">Horário</label>
      <select
        {...register('pickupTime')}
        className="w-full p-2 border rounded-lg"
      >
        <option value="">Selecione</option>
        {['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'].map(time => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>
      {errors.pickupTime && <p className="text-red-500 mt-1">Selecione um horário</p>}
    </div>
  </div>

  {/* Dados do Cliente */}
  <div className="space-y-4">
    <div>
      <label className="block text-bread-dark mb-1">Seu Nome</label>
      <input
        type="text"
        {...register('customerName')}
        className="w-full p-2 border rounded-lg"
        placeholder="Nome completo"
      />
      {errors.customerName && <p className="text-red-500 mt-1">Mínimo 3 caracteres</p>}
    </div>
    <div>
      <label className="block text-bread-dark mb-1">WhatsApp</label>
      <input
        type="tel"
        {...register('phone')}
        className="w-full p-2 border rounded-lg"
        placeholder="(00) 00000-0000"
      />
      {errors.phone && <p className="text-red-500 mt-1">Número inválido</p>}
    </div>
  </div>

  {/* Observações */}
  <div>
    <label className="block text-bread-dark mb-1">Observações</label>
    <textarea
      {...register('notes')}
      className="w-full p-2 border rounded-lg"
      rows={3}
      placeholder="Alguma restrição alimentar ou pedido especial?"
    />
  </div>
</div>
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
          <h2 className="text-2xl font-bold text-bread-dark mb-4">
            Encomenda: {product.name}
          </h2>

          {/* Campos do formulário serão implementados na fase 6 */}
          
          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-bread-dark text-bread-dark rounded-lg py-2"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 bg-bread-accent text-white rounded-lg py-2"
            >
              Finalizar Pedido
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};