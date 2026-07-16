import '/src/index.css'
import { UserCircleIcon, BasketIcon, MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr';
import { Link } from 'react-router-dom';

function Navigation() {
  return(
  	<div className='fixed top-0 left-0 z-50 flex w-full items-center justify-between gap-10 p-3 pl-10 pr-10 bg-(--bg-card)'>
			<div>
        <Link to={"/"} className='font-bold text-2xl'>lateli</Link>
			</div>

    	<div className='flex items-center gap-10'>
				<ul className='flex flex-row gap-10 mr-10'>
					<Link to={"/"} className='font-semibold hover:underline'>Home</Link>
					<Link to={"/products"} className='font-semibold hover:underline'>Artworks</Link>
				</ul>

				<div className='flex flex-row gap-2 p-2 pl-2 pr-7 rounded-sm '>
					<form className='flex items-center w-full'>
						<MagnifyingGlassIcon size={25} />
						<input 
							type='text' 
							placeholder='Search...' 
							id='searchInput'
							className='flex-1 pl-3 bg-transparent outline-none placeholder-gray-500'
							/>
					</form>
				</div>
				
				<BasketIcon size={30} alt='cart'/>
				<Link to={"/login"}><UserCircleIcon size={30} alt='login/register' /></Link>
    	</div>
    </div>
    );
}

export default Navigation;