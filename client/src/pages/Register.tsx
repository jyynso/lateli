import React, { useMemo, useState } from 'react';
import { UserIcon, EnvelopeSimpleIcon, LockKeyIcon, EyeIcon, EyeClosedIcon } from '@phosphor-icons/react/dist/ssr';
import { ZxcvbnFactory } from '@zxcvbn-ts/core'
import * as zxcvbnCommonPackage from '@zxcvbn-ts/language-common'
import * as zxcvbnEnPackage from '@zxcvbn-ts/language-en'

const pwdOptions = {
  translations: zxcvbnEnPackage.translations,
  dictionary: {
    ...zxcvbnCommonPackage.dictionary,
    ...zxcvbnEnPackage.dictionary,
  }
};

export default function Register() {

  const [userData, setUserData] = useState({ username: '', email: '', password: '', confirmPassword: ''});
  const [showPwd, setShowPwd] = useState(false);
  const [pwdScore, setPwdScore] = useState<number | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const zxcvbn = useMemo(() => new ZxcvbnFactory(pwdOptions), []); 

  const pwdMatch = () => {
    return userData.password === userData.confirmPassword;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({...userData, [name]: value});

    if (name === 'password') {
      if (value.length === 0) {
        setPwdScore(null);
      } else {
        const result = zxcvbn.check(value);
        setPwdScore(result.score);
      }
    }
  };

  const togglePwdVisibility = () => {
    setShowPwd((prev) => !prev);
  };

  const getPwdStrength = (score: number | null) => {
    if (score === null) return { width: 'w-0', color: 'bg-gray-300', text: 'Enter your password' };
    switch (score) {
      case 0: return { width: 'w-1/4', color: 'bg-red-500', text: 'Very Weak' };
      case 1: return { width: 'w-2/4', color: 'bg-orange-500', text: 'Weak' };
      case 2: return { width: 'w-3/4', color: 'bg-yellow-500', text: 'Fair' };
      case 3: return { width: 'w-full', color: 'bg-blue-500', text: 'Good' };
      case 4: return { width: 'w-full', color: 'bg-green-500', text: 'Strong' };
      default: return { width: 'w-0', color: 'bg-gray-300', text: '' };
    }
  };
  
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!pwdMatch()) {
      setError("Password don't match");
      return;
    };

    setLoading(true)
    try {
      const res = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
          name: userData.username,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Registration failed');
        return;
      }

      console.log('Registered:', data);

    } catch (err) {
      setError('Could not reach server');
    } finally {
      setLoading(false);
    }

  };

  const pwdStrength = getPwdStrength(pwdScore);

  return (
    <div className='flex items-center justify-center mt-10'>
       <form onSubmit={handleSubmit} className='flex flex-col text-center w-sm p-5 gap-5 rounded-md bg-(--bg-card)'>
          <h1 className='font-semibold text-lg'>Create Account</h1>
          <div className='flex items-center p-2 gap-2 rounded-md border-2 focus-within:border-(--accent-sandyBrown)'>
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
          <div className='flex items-center p-2 gap-2 rounded-md border-2 focus-within:border-(--accent-sandyBrown)'>
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
          <div className='flex items-center p-2 gap-2 rounded-md border-2 focus-within:border-(--accent-sandyBrown)'>
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

          <div className='mt-1 space-y-1'>
            <div className='h-1.5 w-full bg-gray-200 rounded-full overflow-hidden'>
              <div className={`h-full ${pwdStrength.width} ${pwdStrength.color} transition-all duration-300`} />
            </div>
            <p className='text-xs font-medium text-gray-500 text-right'>{pwdStrength.text}</p>
          </div>

          <div className='flex items-center p-2 gap-2 rounded-md border-2 focus-within:border-(--accent-sandyBrown)'>
            <LockKeyIcon size={22} className='text-gray-400' />
            <input 
            type={showPwd ? 'text' : 'password'} 
            name='confirmPassword'
            placeholder='Re-enter password' 
            value={userData.confirmPassword} 
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

          <div className='h-3'>
            {userData.password && userData.confirmPassword && (
              <p className='font-semibold text-xs text-right text-gray-400'>
                {pwdMatch() ? "match" : "not match"}
              </p>
            )}
          </div>

          {error && <p className='text-xs text-red-500'>{error}</p>}

          <button type='submit' disabled={loading} className='text-sm p-2 bg-(--accent-charcoalBlue) text-white rounded'>
            {loading ? 'Creating account...' : 'Submit'}
          </button>
        </form>
    </div>
  );
}