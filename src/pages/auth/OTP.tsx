import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function OTP() {
  const navigate = useNavigate();

  const handleVerify = () => {
    navigate('/location');
  };

  return (
    <div className="flex flex-col h-[100dvh] bg-white px-5 pt-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-r from-red-50/50 via-white to-blue-50/50 opacity-40 -z-10 blur-xl"></div>
      
      <button onClick={() => navigate(-1)} className="mb-14">
        <ChevronLeft size={28} strokeWidth={2} className="text-gray-900" />
      </button>
      
      <div className="mb-8">
        <h1 className="text-[26px] font-semibold text-gray-900">Enter your 4-digit code</h1>
      </div>

      <div className="mb-auto">
        <label className="text-sm font-semibold text-gray-500 mb-2 block tracking-wide">Code</label>
        <input 
          type="tel" 
          maxLength={4}
          placeholder="- - - -"
          className="w-full text-lg py-2 border-b border-gray-200 focus:border-primary focus:outline-none transition-colors tracking-[0.5em] font-medium"
        />
      </div>

      <div className="flex justify-between items-center mb-8">
        <button className="text-[15px] font-medium text-primary">
          Resend Code
        </button>
        <button 
          onClick={handleVerify}
          className="bg-primary hover:bg-primary-dark transition-colors w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/30"
        >
          <ChevronRight size={28} strokeWidth={2.5} />
        </button>
      </div>

      {/* Spacer for native mobile keyboard visual balance */}
      <div className="h-64 md:hidden"></div>
    </div>
  );
}
