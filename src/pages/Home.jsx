import React from 'react';
import Products from './Products';

export default function Home() {
  return (
    <div className='relative'>
      <img src="images/banner.jpg" alt="Banner" className='px-6 mb-4' />
      <Products />
    </div>
  );
}

