'use client';

import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';

// Simulación de datos (En la Fase 2 vendrán desde Supabase)
const PRODUCTS_DATA = [
  { id: 1, name: "Gran Reserva Malbec 2020", category: "Vinos Tinto", price: 45.00, desc: "Crianza de 18 meses en roble francés con toques de vainilla.", image: "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?w=500" },
  { id: 2, name: "Chardonnay Edición Especial", category: "Vinos Blanco", price: 32.00, desc: "Sabor fresco y cítrico con matices de manzana verde.", image: "https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?w=500" },
  { id: 3, name: "Rosé D'Anjou Premium", category: "Vinos Rosado", price: 28.00, desc: "Aromático, ligero e ideal para maridar con mariscos.", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500" },
  { id: 4, name: "Tabla de Quesos & Jamón Ibérico", category: "Gourmet", price: 55.00, desc: "Selección de quesos madurados y jamón ibérico curado.", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500" }
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header storeName="Cava & Gourmet" />

      <main className="max-w-7xl mx-auto px-6 py-10 flex-grow">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Nuestra Selección</h1>
        <p className="text-gray-500 mb-8">Explora nuestro catálogo exclusivo y realiza tu pedido directamente.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS_DATA.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}