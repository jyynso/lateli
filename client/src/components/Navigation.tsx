import '/src/index.css'
import { UserCircleIcon, ShoppingCartSimpleIcon, MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navigation() {
	const { user } = useAuth();
	const isLoggedIn = Boolean(user);

  return (
  	<div className='sm:flex-row fixed top-0 left-0 z-50 flex flex-wrap w-full items-center justify-between gap-1 p-3 bg-(--bg-card)'>
			
			<ul className='flex flex-row gap-10 items-center px-2'>
				<Link to={"/"} className='font-bold text-2xl'>lateli</Link>
				<Link to={"/"} className='font-semibold hover:underline'>Home</Link>
				<Link to={"/products"} className='font-semibold hover:underline'>Artworks</Link>
			</ul>

			<form className='order-last w-full sm:order-0 sm:w-lg flex items-center px-3 py-2 border-2 rounded-full'>
				<input 
					type='text' 
					placeholder='Search...' 
					id='searchInput'
					className='flex-1 pl-3 bg-transparent outline-none w-full sm:w-30  placeholder-gray-500'
					/>
					<MagnifyingGlassIcon size={25} weight='bold' />
			</form>

    	<div className='flex items-center gap-10'>
				<Link to={"/cart"}> <ShoppingCartSimpleIcon size={30}/> </Link>
				<Link to={"/login"}> 
					{isLoggedIn ? <UserCircleIcon size={30}/> : "Sign in" }
				</Link>
    	</div>
    </div>
    );
}

export default Navigation;