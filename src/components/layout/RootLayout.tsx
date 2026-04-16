import { Outlet, NavLink } from 'react-router-dom';
import { Home, Search, ShoppingCart, Heart } from 'lucide-react';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center w-full">
      <div className="w-full max-w-7xl bg-white min-h-screen relative flex flex-col md:flex-row shadow-sm">
        
        <main className="flex-1 relative overflow-y-auto pb-16 md:pb-0">
          <Outlet />
        </main>

        <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t h-16 flex items-center justify-around z-50 text-gray-500">
          <NavLink to="/home" className={({ isActive }) => `flex flex-col items-center justify-center w-full h-full ${isActive ? 'text-green-600' : ''}`}>
            <Home size={24} />
          </NavLink>
          <NavLink to="/search" className={({ isActive }) => `flex flex-col items-center justify-center w-full h-full ${isActive ? 'text-green-600' : ''}`}>
            <Search size={24} />
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => `flex flex-col items-center justify-center w-full h-full ${isActive ? 'text-green-600' : ''}`}>
            <ShoppingCart size={24} />
          </NavLink>
          <NavLink to="/favorites" className={({ isActive }) => `flex flex-col items-center justify-center w-full h-full ${isActive ? 'text-green-600' : ''}`}>
            <Heart size={24} />
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
