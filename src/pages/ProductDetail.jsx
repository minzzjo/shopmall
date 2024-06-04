import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TiDelete } from 'react-icons/ti';
import useCarts from '../hooks/useCarts';
import Button from "../components/element/Button";

export default function ProductDetail() {
  const { state: { product: { id, image, title, price, category, description, options } } } = useLocation();
  const [selected, setSelected] = useState('');
  const [success, setSuccess] = useState();

  const { addOrUpdateCartItem } = useCarts();
  
  const handleChange = (e) => setSelected(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { id, image, title, price, category, option: selected, quantity: 1 };
    addOrUpdateCartItem.mutate(product, {
      onSuccess: () => {
        setSuccess('장바구니에 추가되었습니다!');
        setTimeout(() => setSuccess(null), 30000);
      }
    });
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

