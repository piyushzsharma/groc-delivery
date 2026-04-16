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
    <div className="flex flex-col items-center justify-center h-[100dvh] bg-primary text-white w-full">
      <div className="flex items-center gap-4 animate-pulse">
        <Carrot size={56} className="text-white" strokeWidth={1.5} />
        <div className="flex flex-col">
          <h1 className="text-6xl font-bold tracking-tight">nectar</h1>
          <span className="text-sm tracking-[0.25em] font-medium opacity-90 mt-1">online groceriet</span>
        </div>
      </div>
    </div>
  );
}
