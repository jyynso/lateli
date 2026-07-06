import { useState } from 'react';
import { LampIcon } from '@phosphor-icons/react/dist/ssr';

function ToggleTheme() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);

    setTimeout(() => {
      document.documentElement.classList.toggle('dark', next);
    }, 50);
  };

  return (
    <button className='cursor-pointer' aria-label='toggle theme' onClick={toggleTheme}>
      <LampIcon size={29} className={darkMode ? 'text-yellow-300' : 'hover:text-(--accent-sandyBrown)'}/>
    </button>
  );
}

export default ToggleTheme;