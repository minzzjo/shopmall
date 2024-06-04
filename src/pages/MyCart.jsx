import React from 'react';
import useCarts from '../hooks/useCarts';
import Cart from '../components/Cart';
import Price from '../components/Price';
import Button from "../components/element/Button";
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';

const SHIPPING = 3000;

export default function MyCart() {
	const { cartsQuery: {isLoading,  data: products } } = useCarts();
  
	if (isLoading) return <p>Loading...⏳</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice = products && products.reduce((prev, current) => prev + parseInt(current.price) * current.quantity, 0);
  return (
		<>
			{!hasProducts && <p className='text-center mt-12 text-xl '>장바구니에 담긴 상품이 없습니다.</p>}
			{hasProducts && (
				<section className='flex flex-col mb-12 px-4'>
					<article>
						<h2 className='mt-4 mb-12 text-4xl text-center font-semibold '>My Cart 🛒</h2>
						<ul>{products && products.map((product) => <Cart key={product.id} product={product} />)}</ul>
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

