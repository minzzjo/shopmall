import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { IoCartOutline } from 'react-icons/io5';
import { getCarts } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';


export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery({ queryKey: ['carts'], queryFn: () => getCarts(uid) });
  console.log(products)

  return (
		<div className='relative'>
			{products && <p className='absolute bg-main rounded-full w-4 h-4 -top-0.5 left-4 text-white text-xs text-center font-bold'>{products.length}</p>}
			<IoCartOutline className='text-3xl' />
		</div>
	);
}

