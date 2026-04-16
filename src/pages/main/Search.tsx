import { Search as SearchIcon } from 'lucide-react';
import { mockCategories } from '../../utils/mockData';
import { useNavigate } from 'react-router-dom';

export function Search() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white pt-10 px-5">
      <div className="flex justify-center mb-6">
        <h1 className="text-xl font-bold text-gray-900">Find Products</h1>
      </div>
      
      <div className="relative mb-8">
        <SearchIcon size={22} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800" strokeWidth={2.5} />
        <input 
          type="text" 
          placeholder="Search Store" 
          className="w-full bg-gray-100 rounded-2xl py-4 flex items-center pl-14 pr-4 focus:outline-none text-base font-medium placeholder-gray-500"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-8">
        {mockCategories.map((cat, i) => (
          <div 
            key={cat.id}
            onClick={() => navigate(`/category/${cat.id}`)}
            className={`cursor-pointer rounded-3xl p-4 flex flex-col items-center justify-center border transition-all hover:scale-[1.02] min-h-[200px] ${cat.color} ${cat.color.replace('100', '300').replace('bg-', 'border-')}`}
            style={{ borderColor: 'rgba(0,0,0,0.1)' }}
          >
            <div className="h-24 w-full mb-6 flex justify-center items-center">
               <img src={cat.image} alt={cat.name} className="max-h-full max-w-full mix-blend-multiply object-contain rounded-xl" />
            </div>
            <h3 className="text-base font-bold text-center text-gray-900 leading-tight px-2">{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
