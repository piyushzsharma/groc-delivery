import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, SlidersHorizontal, Plus } from 'lucide-react';
import { mockCategories, mockProducts } from '../../utils/mockData';
import { ProductCard } from '../../components/ProductCard';

export function CategoryListing() {
  const { id } = useParams();
  const navigate = useNavigate();
  const category = mockCategories.find(c => c.id === id) || mockCategories[0];
  const products = mockProducts; // In real app, filter by actual category IDs

  return (
    <div className="flex flex-col h-full bg-white pt-10 px-5 relative pb-20 md:pb-8">
      <div className="flex justify-between items-center mb-8 relative z-10 bg-white">
        <button onClick={() => navigate(-1)} className="absolute left-0"><ChevronLeft size={28} strokeWidth={2.5}/></button>
        <h1 className="text-xl font-bold text-gray-900 mx-auto max-w-[200px] truncate text-center">{category.name}</h1>
        <button className="absolute right-0"><SlidersHorizontal size={22} strokeWidth={2}/></button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pb-8">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
