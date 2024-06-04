import React from 'react';

export default function Price({ text, price }) {
  return (
    <div className='flex flex-col p-6 gap-2 justify-center drop-shadow-md bg-zinc-50 rounded-xl'>
      <p className='text-xl text-main font-semibold'>{text}</p>
      <p className='text-2xl font-bold italic'>₩ {price}</p>
    </div>
  );
}

