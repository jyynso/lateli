import '/src/index.css'
import { UserCircleIcon } from '@phosphor-icons/react/dist/ssr';
import { MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr';

function Navigation() {
    return(
        <div className='flex items-center justify-between'>
            <div>
                <h1 className='font-bold text-2xl'>lateli</h1>
            </div>
            <div className='flex items-center gap-10'>
                <ul className='flex flex-row gap-10 mr-10'>
                    <li className='font-semibold'>home</li>
                    <li className='font-semibold'>artworks</li>
                </ul>
                <span className='flex flex-row gap-5'>
                    <MagnifyingGlassIcon size={25} />
                    <p className='font-semibold'>search...</p>
                </span>
                <UserCircleIcon size={25} />
            </div>
        </div>
    );
}

export default Navigation;