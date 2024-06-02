import React from 'react';

export default function User({ user: { displayName, photoURL } }) {
  return (
    <div className='flex flex-row gap-2 items-center'>
      <img src={photoURL} alt={displayName} className='rounded-full w-9 h-9'/>
      <span className='hidden md:block'>{displayName}</span>
    </div>
  );
}

