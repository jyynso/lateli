import { useState, useRef, useEffect } from 'react';
import { UserCircleIcon, ImagesSquareIcon } from '@phosphor-icons/react/dist/ssr';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Popup from './PopupText';
import AccountDropdown from './AccountDropdown';

function Navigation() {
	const { user } = useAuth();
	const isLoggedIn = Boolean(user);
	const [menuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
  	<div className='sm:flex-row flex flex-wrap w-full items-center justify-between gap-1 p-3'>
			<Link to={"/"} className='text-2xl px-2  font-semibold text-(--accent-charcoalBlue) whitespace-nowrap'>lateli</Link>
    	<div className='flex items-center gap-5 px-3'>
				<Link to={"/products"} className='group relative'> 
					<ImagesSquareIcon size={30} weight='fill' />
					<Popup text='Artworks' className='top-full mt-2 text-sm'/> 
				</Link>
		 {isLoggedIn ? (
        <div className="relative flex justify-center" ref={menuRef}>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="group relative cursor-pointer"
            aria-label="Open account menu" >
              <UserCircleIcon
                size={30}
                weight="fill"
                fill={menuOpen ? "orange" : undefined}
              />
          </button>
				  <div className={`absolute right-0 top-full mt-1 z-50 transition-all duration-150 ease-out origin-top-right
      			${menuOpen 
        			? 'opacity-100 scale-100 pointer-events-auto' 
        			: 'opacity-0 scale-95 pointer-events-none'}`} >
    					<AccountDropdown />
  				</div>
        </div>
        ) : (
          <Link to="/login" className="text-sm font-semibold group relative">
            Sign in
            <Popup className="top-full mt-2 text-sm" text="Sign" />
          </Link>
        )}
    	</div>
    </div>
    );
}

export default Navigation;