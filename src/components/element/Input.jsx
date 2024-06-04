import React from 'react';

export default function Input({type, accept, name, value, placeholder, onChange}) {
  return (
		<input
      type={type}
      accept={accept}
			name={name}
			value={value}
			id={name}
			placeholder={placeholder}
      onChange={onChange}
      required
			className='w-9/12 px-4 py-2 border-2 border-zinc-200 hover:border-zinc-400 focus:bg-sky-50 outline-none'
		/>
	);
}

