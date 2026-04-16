import { useNavigate } from 'react-router-dom';
import { Carrot } from 'lucide-react';

export function Onboarding() {
  const navigate = useNavigate();

  return (
    <div 
      className="flex flex-col justify-end h-[100dvh] w-full bg-cover bg-center relative"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80")' }}
    >
      <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      
      <div className="relative z-10 flex flex-col items-center px-6 pb-12 pt-10 text-center animate-fade-in">
        <Carrot size={48} className="text-white mb-6" strokeWidth={1.5} />
        <h1 className="text-white text-5xl font-semibold mb-4 leading-tight">
          Welcome<br />to our store
        </h1>
        <p className="text-white/80 text-base mb-10">
          Ger your groceries in as fast as one hour
        </p>
        <button 
          onClick={() => navigate('/login')}
          className="w-full bg-primary hover:bg-primary-dark transition-colors text-white font-semibold py-4 rounded-2xl text-lg"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
