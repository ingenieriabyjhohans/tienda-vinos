'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { supabase } from '@/lib/supabase';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        // Consultar la tabla 'productos' en Supabase
        const { data, error } = await supabase
          .from('productos')
          .select('*')
          .eq('is_available', true);

        if (error) throw error;
        setProducts(data || []);
      } catch (error) {
        console.error('Error cargando productos:', error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header storeName="Cava & Gourmet" />

      <main className="max-w-7xl mx-auto px-6 py-10 flex-grow">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Nuestra Selección</h1>
        <p className="text-gray-500 mb-8">Explora nuestro catálogo exclusivo cargado en tiempo real desde Supabase.</p>

        {loading ? (
          <p className="text-gray-500">Cargando productos...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}