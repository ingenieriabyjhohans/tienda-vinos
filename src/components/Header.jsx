'use client';

import { useCart } from '@/context/CartContext';

export default function Header({ storeName = "Cava & Gourmet" }) {
  const { cart } = useCart();
  
  // Calcular cantidad total de items agregados
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-900 text-amber-400 font-bold flex items-center justify-center rounded-lg text-xl">
            C
          </div>
          <span className="font-bold text-xl text-gray-900">{storeName}</span>
        </div>

        <button className="relative bg-amber-900 hover:bg-amber-950 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition">
          <span>Mi Pedido</span>
          <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {totalItems}
          </span>
        </button>
      </div>
    </header>
  );
}