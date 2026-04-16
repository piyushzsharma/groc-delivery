import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carrot } from 'lucide-react';

export function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/onboarding'), 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary text-white w-full">
      <div className="flex items-center gap-4 animate-pulse">
        <Carrot size={56} className="text-white md:w-24 md:h-24" strokeWidth={1.5} />
        <div className="flex flex-col">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">Groc</h1>
          <span className="text-sm md:text-lg tracking-[0.25em] font-medium opacity-90 mt-1 md:mt-2">Online Groceriet</span>
        </div>
      </div>
    </div>
  );
}
