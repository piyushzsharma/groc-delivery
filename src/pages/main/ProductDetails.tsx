import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Share, Plus, Minus, Heart, ChevronDown, ChevronRight } from 'lucide-react';
import { mockProducts } from '../../utils/mockData';
import { useCartStore } from '../../store/cartStore';

export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addItem = useCartStore(state => state.addItem);
  
  const product = mockProducts.find(p => p.id === id) || mockProducts[0];

  return (
    <div className="flex flex-col h-[100dvh] bg-white overflow-y-auto">
      <div className="bg-gray-100 rounded-b-[40px] pt-12 pb-10 px-5 relative h-[350px] flex items-center justify-center">
        <div className="absolute top-12 left-5 right-5 flex justify-between">
          <button onClick={() => navigate(-1)}><ChevronLeft size={28} /></button>
          <button><Share size={24} /></button>
        </div>
        <img src={product.imageUrl} alt={product.name} className="w-64 h-64 object-contain mix-blend-multiply" />
      </div>

      <div className="px-5 pt-6 pb-24">
        <div className="flex justify-between items-start mb-2 mt-4 mt-2">
          <h1 className="text-3xl font-bold text-gray-900 leading-tight tracking-tight flex-1 pr-4">{product.name}</h1>
          <button><Heart size={28} className="text-gray-400" /></button>
        </div>
        <p className="text-[17px] text-gray-500 font-medium mb-8">{product.unit}</p>

        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <button className="w-11 h-11 rounded-[14px] flex items-center justify-center border text-gray-400">
               <Minus size={24} strokeWidth={2.5} />
            </button>
            <span className="text-[19px] font-semibold w-6 text-center">1</span>
            <button className="w-11 h-11 rounded-[14px] flex items-center justify-center border border-gray-200 text-primary">
               <Plus size={24} strokeWidth={2.5} />
            </button>
          </div>
          <span className="text-[26px] font-bold text-gray-900 tracking-tight">${product.price.toFixed(2)}</span>
        </div>

        <div className="border-t border-gray-200 py-4 flex flex-col gap-2">
          <div className="flex justify-between items-center cursor-pointer mb-2">
             <h3 className="text-[17px] font-semibold text-gray-900">Product Detail</h3>
             <ChevronDown size={24} />
          </div>
          <p className="text-[15px] leading-relaxed text-gray-500 mb-2">{product.description}</p>
        </div>

        <div className="border-t border-gray-200 py-4 cursor-pointer flex justify-between items-center">
           <h3 className="text-[17px] font-semibold text-gray-900">Nutritions</h3>
           <div className="flex items-center gap-3">
             <span className="bg-gray-200 text-gray-600 text-[10px] px-2 py-1 rounded font-semibold uppercase">100gr</span>
             <ChevronRight size={24} />
           </div>
        </div>

        <div className="border-t border-b border-gray-200 py-4 cursor-pointer flex justify-between items-center mb-10">
           <h3 className="text-[17px] font-semibold text-gray-900">Review</h3>
           <div className="flex items-center gap-3">
             <div className="flex text-orange-500 gap-1">
               <span className="text-lg leading-none">★</span>
               <span className="text-lg leading-none">★</span>
               <span className="text-lg leading-none">★</span>
               <span className="text-lg leading-none">★</span>
               <span className="text-lg leading-none">★</span>
             </div>
             <ChevronRight size={24} />
           </div>
        </div>

        <button 
          onClick={() => addItem(product, 1)}
          className="w-full bg-primary hover:bg-primary-dark transition-colors text-white font-semibold py-5 rounded-2xl text-[19px]"
        >
          Add To Basket
        </button>
      </div>
    </div>
  );
}
