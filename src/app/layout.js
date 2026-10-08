import './globals.css';
import { CartProvider } from '@/context/CartContext';

export const metadata = {
  title: 'Cava & Gourmet | Catálogo Digital',
  description: 'Catálogo profesional de productos gourmet y vinos exclusivos.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}