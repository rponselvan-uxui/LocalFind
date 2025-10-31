
import React from 'react';
import { Link } from 'react-router-dom';

const AdminLoginPage: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-dark text-[#F0F0F0] watermark-bg">
      <style>{`
        .watermark-bg {
          background-image: url("data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M80 0 C40 0 0 40 0 80 C0 120 40 160 80 160 C120 160 160 120 160 80 C160 40 120 0 80 0 M80 20 C100 20 120 40 120 80 C120 120 100 140 80 140 C60 140 40 120 40 80 C40 40 60 20 80 20' fill='%23FFFFFF' fill-opacity='0.02'/%3E%3C/svg%3E");
          background-repeat: repeat;
        }
      `}</style>
      <div className="flex flex-1 items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="flex w-full max-w-md flex-col items-center">
          <div className="mb-6 flex flex-col items-center justify-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#3A7DFF]/20 text-[#3A7DFF]">
              <span className="material-symbols-outlined !text-4xl">lock</span>
            </div>
            <h1 className="text-white tracking-tight text-3xl font-bold text-center font-heading">Administrator Sign In</h1>
          </div>
          <div className="w-full rounded-xl bg-[#161B22]/80 p-6 sm:p-8 shadow-2xl shadow-black/30 backdrop-blur-sm ring-1 ring-white/10">
            <div className="flex flex-col gap-y-5">
              <div>
                <label className="flex flex-col">
                  <p className="text-[#F0F0F0] text-sm font-medium pb-2">Email</p>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#F0F0F0] focus:outline-0 focus:ring-2 focus:ring-[#3A7DFF]/50 border border-white/20 bg-[#0D1117] h-12 placeholder:text-gray-500 px-4 text-base font-normal" placeholder="you@example.com" type="email" />
                </label>
              </div>
              <div>
                <label className="flex flex-col">
                  <p className="text-[#F0F0F0] text-sm font-medium pb-2">Password</p>
                  <div className="flex w-full flex-1 items-stretch rounded-lg">
                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-[#F0F0F0] focus:outline-0 focus:ring-2 focus:ring-[#3A7DFF]/50 border border-white/20 bg-[#0D1117] h-12 placeholder:text-gray-500 px-4 pr-2 text-base font-normal border-r-0 focus:z-10" placeholder="Enter your password" type="password" />
                    <div className="text-gray-400 flex border border-white/20 bg-[#0D1117] items-center justify-center px-3 rounded-r-lg border-l-0">
                      <span className="material-symbols-outlined !text-xl">visibility</span>
                    </div>
                  </div>
                </label>
              </div>
              <div>
                <label className="flex flex-col">
                  <p className="text-[#F0F0F0] text-sm font-medium pb-2">Security Code (Optional)</p>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#F0F0F0] focus:outline-0 focus:ring-2 focus:ring-[#3A7DFF]/50 border border-white/20 bg-[#0D1117] h-12 placeholder:text-gray-500 px-4 text-base font-normal" placeholder="Enter your 6-digit code" />
                </label>
              </div>
              <div className="flex pt-2">
                <button className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#3A7DFF] text-white text-base font-bold tracking-wide shadow-lg shadow-[#3A7DFF]/20 transition-all duration-200 hover:bg-[#3A7DFF]/90 focus:outline-none focus:ring-4 focus:ring-[#3A7DFF]/50">
                  <span className="truncate">Sign In</span>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 flex w-full flex-col items-center justify-center gap-2 text-sm text-gray-400">
            <a className="hover:text-[#3A7DFF] transition-colors" href="#">Forgot Password?</a>
            <p className="text-gray-500">© 2024 LocalFind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
