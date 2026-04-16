import { NavLink } from 'react-router-dom';
import { Home, Search, Heart, LogOut } from 'lucide-react';
import { mockCategories } from '../../utils/mockData';
import { useAuthStore } from '../../store/authStore';

export function DesktopSidebar() {
  const logout = useAuthStore(state => state.logout);

  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-gray-200 bg-white h-screen sticky top-0 overflow-y-auto">
      <div className="p-6">
        <h1 className="text-2xl font-bold flex items-center gap-2 text-primary tracking-tight">
          Groc
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-4">
        <NavLink to="/home" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${isActive ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
          <Home size={22} /> Home
        </NavLink>
        <NavLink to="/search" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${isActive ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
          <Search size={22} /> Explore
        </NavLink>
        <NavLink to="/favorites" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${isActive ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
          <Heart size={22} /> Favorites
        </NavLink>
      </nav>

      <div className="px-8 mt-4 mb-4">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Categories</h3>
        <ul className="space-y-3">
          {mockCategories.slice(0, 5).map(cat => (
            <li key={cat.id}>
              <NavLink to={`/search`} className="text-sm font-medium text-gray-500 hover:text-primary transition-colors">
                {cat.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 mt-auto border-t border-gray-100">
        <button onClick={logout} className="flex items-center gap-3 px-4 py-3 w-full text-red-500 hover:bg-red-50 rounded-xl transition-colors font-medium">
          <LogOut size={22} /> Logout
        </button>
      </div>
    </aside>
  );
}
