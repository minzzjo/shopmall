import React, { useState } from 'react';
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <ul>
        {products.map((product) => <ProductCard key={product.id} product={product}/>)}
      </ul>
    </div>
  );
}

