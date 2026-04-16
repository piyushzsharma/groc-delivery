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
    <div className="flex flex-col min-h-screen bg-white px-5 pt-12 relative md:items-center md:justify-center w-full">
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-r from-red-50/50 via-white to-blue-50/50 opacity-40 -z-10 blur-xl"></div>

      <div className="w-full md:max-w-md md:bg-white md:shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:border md:border-gray-100 md:p-10 md:rounded-[40px] flex flex-col z-10 relative">
        <div className="flex justify-center mb-16 md:mb-10">
          <Carrot size={48} className="text-primary md:w-16 md:h-16" strokeWidth={1.5} fill="currentColor" />
        </div>

        <div className="mb-10 text-left">
          <h1 className="text-3xl md:text-4xl font-semibold mb-3">Login</h1>
          <p className="text-gray-500 text-base">Enter your Email and Password</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col flex-1 md:flex-none">
          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-500 mb-2 block tracking-wide">Email</label>
            <input
              type="email"
              placeholder="aurafarm@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-lg py-2 border-b border-gray-200 focus:border-primary focus:outline-none transition-colors bg-transparent"
            />
          </div>

          <div className="mb-4 relative">
            <label className="text-sm font-semibold text-gray-500 mb-2 block tracking-wide">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-lg py-2 border-b border-gray-200 focus:border-primary focus:outline-none transition-colors tracking-widest bg-transparent"
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
            className="w-full bg-primary hover:bg-primary-dark transition-colors text-white font-semibold py-4 rounded-2xl text-lg mt-auto md:mt-4 mb-6"
          >
            Log In
          </button>

          <p className="text-center text-sm font-medium text-gray-800 md:mb-2 mb-8">
            Don't have an account? <Link to="/signup" className="text-primary ml-1">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
