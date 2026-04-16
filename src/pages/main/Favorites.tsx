import { ChevronRight } from 'lucide-react';
import { mockProducts } from '../../utils/mockData';
import { useCartStore } from '../../store/cartStore';

export function Favorites() {
  const favorites = mockProducts.slice(0, 5); // Mocked favorites
  const addItem = useCartStore(state => state.addItem);

  const addAllToCart = () => {
    favorites.forEach(p => addItem(p, 1));
  };

  return (
    <div className="flex flex-col h-[100dvh] bg-white pt-10 relative">
      <div className="flex justify-center border-b border-gray-200 pb-5 mb-2">
        <h1 className="text-xl font-bold text-gray-900">Favorurite</h1>
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto pb-24 px-5">
        {favorites.map((product) => (
          <div key={product.id} className="flex items-center py-5 border-b border-gray-200">
            <div className="w-16 h-16 mr-4 flex items-center justify-center">
              <img src={product.imageUrl} alt={product.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
            </div>
            <div className="flex-1">
              <h3 className="text-[17px] font-bold text-gray-900 leading-tight mb-1">{product.name}</h3>
              <p className="text-[15px] font-medium text-gray-500">{product.unit}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-[17px]">${product.price.toFixed(2)}</span>
              <ChevronRight size={20} className="text-gray-900" />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-20 md:bottom-6 left-5 right-5">
        <button 
          onClick={addAllToCart}
          className="w-full bg-primary hover:bg-primary-dark transition-colors text-white font-semibold py-5 rounded-2xl text-[19px]"
        >
          Add All To Cart
        </button>
      </div>
    </div>
  );
}
