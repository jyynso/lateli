import { useState, useRef, useEffect } from 'react';
import { UserSquareIcon, ImageSquareIcon } from '@phosphor-icons/react/dist/ssr';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Popup from './PopupText';
import AccountDropdown from './AccountDropdown';
import Confirmation from './Confirmation';

function Navigation() {
	const { user, logout } = useAuth();
	const isLoggedIn = Boolean(user);
	const [menuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleLogoutClick = () => {
    setShowConfirmation(true);
  };

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
			<Link to={"/"} className='text-xl px-2 font-semibold whitespace-nowrap'>lateli</Link>
    	<div className='flex items-center gap-5 px-3'>
				<Link to={"/products"} className='group relative'> 
					<ImageSquareIcon size={30} weight='fill' />
					<Popup text='Artworks' className='top-full mt-2 text-sm'/> 
				</Link>
        {isLoggedIn ? (
          <div className="relative flex justify-center" ref={menuRef}>
            <button
              type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                className="group relative cursor-pointer"
                aria-label="Open account menu" >
                  <UserSquareIcon
                    size={30}
                    weight="fill"
                    fill={menuOpen ? "orange" : undefined}
                  />
            </button>
            <div className={`absolute right-0 top-full mt-1 z-50 transition-all duration-150 ease-out origin-top-right
              ${menuOpen 
                ? 'opacity-100 scale-100 pointer-events-auto' 
                : 'opacity-0 scale-95 pointer-events-none'}`} >
              <AccountDropdown onLogoutClick={handleLogoutClick} />
            </div>
          </div>
            ) : (
              <Link to="/login" className="text-sm font-semibold group relative">
                Sign in
                <Popup className="top-full mt-2 text-sm" text="Sign" />
              </Link>
        )}
    	</div>

      {showConfirmation && (
        <Confirmation 
          title="Are you sure?"
          onConfirm={() => {
            logout();
            setShowConfirmation(false);
          }}
          onCancel={() => setShowConfirmation(false)}
        />
      )}
    </div>
    );
}

export default Navigation;