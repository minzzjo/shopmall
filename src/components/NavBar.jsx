import React, { useEffect, useState } from 'react';
import { IoBagAddSharp, IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { login, logout, onUserStateChanged } from '../api/firebase';
import User from './User';

export default function NavBar() {
	const [user, setUser] = useState();

	useEffect(() => {
		onUserStateChanged(setUser)
	}, []);
  return (
		<div className='p-4 flex flex-row justify-between items-center'>
			<Link to='/'>
				<img src='logo.png' alt='soir' className='w-20 h-10' />
			</Link>
			<nav className='flex flex-row gap-4'>
				<Link to='/products'>shop</Link>
				{user && (
					<Link to='/carts'>
						<IoCartOutline className='text-3xl' />
					</Link>
				)}
				{user && (
					<Link to='/products/new'>
						<IoBagAddSharp className='text-3xl' />
					</Link>
				)}
				{user && <User user={user} />}
				{!user && <button onClick={login}>Login</button>}
				{user && <button onClick={logout}>Logout</button>}
			</nav>
		</div>
	);
}

