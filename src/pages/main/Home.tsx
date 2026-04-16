import { MapPin, Search as SearchIcon } from 'lucide-react';
import { mockProducts } from '../../utils/mockData';
import { ProductCard } from '../../components/ProductCard';

export function Home() {
  const exclusiveOffers = mockProducts.slice(0, 4);
  const bestSelling = mockProducts.slice(4, 8);

  return (
    <div className="flex flex-col h-full bg-white pt-10 px-5">
      <div className="flex justify-center mb-6">
        <div className="flex flex-col items-center">
          {/* Carrot mock SVG from Figma header */}
          <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
            <path d="M12.9248 10.3703L15.3479 6.83617L12.5694 5.92615L10.963 8.271M12.9248 10.3703L10.3752 5.09344L7.15064 4.88276L9.65876 9.42163M12.9248 10.3703C13.2036 10.1504 13.5684 9.99285 14.0538 9.967C15.6593 9.88147 18.2325 8.94002 20.3541 6.54157L21.3255 7.63852C19.2618 10.2289 16.9298 12.0152 15.3582 12.396C14.8697 12.5144 14.5028 12.8028 14.3315 13.1119C13.7533 14.1565 14.4935 15.6989 15.1121 16.81C16.892 20.0076 18.2435 23.3644 18.2435 23.3644L16.2731 23.4925C16.2731 23.4925 15.2286 20.7303 13.7196 17.5147C13.208 16.4251 12.28 15.2155 11.6425 14.281C11.4552 14.0065 11.4395 13.6595 11.5833 13.3601L12.9248 10.3703Z" fill="#53B175"/>
          </svg>
          <div className="flex items-center gap-2">
            <MapPin size={24} className="text-gray-800" strokeWidth={2} />
            <span className="text-[17px] font-semibold text-gray-800">Dhaka, Banassre</span>
          </div>
        </div>
      </div>
      
      <div className="relative mb-6">
        <SearchIcon size={22} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800" strokeWidth={2.5} />
        <input 
          type="text" 
          placeholder="Search Store" 
          className="w-full bg-gray-100 rounded-2xl py-4 flex items-center pl-14 pr-4 focus:outline-none text-base font-medium placeholder-gray-500"
        />
      </div>

      <div className="w-full bg-green-50 rounded-2xl p-6 flex flex-col justify-center mb-8 relative overflow-hidden h-32 border border-green-100 shadow-sm">
        <div className="flex gap-4 h-full relative z-10 w-full items-center">
            <img src="https://images.unsplash.com/photo-1571501443893-01ab1a129ef9?q=80&w=200&auto=format&fit=crop" className="absolute -right-10 w-40 h-40 object-cover mix-blend-multiply opacity-80 rotate-12" alt="banner bg" />
            <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 leading-tight">Fresh Vegetables</h2>
                <span className="text-primary text-[15px] font-semibold mt-1 inline-block">Get Up To 40% OFF</span>
            </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Exclusive Offer</h2>
          <button className="text-primary font-semibold text-[16px]">See all</button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:gap-6 hide-scrollbar -mx-5 px-5 md:mx-0 md:px-0">
          {exclusiveOffers.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>

      <div className="mb-8 cursor-pointer">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Best Selling</h2>
          <button className="text-primary font-semibold text-[16px]">See all</button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:gap-6 hide-scrollbar -mx-5 px-5 md:mx-0 md:px-0">
          {bestSelling.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  );
}
