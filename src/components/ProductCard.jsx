import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product, product: { id, image, title, price, category, description } }) {
	const navigate = useNavigate();
  return (
		<div onClick={() => navigate(`/products/${id}`, { state: { product } })} className='cursor-pointer'>
			<li>
				<img src={image} alt={title} className='rounded-lg' />
				<section className='flex flex-row justify-between'>
					<div>
						<p className='font-bold'>{title}</p>
						<p className='line-clamp-1 text-sm'>{description}</p>
						<p className='text-sm font-semibold italic'>{category}</p>
					</div>
					<p className='text-lg font-bold text-sub'>₩{price}</p>
				</section>
			</li>
		</div>
	);
}

