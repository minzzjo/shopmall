import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAuthContext } from '../context/AuthContext';
import { getCarts } from '../api/firebase';
import Cart from '../components/Cart';
import Price from '../components/Price';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import Button from "../components/element/Button";

const SHIPPING = 3000;

export default function MyCart() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery({ queryKey: ['carts'], queryFn: () => getCarts(uid) });
  
  const hasProducts = products && products.length > 0;
  const totalPrice = products && products.reduce((prev, current) => prev + parseInt(current.price) * current.quantity, 0);
  return (
		<>
			{!hasProducts && <p>장바구니에 담긴 상품이 없습니다.</p>}
			{hasProducts && (
				<section className='flex flex-col mb-12 px-4'>
					<article>
						<h2 className='mt-4 mb-12 text-4xl text-center font-semibold '>My Cart 🛒</h2>
						<ul>{products && products.map((product) => <Cart key={product.id} product={product} uid={uid} />)}</ul>
					</article>
					<div className='flex flex-row mt-12 mb-8 gap-6 items-center justify-center text-center'>
						<Price text='합계' price={totalPrice} />
						<BsFillPlusCircleFill className='text-main text-3xl' />
						<Price text='배송비' price={SHIPPING} />
						<FaEquals className='text-main text-3xl' />
						<Price text='총계' price={totalPrice + SHIPPING} />
					</div>
					<Button text={'주문하기'} />
				</section>
			)}
		</>
	);
}

