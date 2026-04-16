import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Carrot, EyeOff } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export function Login() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth action
    setAuth({
      id: 'usr123',
      email,
      phoneNumber: '',
      savedLocations: []
    });
    navigate('/home');
  };

  return (
    <div className="flex flex-col h-[100dvh] bg-white px-5 pt-12 relative">
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-r from-red-50/50 via-white to-blue-50/50 opacity-40 -z-10 blur-xl"></div>
      
      <div className="flex justify-center mb-16">
        <Carrot size={48} className="text-primary" strokeWidth={1.5} fill="currentColor" />
      </div>
      
      <div className="mb-10">
        <h1 className="text-3xl font-semibold mb-3">Loging</h1>
        <p className="text-gray-500 text-base">Enter your emails and password</p>
      </div>

      <form onSubmit={handleLogin} className="flex flex-col flex-1">
        <div className="mb-6">
          <label className="text-sm font-semibold text-gray-500 mb-2 block tracking-wide">Email</label>
          <input 
            type="email" 
            placeholder="imshuvo97@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-lg py-2 border-b border-gray-200 focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        <div className="mb-4 relative">
          <label className="text-sm font-semibold text-gray-500 mb-2 block tracking-wide">Password</label>
          <input 
            type="password" 
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-lg py-2 border-b border-gray-200 focus:border-primary focus:outline-none transition-colors tracking-widest"
          />
          <button type="button" className="absolute right-0 top-9 text-gray-500">
            <EyeOff size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex justify-end mb-10">
          <button type="button" className="text-sm font-medium text-gray-800">
            Forgot Password?
          </button>
        </div>

        <button 
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark transition-colors text-white font-semibold py-4 rounded-2xl text-lg mt-auto mb-6"
        >
          Log In
        </button>

        <p className="text-center text-sm font-medium text-gray-800 mb-8">
          Don't have an account? <Link to="/signup" className="text-primary ml-1">Singup</Link>
        </p>
      </form>
    </div>
  );
}
