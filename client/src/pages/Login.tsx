import React, { useState } from 'react';
import { EnvelopeSimpleIcon, LockKeyIcon, EyeClosedIcon, EyeIcon } from '@phosphor-icons/react/dist/ssr';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [userData, setUserData] = useState({email: '', password: '', confirmPassword: ''});
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({...userData, [name]: value});

  };
  
  const togglePwdVisibility = () => {
    setShowPwd((prev) => !prev);
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    setLoading(true);
    try {
      const res = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
        }),
      });
      
      const data = await res.json();

      if(!res.ok) {
        setError(data.error || "Login failed");
        return;
      }
      
      console.log('Logged in uwu', data);
      setUser(data);
      navigate("/products");
      
    } catch (err) {
      setError("Could not reach server");
    } finally {
      setLoading(false);
    }

  };

  return (
    <div className='flex items-center justify-center mt-50 lg:mt-20'>
       <form onSubmit={handleSubmit} className='flex flex-col text-center w-sm p-5 gap-5  bg-white'>
          <h1 className='font-semibold text-3xl mb-6'>Login</h1>
          <div className='flex items-center p-2 gap-2 border-2 focus-within:border-(--accent-coral)'>
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
          <div className='flex items-center p-2 gap-2 border-2 focus-within:border-(--accent-coral)'>
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

          {error ? <p className='text-sm text-red-500'>{error}</p> : null}

          <button type='submit' className='text-sm p-2 cursor-pointer bg-(--accent-charcoalBlue) text-white'>
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <Link to={"/register"} className='text-sm text-(--text-black)'>Make an account</Link>
        </form>
    </div>
  );
}

export default Login;