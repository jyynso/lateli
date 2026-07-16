import '/src/index.css'
import { UserCircleIcon, BasketIcon, MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr';
import { Link } from 'react-router-dom';

function Navigation() {
  return(
  	<div className='flex items-center justify-between gap-10 p-3 pl-10 pr-10 bg-(--bg-card)'>
			<div>
        <Link to={"/"} className='font-bold text-2xl'>lateli</Link>
			</div>

    	<div className='flex items-center gap-10'>
				<ul className='flex flex-row gap-10 mr-10'>
					<Link to={"/"} className='font-semibold hover:underline'>home</Link>
					<Link to={"/products"} className='font-semibold hover:underline'>artworks</Link>
				</ul>

				<div className='flex flex-row gap-2 p-2 pl-2 pr-7 rounded-xs bg-white'>
					<form>
						<MagnifyingGlassIcon size={25} />
						<input type='text' placeholder='Search...' id='searchInput' />
					</form>
				</div>
				
				<BasketIcon size={30} alt='cart'/>
				<Link to={"/login"}><UserCircleIcon size={30} alt='login/register' /></Link>
    	</div>
    </div>
    );
}

export default Navigation;