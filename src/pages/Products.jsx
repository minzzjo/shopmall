import React from 'react';
import ProductCard from "../components/ProductCard";
import useProducts from '../hooks/useProducts';

export default function Products() {
  const { productsQuery: { isLoading, error, data: products } } = useProducts();
  return (
    <div className='px-4'>
      {isLoading && <p>Loading...⏳</p>}
      {error && <p>Something is wrong😫</p>}
      <ul className='grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
        {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
      </ul>
    </div>
  );
}

