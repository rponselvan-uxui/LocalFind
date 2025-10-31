import React from 'react';
import { Link } from 'react-router-dom';
// Import routes constant
import { ROUTES } from './constants/routes';

const categories = [
  // ... (categories array)
];

const LandingPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-background-light min-h-screen">
      <div className="flex flex-col w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between whitespace-nowrap py-4">
          {/* ... (header logo) ... */}
        </header>

        <main className="flex flex-col gap-12 sm:gap-16 md:gap-20">
          <div className="flex flex-col items-center gap-8 px-4 py-16 text-center">
            {/* ... (search bar) ... */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
              <Link to={ROUTES.LOGIN_CUSTOMER} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-white text-sm font-bold shadow-soft hover:bg-primary/90 transition-colors">
                <span className="truncate">Login as Customer</span>
              </Link>
              <Link to={ROUTES.LOGIN_SHOP_OWNER} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-white dark:bg-gray-700 text-[#111418] dark:text-background-light text-sm font-bold shadow-soft hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <span className="truncate">Login as Shop Owner</span>
              </Link>
              <Link to={ROUTES.LOGIN_ADMIN} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-white dark:bg-gray-700 text-[#111418] dark:text-background-light text-sm font-bold shadow-soft hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <span className="truncate">Login as Admin</span>
              </Link>
            </div>
          </div>

          {/* ... (categories section) ... */}

          <section className="bg-primary/10 dark:bg-primary/20 rounded-lg p-8 sm:p-12 my-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111418] dark:text-background-light font-heading">List Your Business on LocalFind</h3>
                <p className="text-gray-700 dark:text-gray-200 max-w-2xl">Reach more customers, grow your business online, and connect with your local community.</p>
              </div>
              <Link to={ROUTES.LOGIN_SHOP_OWNER} className="flex min-w-[150px] shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-accent text-white text-base font-bold shadow-soft hover:bg-accent/90 transition-colors">
                <span className="truncate">Add Your Shop</span>
              </Link>
            </div>
          </section>
        </main>

        {/* ... (footer) ... */}
      </div>
    </div>
  );
};

export default LandingPage;