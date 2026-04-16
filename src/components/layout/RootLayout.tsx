import { Outlet } from 'react-router-dom';

export function RootLayout() {
  return (
    <div className="min-h-[100dvh] w-full font-sans flex flex-col md:flex-row bg-white relative">
      <Outlet />
    </div>
  );
}
