import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronDown, MapPin } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export function LocationSelect() {
  const navigate = useNavigate();
  const setLocation = useAuthStore(state => state.setLocation);

  const handleSubmit = () => {
    setLocation({
      id: 'loc1',
      label: 'Home',
      addressLine1: 'Banasree',
      addressLine2: 'Types of your area'
    });
    navigate('/home');
  };

  return (
    <div className="flex flex-col h-[100dvh] bg-white px-5 pt-12 relative">
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-r from-red-50/50 via-white to-orange-50/50 opacity-40 -z-10 blur-xl"></div>
      
      <button onClick={() => navigate(-1)} className="mb-8">
        <ChevronLeft size={28} strokeWidth={2} className="text-gray-900" />
      </button>
      
      <div className="flex justify-center mb-10">
        <div className="w-48 h-40 relative flex items-center justify-center bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNMCA4MEwzMCA2MEw3MCA4MEwxMDAgNjBWMTBMMzAgMzBMMCA1MFY4MFoiIGZpbGw9IiNFMkU4RjAiLz48cGF0aCBkPSJNMzAgNjBWMzBMMzAgMzAiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTcwIDgwdjQwIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')] bg-center bg-no-repeat bg-contain">
           {/* Fallback mock map Pin since illustration isn't directly exportable, but using CSS visual mockup */}
           <div className="w-full h-full relative opacity-50 bg-gray-200 clip-path-polygon-[0_100%,_30%_80%,_70%_100%,_100%_80%,_100%_0,_70%_20%,_30%_0,_0_20%]"></div>
           <MapPin size={64} className="text-[#F1C40F] absolute top-2 right-1/4" fill="#F1C40F" />
           <MapPin size={84} className="text-blue-500 absolute -top-4 z-10" fill="currentColor" strokeWidth={1} />
        </div>
      </div>
      
      <div className="text-center mb-16 px-4">
        <h1 className="text-[26px] font-semibold text-gray-900 mb-4">Select Your Location</h1>
        <p className="text-gray-500 text-[15px] leading-relaxed">
          Switch on your location to stay in tune with what's happening in your area
        </p>
      </div>

      <div className="flex flex-col flex-1">
        <div className="mb-6 relative">
          <label className="text-sm font-semibold text-gray-500 mb-2 block tracking-wide">Your Zone</label>
          <div className="flex items-center border-b border-gray-200 py-2">
            <select className="w-full text-lg focus:outline-none bg-transparent appearance-none text-gray-900 z-10">
              <option>Banasree</option>
              <option>Gulshan</option>
              <option>Banani</option>
            </select>
            <ChevronDown size={20} className="text-gray-500 absolute right-0" />
          </div>
        </div>

        <div className="mb-8 relative">
          <label className="text-sm font-semibold text-gray-500 mb-2 block tracking-wide">Your Area</label>
          <div className="flex items-center border-b border-gray-200 py-2">
            <select className="w-full text-lg focus:outline-none bg-transparent appearance-none text-gray-400 z-10">
              <option disabled selected>Types of your area</option>
              <option className="text-gray-900">Block A</option>
              <option className="text-gray-900">Block B</option>
            </select>
            <ChevronDown size={20} className="text-gray-500 absolute right-0" />
          </div>
        </div>

        <button 
          onClick={handleSubmit}
          className="w-full bg-primary hover:bg-primary-dark transition-colors text-white font-semibold py-4 rounded-2xl text-lg mt-auto mb-6"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
