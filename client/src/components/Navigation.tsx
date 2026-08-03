import '/src/index.css'
import { UserCircleIcon, ShoppingCartSimpleIcon, MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Popup from './PopupText';

function Navigation() {
	const { user, logout } = useAuth();
	const isLoggedIn = Boolean(user);

  return (
  	<div className='sm:flex-row fixed top-0 left-0 z-40 flex flex-wrap w-full items-center justify-between gap-1 p-3 bg-(--bg-card)'>
			<Link to={"/"} className='font-bold text-2xl px-3'>lateli</Link>

			<form className='order-last w-full sm:order-0 sm:w-lg flex items-center px-3 py-2 border-2 rounded-full'>
				<input 
					type='text' 
					placeholder='Search...' 
					id='searchInput'
					className='flex-1 pl-3 bg-transparent outline-none w-full sm:w-30  placeholder-gray-500'
					/>
					<MagnifyingGlassIcon size={25} weight='bold' />
			</form>

    	<div className='flex items-center gap-5 px-3'>
				<Link to={"/products"} className='font-semibold hover:underline'>Artworks</Link>
				<Link to={"/cart"} className='group relative'> 
					<ShoppingCartSimpleIcon size={30} weight='fill'/> 
					<Popup text="Cart" />
				</Link>
				<Link to={"/login"} className='group relative'> 
					{isLoggedIn ? <UserCircleIcon size={30} weight='fill'/> : "Sign in" }
					<Popup text="Account" />
				</Link>
    	</div>
    </div>
    );
}

export default Navigation;