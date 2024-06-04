import React, { useState } from 'react';
import { uploadImage } from '../api/uploader';
import useProducts from '../hooks/useProducts';
import Input from '../components/element/Input';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState();

  const { addProduct } = useProducts();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    uploadImage(file)
      .then((url) => {
        addProduct.mutate({ product, url }, {
          onSuccess: () => {
            setSuccess('성공적으로 제품이 등록되었습니다!')
            setTimeout(() => setSuccess(null), 4000)
          }
        })
      })
      .finally(() => setIsLoading(false));
  }

  return (
		<section className='text-center'>
			{file && <img src={URL.createObjectURL(file)} alt='local file' className='mx-auto w-5/12 mb-6' />}
			{success && <p>{success}</p>}
			<form className='flex flex-col items-center gap-4' onSubmit={handleSubmit}>
        <Input type='file' name='file' accept='image/*' onChange={handleChange} />
        <Input type='text' name='title' value={product.title ?? ''} onChange={handleChange} placeholder='제품명'/>
        <Input type='number' name='price' value={product.price ?? ''} onChange={handleChange} placeholder='가격(원)'/>
        <Input type='text' name='category' value={product.category ?? ''} onChange={handleChange} placeholder='카테고리'/>
        <Input type='text' name='description' value={product.description ?? ''} onChange={handleChange} placeholder='설명'/>
        <Input type='text' name='options' value={product.options ?? ''} onChange={handleChange} placeholder='옵션(콤마로 구분)'/>
        <button className='my-4 px-4 py-2 bg-main text-white font-semibold rounded-lg'>{isLoading ? '업로드 중....⏳' : '제품 등록하기'}</button>
			</form>
		</section>
	);
}