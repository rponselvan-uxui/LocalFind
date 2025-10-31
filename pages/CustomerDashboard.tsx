
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import LocalFindLogo from '../components/icons/LocalFindLogo';
import type { Product } from '../types';


const products: Product[] = [
    {
        id: 1,
        name: "Trail Runner Shoes",
        shopName: "Footwear Locker",
        price: "$89.99",
        rating: 4.8,
        distance: "0.8 miles away",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ31WeTVPHltKCBT8TjsLNnByTIbI9-vKq0eUXkLD6H0D1exnzQOcftMyd5eejjZVvm2qcKLRUvqPsTFgL6cIGPTVGhn-JIdTecQf4Cw0WGO4D9Zbvzy3K9lQNvG3oZZxJHOa5a2T_uDFSgEhWpA_UQ30szuCvpbqRy7_u3NLSrfNV3_SW3yY1admTQkX3s3nKWTrtcg0imPre5lp8lKRpWi984WDKwGGgvxwfZTi3mSX1d0wlWHeSkBbW_UaR9HlV5X0i58DR_Ok",
        isFavorite: false,
    },
    {
        id: 2,
        name: "Classic Chronograph",
        shopName: "The Watch Shop",
        price: "$249.00",
        rating: 4.9,
        distance: "1.2 miles away",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiLijYMKW0DAzzXQIKppmRsIj7WESWJjST8aG2I1DONPTr8bS7RJt8QT_HF4A0l2sG2O0rUwp6Gd63iddjC-GsTkFjGUOJd9O0V6CtxvkuOfslHWnFqk1sX8QzqlN37KkyyCAec1oqn16QcBktezdLZwRkUkBpSXBBTKOE_A9pLrwNkdgszxpV6TF879xBFz9B75e8vGGVtSGR7CHodIjmKCClzFiqiEG-8fQe6zgu_0QQnbPB0QooS8TwUeaRGWOTfr9IEbxDpQw",
        isFavorite: false,
    },
    {
        id: 3,
        name: "Aviator Sunglasses",
        shopName: "Sun Spot",
        price: "$120.50",
        rating: 4.7,
        distance: "0.5 miles away",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaxtgdL3DVjp-fm66LDuDyjXJYP_N0ZeaNj6wXn2TrwUzvVvQiSqL1YqWH8shKBGR7At-YF4qWQEa7zYKC3nYojC3b2lzu3wYPu-creZsrikVdbVgDqQloUMnjKzE9uIcUrKo51r0tNy9tBNzuJS-QMR45eSAAm0gxYchDbcavZehyq1eDHzcaoT2HdL0KY1yXzqPhMAC7HocXWR8WFrYpE0-NMA3d9lwONjelymQSS1SiEg57q7LtVeK-NQHzW3_CrC796eVKwls",
        isFavorite: true,
    },
    {
        id: 4,
        name: "Noise-Cancelling Headphones",
        shopName: "AudioPhile",
        price: "$199.99",
        rating: 5.0,
        distance: "2.1 miles away",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlTsDfu3MDgIwLCpFrAf8clbIX8OzCLFNEbU8Rx7LBh_BRD2dmSZfRHmM1K38Uk9qMYekQZhTIM690xFesDsbVgGgvHEkvD2e8UZ0PTvdqq_7_9VAKhY_XgGYwBn_wtYQ80xKT60RcUXWc7M_RbFqnHZCoWiEQuURVtUZwubppYp7smTud29sL6WBjNZwgUY9oqjnrGk5IJBlsGa1IVjJxDNjHUFqt-oRNedpfww_arAD9cRa6ePtLnm5seX6IJGOuQeG1N-cSZ_o",
        isFavorite: false,
    },
];

const CustomerDashboard: React.FC = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col font-display text-text-light dark:text-text-dark">
            <header className="sticky top-0 z-50 flex items-center justify-center whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm">
                <div className="flex w-full max-w-[1440px] items-center justify-between px-10 py-3">
                    <Link to="/" className="flex items-center gap-4">
                        <LocalFindLogo className="size-6 text-primary" />
                        <h2 className="text-text-light dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] font-heading">LocalFind</h2>
                    </Link>
                    <div className="flex flex-1 items-center justify-end gap-4">
                        <div className="hidden md:flex w-full max-w-sm">
                            <div className="flex w-full flex-1 items-stretch rounded-lg h-10">
                                <div className="text-gray-500 dark:text-gray-400 flex border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark items-center justify-center pl-4 rounded-l-lg border-r-0">
                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>search</span>
                                </div>
                                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Search products and shops..." />
                            </div>
                        </div>
                        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-transparent text-text-light dark:text-text-dark gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCDGOYxS-ohbnst8imXzN0NQ-2RGtRAzF4o_01PdBvLasXrDak6V7iutJ3ZiDXEtXE7HM8sZff_rWjTmUteJemwSBBAA0z0nUipI8JFtm7cA5LlSxUfQ54Cya77ClccM3_kMWE3NVByhTNDKvzgrnUGH3_OyMGn4GCAykfFQXAiFNwylPOeTBKatPJY-spkNq_1vYsrbt0LR0zGs4JrgYhgjSIKSrRuDa_ByAjPO9375w3CcTj97V8Uc8qYZYruA01hNHx9Nw8GB7A")` }}></div>
                    </div>
                </div>
            </header>

            <main className="flex w-full flex-1 justify-center py-5">
                <div className="flex flex-col w-full max-w-[1440px] flex-1 px-10">
                    <div className="flex flex-wrap justify-between gap-3 p-4">
                        <div className="flex min-w-72 flex-col gap-2">
                            <p className="text-text-light dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] font-heading">Hi, Jane!</p>
                            <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">Discover amazing products from shops near you.</p>
                        </div>
                    </div>
                    
                    <div className="pb-3">
                        <div className="flex border-b border-border-light dark:border-border-dark px-4 gap-8">
                            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-primary pb-[13px] pt-4" href="#"><p className="text-sm font-bold leading-normal tracking-[0.015em]">Nearby Products</p></a>
                            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 dark:text-gray-400 hover:text-text-light dark:hover:text-text-dark pb-[13px] pt-4 transition-colors" href="#"><p className="text-sm font-bold leading-normal tracking-[0.015em]">Saved Shops</p></a>
                            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 dark:text-gray-400 hover:text-text-light dark:hover:text-text-dark pb-[13px] pt-4 transition-colors" href="#"><p className="text-sm font-bold leading-normal tracking-[0.015em]">Wishlist</p></a>
                            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 dark:text-gray-400 hover:text-text-light dark:hover:text-text-dark pb-[13px] pt-4 transition-colors" href="#"><p className="text-sm font-bold leading-normal tracking-[0.015em]">Profile Settings</p></a>
                        </div>
                    </div>

                    <div className="flex gap-3 p-4 overflow-x-auto">
                        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 border border-border-light dark:border-border-dark px-4 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                            <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Category</p>
                            <span className="material-symbols-outlined text-text-light dark:text-text-dark" style={{ fontSize: '20px' }}>expand_more</span>
                        </button>
                        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 border border-border-light dark:border-border-dark px-4 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                            <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Distance</p>
                            <span className="material-symbols-outlined text-text-light dark:text-text-dark" style={{ fontSize: '20px' }}>expand_more</span>
                        </button>
                        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 border border-border-light dark:border-border-dark px-4 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                            <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Ratings</p>
                            <span className="material-symbols-outlined text-text-light dark:text-text-dark" style={{ fontSize: '20px' }}>expand_more</span>
                        </button>
                    </div>

                    <h2 className="text-text-light dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 font-heading">Fresh Finds Near You</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                        {products.map(product => <ProductCard key={product.id} product={product} />)}
                    </div>
                </div>
            </main>
            
            <footer className="flex justify-center w-full py-8 border-t border-border-light dark:border-border-dark mt-10">
                <div className="w-full max-w-[1440px] px-10 flex justify-center">
                    <Link className="text-primary font-bold hover:underline" to="/dashboard/shop-owner">Switch Role → Shop Owner</Link>
                </div>
            </footer>
        </div>
    );
};

export default CustomerDashboard;
