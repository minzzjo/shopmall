import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import useCarts from '../hooks/useCarts';


export default function CartStatus() {
	const { cartsQuery: { data: products } } = useCarts();

  return (
		<div className='relative'>
			{products && <p className='absolute bg-main rounded-full w-4 h-4 -top-0.5 left-4 text-white text-xs text-center font-bold'>{products.length}</p>}
			<IoCartOutline className='text-3xl' />
		</div>
	);
}

