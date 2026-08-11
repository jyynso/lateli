import '/src/index.css'
import { UserCircleIcon, ShoppingCartSimpleIcon, MagnifyingGlassIcon, ImagesSquareIcon } from '@phosphor-icons/react/dist/ssr';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Popup from './PopupText';

function Navigation() {
	const { user } = useAuth();
	const isLoggedIn = Boolean(user);

  return (
  	<div className='sm:flex-row flex flex-wrap w-full items-center justify-between gap-1 p-3'>
			<Link to={"/"} className='font-bold text-2xl px-3'>lateli</Link>
    	<div className='flex items-center gap-5 px-3'>
				<Link to={"/products"} className='group relative'> 
					<ImagesSquareIcon size={30} weight='fill' />
					<Popup text='Artworks' className='top-full mt-2 text-sm'/> 
				</Link>
				<Link to={"/cart"} className='group relative'> 
					<ShoppingCartSimpleIcon size={30} weight='fill'/> 
					<Popup text="Cart" className='top-full mt-2 text-sm' />
				</Link>
				<Link to={"/login"} className='text-sm font-semibold group relative'> 
					{isLoggedIn ? <UserCircleIcon size={30} weight='fill'/> : "Sign in" }
					<Popup className='top-full mt-2 text-sm' text={isLoggedIn ? "Account" : "Sign" } />
				</Link>
    	</div>
    </div>
    );
}

export default Navigation;