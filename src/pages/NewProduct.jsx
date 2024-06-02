import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct({ ...product, [name]: value });
    console.log(files[0]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
		<section className='text-center'>
			<form className='flex flex-col items-center gap-4' onSubmit={handleSubmit}>
				{file && <img src={URL.createObjectURL(file)} alt='local file' />}
				<input type='file' accept='image/*' name='product' id='product' required onChange={handleChange} className='w-9/12 px-4 py-2' />
				<input type='text' name='title' value={product.title ?? ''} id='title' required placeholder='제품명' onChange={handleChange} className={INPUTCSS} />
				<input type='number' name='price' value={product.price ?? ''} id='price' required placeholder='가격(원)' onChange={handleChange} className={INPUTCSS} />
				<input type='text' name='category' value={product.category ?? ''} id='category' required placeholder='카테고리' onChange={handleChange} className={INPUTCSS} />
				<input type='text' name='description' value={product.description ?? ''} id='description' required placeholder='설명' onChange={handleChange} className={INPUTCSS} />
				<input type='text' name='options' value={product.options ?? ''} id='options' required placeholder='옵션(콤마로 구분)' onChange={handleChange} className={INPUTCSS} />
			</form>
			<button className='my-4 px-4 py-2 bg-main text-white font-semibold rounded-lg'>제품 추가하기</button>
		</section>
	);
}

const INPUTCSS = 'w-9/12 px-4 py-2 border-2 border-zinc-200 hover:border-zinc-400 focus:bg-sky-50 outline-none'
