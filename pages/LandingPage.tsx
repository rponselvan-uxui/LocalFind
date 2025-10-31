
import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Groceries',
    description: 'Fresh produce, pantry staples, and more.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8NLzWK8YQxoiXw62gc4Ea1WUW1vcN3jQCtVa4SitDDTf36c5NTHpx8pcFZITLSac_M430ndRYLJPdZrpD4EoaM99tkiK2lyEcvGid5jKxxvkihpwBWvs4jsyBFv59NY3dy7IgoEh0TPigEhNNJc8v7Fkc6ASWESXET9eAaciOwYJqPEHUyyTeXrbt5Se9DSc5OplbLayFiE-7rV5UZIjWZjOmIAuOyZvIbO1p6XzWDrD7gwYd3EVLJLqm7btLxIeGEWoHkXIMpIU'
  },
  {
    name: 'Fashion',
    description: 'Apparel, accessories, and footwear.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzUA0Y16SHLiWP3el1cFXXDmM_mYkbqJNnWkUc50EuM1s98ZPIgrw-L6EBnTz3XrdLPwVCnL8yfA7xuHJsvQnUiR14jGbTL0s7XBSsJhnh02WNFyuaE-xj9WP8L6VHcnRzfEHs3Di8bwQ4kPJAupMl-2ORYIDG89cwOuVoXiZwQbqw0OkwCiMQ_3yXbHGRElApkCPj_19BJy1ClOytlJrw1B4LfXtUf87-j0Wx1ZmIGGmWycKk40c60c4K8aiUZUU78U1s34X64OI'
  },
  {
    name: 'Medicine',
    description: 'Pharmacies and health products.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmEDaza2t6UfQQucdb8qyZPqb9rWXhcc2rHhRKwE5v3GFShdbwt-O0L16sV-HpPoLk4L_dib_cVmqW4by5VdwooS8RjJQQH16lyfLzRL75rmI35ZyzZBwFJ07s_8ZVvgr7p6ieL-6W6qa4ibVyikZmJDy07x4E4gZHvnl7ymhIHXrJ0BYBKgIirWz3_RAGlpNLKmXRUhCbsvSqZhwNm1JEaYcu3RI_7tsUM4uvujWXDoh5HmqSsPCf9S6QAT5Bf2cKZ3QC2oxx9z4'
  },
  {
    name: 'Electronics',
    description: 'Gadgets, accessories, and appliances.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1DpBqcDTUHdyxUB5MYblGm5MOpdkJmsEhsXfUOW9Lp4a-a086S6YZ2K3RD1PnN4pXZtVzzD31y-pABVFIyK_-AeOx3azEXO7gJYzXc5A_AktFaB5sLDUnuvgBmp5seL0CK35g0ETK4CiNITIzAinmJBuLHj2S8L520dex0RyXGFvCkcigodxbyGfkP7Q8rFQNfMjvopt3CCbo-RVNFhKrAripx5hqh9KZaQxbIeMLZ6L7XYjeZgEFFXoBT8-pCF6mZim1m9CRua4'
  }
];

const LandingPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-background-light min-h-screen">
      <div className="flex flex-col w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between whitespace-nowrap py-4">
          <div className="flex items-center gap-3">
            <div className="text-primary">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" fill="currentColor"></path>
                <path clipRule="evenodd" d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-[#111418] dark:text-background-light text-2xl font-bold font-heading">LocalFind</h2>
          </div>
        </header>

        <main className="flex flex-col gap-12 sm:gap-16 md:gap-20">
          <div className="flex flex-col items-center gap-8 px-4 py-16 text-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-[#111418] dark:text-background-light text-4xl font-black leading-tight tracking-tighter sm:text-5xl md:text-6xl font-heading">Find Products Around You 🌍</h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">Discover and shop from the best local stores right in your neighborhood.</p>
            </div>
            <div className="w-full max-w-2xl bg-white dark:bg-gray-800 p-2 rounded-lg shadow-soft flex flex-col md:flex-row items-center gap-2">
              <label className="flex-1 w-full md:w-auto">
                <div className="flex w-full items-stretch">
                  <div className="text-gray-500 flex items-center justify-center pl-3">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>location_on</span>
                  </div>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-[#111418] dark:text-background-light focus:outline-0 focus:ring-0 border-none bg-transparent h-12 placeholder:text-gray-500 dark:placeholder:text-gray-400 pl-2 text-base" placeholder="Enter your location" />
                </div>
              </label>
              <div className="h-6 w-px bg-gray-200 dark:bg-gray-600 hidden md:block"></div>
              <label className="flex-1 w-full md:w-auto">
                <div className="flex w-full items-stretch">
                  <div className="text-gray-500 flex items-center justify-center pl-3">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>search</span>
                  </div>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-[#111418] dark:text-background-light focus:outline-0 focus:ring-0 border-none bg-transparent h-12 placeholder:text-gray-500 dark:placeholder:text-gray-400 pl-2 text-base" placeholder="Search for products..." />
                </div>
              </label>
              <button className="flex w-full md:w-auto min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded h-12 px-5 bg-primary text-white text-base font-bold shadow-soft hover:bg-primary/90 transition-colors">
                <span className="truncate">Search</span>
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
              <Link to="/login/customer" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-white text-sm font-bold shadow-soft hover:bg-primary/90 transition-colors">
                <span className="truncate">Login as Customer</span>
              </Link>
              <Link to="/login/shop-owner" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-white dark:bg-gray-700 text-[#111418] dark:text-background-light text-sm font-bold shadow-soft hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <span className="truncate">Login as Shop Owner</span>
              </Link>
              <Link to="/login/admin" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-white dark:bg-gray-700 text-[#111418] dark:text-background-light text-sm font-bold shadow-soft hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <span className="truncate">Login as Admin</span>
              </Link>
            </div>
          </div>

          <section className="flex flex-col gap-6">
            <h2 className="text-[#111418] dark:text-background-light text-3xl font-bold leading-tight tracking-tight px-4 font-heading">Explore by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
              {categories.map((category) => (
                <div key={category.name} className="flex flex-col gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-soft hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg" style={{ backgroundImage: `url("${category.imageUrl}")` }}></div>
                  <div>
                    <p className="text-[#111418] dark:text-background-light text-lg font-bold leading-normal font-heading">{category.name}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm font-normal leading-normal">{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-primary/10 dark:bg-primary/20 rounded-lg p-8 sm:p-12 my-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111418] dark:text-background-light font-heading">List Your Business on LocalFind</h3>
                <p className="text-gray-700 dark:text-gray-200 max-w-2xl">Reach more customers, grow your business online, and connect with your local community.</p>
              </div>
              <Link to="/login/shop-owner" className="flex min-w-[150px] shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-accent text-white text-base font-bold shadow-soft hover:bg-accent/90 transition-colors">
                <span className="truncate">Add Your Shop</span>
              </Link>
            </div>
          </section>
        </main>

        <footer className="border-t border-solid border-gray-200 dark:border-gray-700 mt-12 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 LocalFind. All rights reserved.</p>
            <div className="flex items-center gap-2 sm:gap-4 text-sm font-medium">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors px-2">About</a>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors px-2">Contact</a>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors px-2">Privacy</a>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors px-2">Help</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
