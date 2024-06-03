import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { addOrUpdateCarts } from '../api/firebase';
import Button from "../components/element/Button";
import { TiDelete } from 'react-icons/ti';
import { useAuthContext } from '../context/AuthContext';

export default function ProductDetail() {
  const { state: { product: { id, image, title, price, category, description, options } } } = useLocation();
  const [selected, setSelected] = useState('');
  const [success, setSuccess] = useState();

  const { uid } = useAuthContext();
  
  const handleChange = (e) => setSelected(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { id, image, title, price, category, option: selected, quantity: 1 };
    addOrUpdateCarts(product, uid);
    console.log(product);
    setSuccess('✅ 장바구니에 추가되었습니다 🛒')
    setSelected('');
  }

  return (
		<div className='flex flex-row px-4 gap-4'>
			<section className='w-1/2'>
				<p className='my-4 px-4 text-accent text-2xl font-semibold italic'>🛍️ {category}</p>
				<img src={image} alt={title}/>
			</section>

			<section className='w-1/2 py-16 px-4'>
				<h2 className='text-3xl font-semibold'>{title}</h2>
				<p className='my-2'>{description}</p>
				<p className='my-1 text-2xl font-bold text-sub'>₩ {price}</p>
				<form className='flex flex-col gap-4 mb-6'>
					<label htmlFor='options'>Size Options</label>
					<select onChange={handleChange} className='bg-sky-50 h-10 px-4'>
						{options.map((option) => (
							<option key={option.index} value={option}>
								{option}
							</option>
						))}
          </select>
          {selected && (
            <div className='flex flex-row justify-between items-center'>
              <section className='flex flex-row gap-4'>
                <p>Selected Item : </p>
                <p className='font-semibold text-xl' >{selected}</p>
              </section>
              
              <button onClick={() => setSelected('')}>
                <TiDelete />
              </button>
            </div>
          )}
          {success && <p>{success}</p>}
        </form>
        <Button text={'Add Carts'} onClick={handleSubmit} />
			</section>
		</div>
	);
}

