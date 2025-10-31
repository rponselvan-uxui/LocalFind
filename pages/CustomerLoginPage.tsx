import React, { useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
// This path is now corrected:
import { useAuth } from '../components/hooks/AuthContext';
// Import routes constant
import { ROUTES } from './constants/routes';

const CustomerLoginPage: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, login } = useAuth();
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    // Basic Validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    
    // In a real app, you'd check the response from your API.
    // Here, we'll just mock a successful login.
    try {
      // @ts-ignore - We'll update this to use the real login function later
      login(email, 'Customer');
      // No need to navigate, the ProtectedRoute will handle it.
    } catch (err) {
      setError('Invalid email or password.'); // Mock error
    }
  };

  // If user is already logged in, redirect them from the login page
  if (user) {
    return <Navigate to={ROUTES.DASHBOARD_CUSTOMER} replace />;
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark p-4">
      <div className="flex w-full max-w-md flex-col items-center gap-6 rounded-xl bg-white dark:bg-[#1C2936] p-8 shadow-soft">
        <Link to={ROUTES.HOME} className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-4xl">storefront</span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white font-heading">LocalFind</h1>
          </div>
        </Link>
        <div className="flex w-full flex-col items-center text-center">
          <h2 className="text-slate-900 dark:text-white tracking-light text-[32px] font-bold leading-tight font-heading">Welcome Back!</h2>
          <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pt-2">Log in to find the best local shops near you.</p>
        </div>
        <form onSubmit={handleLogin} className="flex w-full flex-col gap-4">
          {error && (
            <div className="w-full rounded-lg bg-red-100 p-3 text-center text-sm text-red-700 dark:bg-red-900 dark:text-red-200">
              {error}
            </div>
          )}
          <div className="flex w-full flex-col">
            <label className="flex flex-col flex-1">
              <p className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal pb-2">Email</p>
              <div className="relative flex w-full flex-1 items-center">
                <span className="material-symbols-outlined text-slate-400 absolute left-4">mail</span>
                <input 
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#2A3B4D] h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 pl-12 text-base font-normal leading-normal" 
                  placeholder="Enter your email" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </label>
          </div>
          <div className="flex w-full flex-col">
            <label className="flex flex-col flex-1">
              <p className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal pb-2">Password</p>
              <div className="relative flex w-full flex-1 items-center">
                <span className="material-symbols-outlined text-slate-400 absolute left-4">lock</span>
                <input 
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#2A3B4D] h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 px-12 text-base font-normal leading-normal" 
                  placeholder="Enter your password" 
                  type={passwordVisible ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" onClick={() => setPasswordVisible(!passwordVisible)} className="absolute right-4 text-slate-400 hover:text-primary dark:hover:text-primary">
                  <span className="material-symbols-outlined">{passwordVisible ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </label>
          </div>
          <div className="flex w-full pt-2">
            <button type="submit" className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-background-dark">
              <span className="truncate">Login</span>
            </button>
          </div>
        </form>
        <div className="w-full flex justify-center items-center gap-2">
          <span className="h-px w-full bg-slate-200 dark:bg-slate-700"></span>
          <span className="text-slate-500 dark:text-slate-400 text-sm">OR</span>
          <span className="h-px w-full bg-slate-200 dark:bg-slate-700"></span>
        </div>
        <div className="flex w-full flex-col gap-3">
          <button className="flex items-center justify-center w-full h-12 px-5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <img className="w-5 h-5 mr-3" alt="Google logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzYTuJMA6fjXrJgw8XRdcvl1drOywFQYKYgH6EMUyKraS0NwCCgl06IpRnOPwnNZ0y9vWU2CAE1zwv2pkBOSAX7QVKN7MuXJvEH0n9YUT4RaNl9yr8Wn8LZgPprf4dLSneDvxDSI8KhG2YQkbJvFTr92uQP2OtYAqmW0x94NFNyPK0aa1EayEzyZwP7Jjeoq92UuHb6TlWHWMV_i6iLrmn-JVTvssbO4_tGrXNAuJOONEPupPPguesJVm6jQCGdWFvWukX9Wi_f38" />
            <span className="font-medium text-slate-700 dark:text-slate-200 text-base">Continue with Google</span>
          </button>
          <button className="flex items-center justify-center w-full h-12 px-5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <img className="w-5 h-5 mr-3" alt="Facebook logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS-KaVKPCkKMgjwTIp1kz6UecStUQX-NzF3YydxobKZ34acAxqTNNcbeHGkWDjj_jWTipLNLuPjevnrub590PQrh5LlSo9R7VrFaFccVVeh7r9yBUHv2CWRxvfhub8QyuV8Iy9COU_o7iBTq7bs38TGMLz6fpyGlDkGh5uaiTjQe4a4JeROn_N99jyX6ed6obn_UR4-BVlNUvNNjub9BP1nZ420mrryes763rdSpehmAAcFCZez17YitpyJA2TJ_bivIwgJP7xyts" />
            <span className="font-medium text-slate-700 dark:text-slate-200 text-base">Continue with Facebook</span>
          </button>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-center">New Here? <a className="font-bold text-primary hover:underline" href="#">Create an Account</a></p>
      </div>
    </div>
  );
};

export default CustomerLoginPage;