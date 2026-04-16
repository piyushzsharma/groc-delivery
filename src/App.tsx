import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './components/layout/RootLayout';
import { Splash, Onboarding, Login, Signup, OTP, LocationSelect } from './pages/auth';
import { Home, CategoryListing, ProductDetails, Search, Favorites } from './pages/main';
import { Cart, CheckoutSuccess, CheckoutError } from './pages/checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Splash /> },
      { path: 'onboarding', element: <Onboarding /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: 'otp', element: <OTP /> },
      { path: 'location', element: <LocationSelect /> },
      { path: 'home', element: <Home /> },
      { path: 'category/:id', element: <CategoryListing /> },
      { path: 'product/:id', element: <ProductDetails /> },
      { path: 'search', element: <Search /> },
      { path: 'favorites', element: <Favorites /> },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout/success', element: <CheckoutSuccess /> },
      { path: 'checkout/error', element: <CheckoutError /> },
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
