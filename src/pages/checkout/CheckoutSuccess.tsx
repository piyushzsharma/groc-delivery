import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';

export function CheckoutSuccess() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[100dvh] bg-white px-5 relative pb-32">
      {/* Background radial gradient mock */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-50/50 via-white to-red-50/30 opacity-70 -z-10 blur-xl"></div>
      
      <div className="relative mb-16 flex items-center justify-center mt-20">
        <div className="w-64 h-64 relative bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48cGF0aCBkPSJNNTAgNTBMMTUwIDE1ME0xNTAgNTBMTTUwIDE1MCIgc3Ryb2tlPSIjRTJFKEYwIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] bg-center bg-no-repeat bg-contain flex items-center justify-center">
            
            {/* Confetti mock elements */}
            <div className="absolute top-4 left-10 w-3 h-3 rounded-full bg-green-500"></div>
            <div className="absolute top-8 right-16 w-3 h-3 rounded-full bg-orange-400"></div>
            <div className="absolute top-20 right-8 w-4 h-4 rounded-full border border-purple-400"></div>
            <div className="absolute bottom-12 left-10 w-4 h-4 rounded-full border border-green-400"></div>
            <div className="absolute bottom-4 right-20 w-4 h-4 rounded-full bg-blue-500"></div>
            
            <div className="w-[180px] h-[180px] bg-primary rounded-full flex items-center justify-center relative shadow-[0_20px_40px_rgba(83,177,117,0.3)] z-10 border-[10px] border-green-100">
               <Check size={80} className="text-white" strokeWidth={3} />
            </div>
        </div>
      </div>

      <div className="text-center w-full px-4 mb-20 animate-fade-in">
        <h1 className="text-[32px] font-semibold text-gray-900 leading-tight mb-4 tracking-tight">
          Your Order has been<br/>accepted
        </h1>
        <p className="text-[17px] text-gray-500 leading-relaxed max-w-sm mx-auto">
          Your items has been placed and is on<br/>it's way to being processed
        </p>
      </div>

      <div className="w-full flex-col gap-4 flex mt-auto absolute bottom-10 left-0 px-5">
        <button 
          className="w-full bg-primary hover:bg-primary-dark transition-colors text-white font-semibold py-5 rounded-2xl text-[19px]"
        >
          Track Order
        </button>
        <button 
          onClick={() => navigate('/home')}
          className="w-full bg-transparent hover:bg-gray-50 transition-colors text-gray-900 font-semibold py-5 rounded-2xl text-[19px]"
        >
          Back to home
        </button>
      </div>
    </div>
  );
}
