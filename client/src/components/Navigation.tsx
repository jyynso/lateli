import '/src/index.css'
import { UserCircleIcon } from '@phosphor-icons/react/dist/ssr';
import { MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr';
import { Link } from 'react-router-dom';

function Navigation() {
  return(
  	<div className='flex items-center justify-between'>
			<div>
        <Link to={"/"} className='font-bold text-2xl'>lateli</Link>
			</div>
    	<div className='flex items-center gap-10'>
				<ul className='flex flex-row gap-10 mr-10'>
					<Link to={"/"} className='font-semibold hover:underline'>home</Link>
					<Link to={"/products"} className='font-semibold hover:underline'>artworks</Link>
				</ul>
				<span className='flex flex-row gap-5'>
					<MagnifyingGlassIcon size={25} />
					<p className='font-semibold'>search...</p>
				</span>
				<Link to={"/register"}><UserCircleIcon size={30} /></Link>
    	</div>
    </div>
    );
}

export default Navigation;