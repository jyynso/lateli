import '/src/index.css'
import { UserCircleIcon, ShoppingCartSimpleIcon, MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navigation() {
	const { user } = useAuth();
	const isLoggedIn = Boolean(user);

  return (
  	<div className='fixed top-0 left-0 z-50 flex flex-wrap w-full items-center justify-between gap-1 p-3 bg-(--bg-card)'>
			<div>
        <Link to={"/"} className='font-bold text-2xl'>lateli</Link>
			</div>

    	<div className='flex items-center gap-10'>
				<ul className='flex flex-row gap-10 mr-10'>
					<Link to={"/"} className='font-semibold hover:underline'>Home</Link>
					<Link to={"/products"} className='font-semibold hover:underline'>Artworks</Link>
				</ul>

				<div className='flex flex-row gap-2 p-2 pl-2 pr-7 sm:pr-0  rounded-sm '>
					<form className='flex items-center w-full'>
						<MagnifyingGlassIcon size={25} />
						<input 
							type='text' 
							placeholder='Search...' 
							id='searchInput'
							className='flex-1 pl-3 bg-transparent outline-none w-full sm:w-30 placeholder-gray-500'
							/>
					</form>
				</div>
				
				<Link to={"/cart"}> <ShoppingCartSimpleIcon size={30}/> </Link>
				<Link to={"/login"}> 
					<UserCircleIcon
  					size={30}
  					color={isLoggedIn ? 'var(--accent-sandyBrown)' : 'var(--text-black)'}/>
				</Link>
    	</div>
    </div>
    );
}

export default Navigation;