import { useState } from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { CheckoutSheet } from './CheckoutSheet';

export function Cart() {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div className="flex flex-col h-[100dvh] bg-white pt-10 relative">
      <div className="flex justify-center border-b border-gray-200 pb-6 mb-2">
        <h1 className="text-xl font-bold text-gray-900">My Cart</h1>
      </div>

      {items.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center pb-32 px-5">
          <p className="text-gray-500 font-medium text-lg">Your cart is empty.</p>
        </div>
      ) : (
        <div className="flex flex-col flex-1 overflow-y-auto pb-32 px-5 hide-scrollbar">
          {items.map((item) => (
            <div key={item.product.id} className="flex items-center py-6 border-b border-gray-200">
              <div className="w-20 h-20 mr-4 flex items-center justify-center shrink-0">
                <img src={item.product.imageUrl} alt={item.product.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
              </div>
              <div className="flex-1 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-[17px] font-bold text-gray-900 leading-tight mb-1">{item.product.name}</h3>
                    <p className="text-[15px] font-medium text-gray-500">{item.product.unit}</p>
                  </div>
                  <button onClick={() => removeItem(item.product.id)} className="text-gray-400 p-1">
                    <X size={24} />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                      className="w-11 h-11 rounded-[14px] flex items-center justify-center border border-gray-200 text-gray-400"
                    >
                      <Minus size={24} strokeWidth={2.5} />
                    </button>
                    <span className="text-[17px] font-semibold w-5 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="w-11 h-11 rounded-[14px] flex items-center justify-center border border-gray-200 text-primary"
                    >
                      <Plus size={24} strokeWidth={2.5} />
                    </button>
                  </div>
                  <span className="font-bold text-[19px] text-gray-900 tracking-tight">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {items.length > 0 && (
        <div className="absolute bottom-20 md:bottom-6 left-5 right-5 z-20">
          <button 
            onClick={() => setIsCheckoutOpen(true)}
            className="w-full bg-primary hover:bg-primary-dark transition-colors text-white font-semibold py-5 rounded-2xl text-[19px] flex items-center justify-center relative"
          >
            <span>Go to Checkout</span>
            <div className="absolute right-4 bg-[#489E67] px-2 py-1 rounded text-sm tracking-wide">
              ${getTotalPrice().toFixed(2)}
            </div>
          </button>
        </div>
      )}

      <CheckoutSheet 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        total={getTotalPrice()} 
      />
    </div>
  );
}
