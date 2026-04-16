import { useNavigate } from 'react-router-dom';
import { X, ChevronRight } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';

interface CheckoutSheetProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
}

export function CheckoutSheet({ isOpen, onClose, total }: CheckoutSheetProps) {
  const navigate = useNavigate();
  const clearCart = useCartStore(state => state.clearCart);

  if (!isOpen) return null;

  const handlePlaceOrder = () => {
    // Simulate API logic
    clearCart();
    navigate('/checkout/success');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end flex-col md:items-center md:bg-black/50 overflow-hidden">
      <div className="absolute inset-0 bg-black/40 md:hidden" onClick={onClose} />
      
      <div className="bg-gray-50 w-full md:w-[450px] rounded-t-[30px] md:rounded-[30px] md:mb-10 flex flex-col relative z-20 max-h-[90vh] shadow-2xl animate-slide-up">
        
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
           <h2 className="text-[26px] font-bold text-gray-900 tracking-tight">Checkout</h2>
           <button onClick={onClose} className="p-1"><X size={28} className="text-gray-900" /></button>
        </div>

        <div className="flex-1 overflow-y-auto hide-scrollbar">
          <div className="flex justify-between items-center px-6 py-5 border-b border-gray-200 cursor-pointer">
            <span className="text-[19px] font-semibold text-gray-500">Delivery</span>
            <div className="flex items-center gap-3">
              <span className="text-[17px] font-semibold text-gray-900">Select Method</span>
              <ChevronRight size={24} className="text-gray-900" />
            </div>
          </div>
          
          <div className="flex justify-between items-center px-6 py-5 border-b border-gray-200 cursor-pointer">
            <span className="text-[19px] font-semibold text-gray-500">Payment</span>
            <div className="flex items-center gap-3">
              <div className="bg-white px-2 py-0.5 rounded shadow-sm flex gap-1 items-center">
                 {/* Mock Mastercard circles */}
                 <div className="w-3 h-3 rounded-full bg-red-500 mix-blend-multiply opacity-90"></div>
                 <div className="w-3 h-3 rounded-full bg-orange-400 mix-blend-multiply opacity-90 -ml-1.5"></div>
              </div>
              <ChevronRight size={24} className="text-gray-900" />
            </div>
          </div>

          <div className="flex justify-between items-center px-6 py-5 border-b border-gray-200 cursor-pointer">
            <span className="text-[19px] font-semibold text-gray-500">Promo Code</span>
            <div className="flex items-center gap-3">
              <span className="text-[17px] font-semibold text-gray-900">Pick discount</span>
              <ChevronRight size={24} className="text-gray-900" />
            </div>
          </div>

          <div className="flex justify-between items-center px-6 py-5 border-b border-gray-200 cursor-pointer mb-4">
            <span className="text-[19px] font-semibold text-gray-500">Total Cost</span>
            <div className="flex items-center gap-3">
              <span className="text-[17px] font-semibold text-gray-900">${total.toFixed(2)}</span>
              <ChevronRight size={24} className="text-gray-900" />
            </div>
          </div>

          <div className="px-6 pb-6">
            <p className="text-[15px] font-medium text-gray-500 mb-6 leading-relaxed">
              By placing an order you agree to our<br/>
              <span className="text-gray-900">Terms</span> And <span className="text-gray-900">Conditions</span>
            </p>
            
            <button 
              onClick={handlePlaceOrder}
              className="w-full bg-primary hover:bg-primary-dark transition-colors text-white font-semibold py-5 rounded-2xl text-[19px]"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
