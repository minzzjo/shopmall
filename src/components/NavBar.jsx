import React, { useState } from 'react';
import { IoBagAddSharp, IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { login, logout } from '../api/firebase';

export default function NavBar() {
	const [user, setUser] = useState();
	console.log(user)

	const handleLogin = () => {
		login().then(setUser)
	}

	const handleLogout = () => {
		logout().then(setUser)
	}
  return (
		<div className='p-4 flex flex-row justify-between items-center'>
			<Link to='/'>
				<img src='logo.png' alt='soir' className='w-20 h-10' />
			</Link>
			<nav className='flex flex-row gap-4'>
				<Link to='/products'>shop</Link>
				<Link to='/carts'>
					<IoCartOutline className='text-3xl' />
				</Link>
				<Link to='/products/new'>
					<IoBagAddSharp className='text-3xl' />
				</Link>
				{!user && <button onClick={handleLogin}>Login</button>}
				{user && <button onClick={handleLogout}>Logout</button>}
			</nav>
		</div>
	);
}

