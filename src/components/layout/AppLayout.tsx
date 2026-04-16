import { Outlet } from 'react-router-dom';
import { DesktopSidebar } from './DesktopSidebar';
import { NavLink } from 'react-router-dom';
import { Home, Search, ShoppingCart, Heart, User } from 'lucide-react';

export function AppLayout() {
  return (
    <>
      <DesktopSidebar />
      <main className="flex-1 relative overflow-y-auto pb-16 md:pb-0 bg-white">
        <Outlet />
      </main>
      
      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 h-16 flex items-center justify-around z-50 text-gray-800 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
        <NavLink to="/home" className={({ isActive }) => `flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive ? 'text-primary' : ''}`}>
          {({ isActive }) => (
            <>
              <Home size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">Shop</span>
            </>
          )}
        </NavLink>
        <NavLink to="/search" className={({ isActive }) => `flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive ? 'text-primary' : ''}`}>
          {({ isActive }) => (
            <>
              <Search size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">Explore</span>
            </>
          )}
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => `flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive ? 'text-primary' : ''}`}>
          {({ isActive }) => (
            <>
              <ShoppingCart size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">Cart</span>
            </>
          )}
        </NavLink>
        <NavLink to="/favorites" className={({ isActive }) => `flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive ? 'text-primary' : ''}`}>
          {({ isActive }) => (
            <>
              <Heart size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">Favourite</span>
            </>
          )}
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => `flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive ? 'text-primary' : ''}`}>
          {({ isActive }) => (
            <>
              <User size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">Account</span>
            </>
          )}
        </NavLink>
      </nav>
    </>
  );
}
