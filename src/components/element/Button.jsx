import React from 'react';

export default function Button({ text, onClick }) {
	return (
		<button onClick={onClick} className='px-4 py-1 bg-main hover:bg-sub rounded-lg text-white font-semibold'>
			{text}
		</button>
	);
}
