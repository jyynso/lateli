import '../index.css';
import { useState } from 'react';
import { EnvelopeSimpleIcon, UserIcon, LockKeyIcon, EyeClosedIcon, EyeIcon } from '@phosphor-icons/react/dist/ssr';

function Login() {
  const [userData, setUserData] = useState({ username: '', email: '', password: '', confirmPassword: ''});
  const [showPwd, setShowPwd] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({...userData, [name]: value});

  };
  
  const togglePwdVisibility = () => {
    setShowPwd((prev) => !prev);
  };

  return (
    <div className='flex items-center justify-center min-h-screen '>
       <form className='flex flex-col text-center w-sm p-5 gap-5 rounded-md bg-(--bg-card)'>
          <h1 className='font-semibold text-lg'>Login</h1>
          <div className='flex items-center p-2 gap-2 rounded-md border-2 focus-within:border-(--accent-coral)'>
            <UserIcon size={22} className='text-gray-400' />
            <input 
            type='text' 
            name='username'
            placeholder='Enter your username'
            value={userData.username} 
            onChange={handleChange} 
            required
            className='outline-none bg-transparent text-sm w-full'
            />
          </div>
          <div className='flex items-center p-2 gap-2 rounded-md border-2 focus-within:border-(--accent-coral)'>
            <EnvelopeSimpleIcon size={22} className='text-gray-400' />
            <input 
            type='email' 
            name='email'
            placeholder='Enter your email' 
            value={userData.email} 
            onChange={handleChange} 
            required
            className='outline-none bg-transparent text-sm w-full'
            />
          </div>
          <div className='flex items-center p-2 gap-2 rounded-md border-2 focus-within:border-(--accent-coral)'>
            <LockKeyIcon size={22} className='text-gray-400' />
            <input 
            type={showPwd ? 'text' : 'password'} 
            name='password'
            placeholder='Enter your password' 
            value={userData.password} 
            onChange={handleChange} 
            required
            className='outline-none bg-transparent text-sm w-full'
            />
            <button 
              type='button'
              onClick={togglePwdVisibility}
              className='text-gray-400'
              >
                {showPwd ? <EyeIcon size={20}/> : <EyeClosedIcon size={20} />}
            </button>
          </div>

          <button type='submit' className='text-sm p-2 bg-(--accent-charcoalBlue) text-white rounded'>
            Login
          </button>
        </form>
    </div>
  );
}

export default Login;