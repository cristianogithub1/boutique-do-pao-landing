
// src/components/ProductCard.tsx
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-bread-dark">{product.name}</h3>
          <span className="bg-bread-primary text-white px-3 py-1 rounded-full text-sm">
            {product.price}
          </span>
        </div>
        
        <p className="text-bread-secondary mt-2">{product.description}</p>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm">
            <span className="font-medium">Tamanhos:</span>
            <div className="flex space-x-2 mt-1">
              {product.sizes.map(size => (
                <span key={size} className="border border-bread-light px-2 py-1 rounded">
                  {size}
                </span>
              ))}
            </div>
          </div>
          
          <Link 
            to={`/encomendar/${product.id}`} 
            className="bg-bread-primary text-white px-4 py-2 rounded-lg hover:bg-bread-secondary transition-colors"
          >
            Encomendar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;