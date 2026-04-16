import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Carrot, EyeOff, Check } from 'lucide-react';

export function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('Afsar Hossen Shuvo');
  const [email, setEmail] = useState('imshuvo97@gmail.com');
  const [password, setPassword] = useState('secret123');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/otp');
  };

  return (
    <div className="flex flex-col h-[100dvh] bg-white px-5 pt-12 relative">
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-r from-red-50/50 via-white to-orange-50/50 opacity-40 -z-10 blur-xl"></div>
      
      <div className="flex justify-center mb-16">
        <Carrot size={48} className="text-primary" strokeWidth={1.5} fill="currentColor" />
      </div>
      
      <div className="mb-10">
        <h1 className="text-3xl font-semibold mb-3">Sign Up</h1>
        <p className="text-gray-500 text-base">Enter your credentials to continue</p>
      </div>

      <form onSubmit={handleSignup} className="flex flex-col flex-1">
        <div className="mb-6">
          <label className="text-sm font-semibold text-gray-500 mb-2 block tracking-wide">Username</label>
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full text-lg py-2 border-b border-gray-200 focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        <div className="mb-6 relative">
          <label className="text-sm font-semibold text-gray-500 mb-2 block tracking-wide">Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-lg py-2 border-b border-gray-200 focus:border-primary focus:outline-none transition-colors pr-8"
          />
          {email.length > 5 && (
            <div className="absolute right-0 top-9 text-primary">
              <Check size={20} strokeWidth={2.5} />
            </div>
          )}
        </div>

        <div className="mb-6 relative">
          <label className="text-sm font-semibold text-gray-500 mb-2 block tracking-wide">Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-lg py-2 border-b border-gray-200 focus:border-primary focus:outline-none transition-colors tracking-widest pr-8"
          />
          <button type="button" className="absolute right-0 top-9 text-gray-500">
            <EyeOff size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div className="mb-10 mt-2">
          <p className="text-sm text-gray-500 leading-relaxed">
            By continuing you agree to our <span className="text-primary">Terms of Service</span><br/>
            and <span className="text-primary">Privacy Policy.</span>
          </p>
        </div>

        <button 
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark transition-colors text-white font-semibold py-4 rounded-2xl text-lg mt-auto mb-6"
        >
          Sign Up
        </button>

        <p className="text-center text-sm font-medium text-gray-800 mb-8">
          Already have an account? <Link to="/login" className="text-primary ml-1">Singup</Link>
        </p>
      </form>
    </div>
  );
}
