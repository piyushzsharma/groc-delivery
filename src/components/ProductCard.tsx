import { Plus } from 'lucide-react';
import type { Product } from '../types';
import { useCartStore } from '../store/cartStore';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const navigate = useNavigate();

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, 1);
  };

  return (
    <div 
      onClick={() => navigate(`/product/${product.id}`)}
      className="border border-gray-200 rounded-2xl p-4 flex flex-col bg-white cursor-pointer hover:border-primary transition-colors min-w-[160px]"
    >
      <div className="h-28 w-full mb-4 flex items-center justify-center">
        <img src={product.imageUrl} alt={product.name} className="max-h-full max-w-full object-contain mix-blend-multiply" />
      </div>
      <h3 className="font-bold text-gray-900 tracking-tight leading-tight">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-4 mt-1">{product.unit}</p>
      
      <div className="flex items-center justify-between mt-auto">
        <span className="font-bold text-lg tracking-wide">${product.price.toFixed(2)}</span>
        <button 
          onClick={handleAdd}
          className="bg-primary hover:bg-primary-dark transition-colors text-white w-11 h-11 rounded-2xl flex items-center justify-center"
        >
          <Plus size={24} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
