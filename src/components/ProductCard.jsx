'use client';

import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, currencySymbol = "$" }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div className="relative h-48 w-full bg-gray-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          <span className="absolute top-3 left-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-md backdrop-blur-md">
            {product.category}
          </span>
        </div>
        
        <div className="p-5">
          <h3 className="font-bold text-lg text-gray-900">{product.name}</h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.desc}</p>
        </div>
      </div>

      <div className="p-5 pt-0 flex justify-between items-center mt-2">
        <span className="text-xl font-extrabold text-amber-900">
          {currencySymbol}{product.price.toFixed(2)}
        </span>
        <button 
          onClick={() => addToCart(product)}
          className="bg-amber-900 hover:bg-amber-950 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition"
          title="Agregar al pedido"
        >
          +
        </button>
      </div>
    </div>
  );
}