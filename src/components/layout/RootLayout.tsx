import { Outlet } from 'react-router-dom';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center w-full font-sans">
      <div className="w-full max-w-7xl bg-white min-h-[100dvh] relative flex flex-col md:flex-row shadow-sm mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
