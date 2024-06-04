import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { IoBagAddSharp } from 'react-icons/io5';
import User from './User';
import Button from "./element/Button";
import CartStatus from './CartStatus';

export default function NavBar() {
	const {user, login, logout} = useAuthContext();
	
  return (
		<div className='p-4 flex flex-row justify-between items-center'>
			<Link to='/'>
				<img src='/logo.png' alt='soir' className='w-20 h-10' />
			</Link>
			<nav className='flex flex-row gap-4'>
				<Link to='/products'>shop</Link>
				{user && (
					<Link to='/carts'>
						<CartStatus />
					</Link>
				)}
				{user && user.isAdmin && (
					<Link to='/products/new'>
						<IoBagAddSharp className='text-3xl' />
					</Link>
				)}
				{user && <User user={user} />}
				{!user && <Button onClick={login} text={'Login'} />}
				{user && <Button onClick={logout} text={'Logout'} />}
			</nav>
		</div>
	);
}

