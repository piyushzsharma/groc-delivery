import { useNavigate } from 'react-router-dom';
import { ShoppingBag, X } from 'lucide-react';

export function CheckoutError() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-[100dvh] bg-black/40 px-5 absolute inset-0 z-50">
      <div className="bg-white w-full max-w-sm rounded-3xl p-6 relative flex flex-col items-center animate-fade-in shadow-2xl">
        <button 
          onClick={() => navigate(-1)} 
          className="absolute top-4 left-4 p-2 text-gray-900"
        >
          <X size={28} />
        </button>

        <div className="w-48 h-48 bg-green-50 rounded-full flex items-center justify-center mt-6 mb-8">
           {/* Mock illustrative bag */}
           <div className="bg-yellow-600/80 w-24 h-32 rounded-b flex items-center justify-center relative mix-blend-multiply">
              <ShoppingBag size={54} className="text-white opacity-80" />
           </div>
        </div>

        <h1 className="text-[28px] font-bold text-gray-900 leading-tight mb-3 text-center tracking-tight">
          Oops! Order Failed
        </h1>
        <p className="text-[17px] text-gray-500 mb-10 text-center font-medium">
          Something went terribly wrong.
        </p>

        <div className="w-full flex-col gap-3 flex pb-4">
          <button 
            onClick={() => navigate('/cart')}
            className="w-full bg-primary hover:bg-primary-dark transition-colors text-white font-semibold py-5 rounded-2xl text-[19px]"
          >
            Please Try Again
          </button>
          <button 
            onClick={() => navigate('/home')}
            className="w-full bg-transparent hover:bg-gray-50 transition-colors text-gray-900 font-semibold py-5 rounded-2xl text-[19px]"
          >
            Back to home
          </button>
        </div>
      </div>
    </div>
  );
}
