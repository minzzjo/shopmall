import React from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { addOrUpdateCarts, removeCarts } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function Cart({ product, product: { id, image, title, price, option, quantity } }) {
  const { uid } = useAuthContext();
  const handleMinus = () => {
    if (quantity < 2) {
      return;
    } else {
      console.log('Minus!')
      return addOrUpdateCarts(uid, { ...product, quantity: quantity - 1 });
    }
  }
  const handlePlus = () => {
    console.log('Plus!');
    addOrUpdateCarts(uid, { ...product, quantity: quantity + 1 });
  }
  const handleRemove = () => {
    console.log('remove!');
    removeCarts(uid, id);
  }
  return (
    <li className='flex flex-col'>
				<section className='flex flex-row mb-4 px-4 items-center justify-center'>
					<img src={image} alt={title} className='w-1/5 mr-8' />
					<article className='w-full flex flex-row justify-between'>
						<div>
							<p className='font-semibold text-lg'>{title}</p>
							<p>{option}</p>
							<p className='font-bold text-xl text-sub'>₩ {price}</p>
						</div>
						<div className='flex flex-row gap-4 items-center'>
							<AiOutlineMinusSquare onClick={handleMinus} />
							<span>{quantity}</span>
							<AiOutlinePlusSquare onClick={handlePlus} />
							<RiDeleteBin5Fill onClick={handleRemove} />
						</div>
					</article>
				</section>
		</li>
	);
}

