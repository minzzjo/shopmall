import React from 'react';
import ProductCard from "../components/ProductCard";
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/firebase';

export default function Products() {
  const { isLoading, error, data: products } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })
  return (
    <div className='px-4'>
      {isLoading && <p>로딩 중...⏳</p>}
      {error && <p>Something is wrong😫</p>}
      <ul className='grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
        {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
      </ul>
    </div>
  );
}

