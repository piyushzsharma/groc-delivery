import { Outlet } from 'react-router-dom';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center w-full">
      <div className="w-full max-w-7xl bg-white min-h-screen relative flex flex-col md:flex-row shadow-sm">
        
        <main className="flex-1 relative overflow-y-auto pb-16 md:pb-0">
          <Outlet />
        </main>

        <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t h-16 flex items-center justify-around z-50">
        </nav>
      </div>
    </div>
  );
}
