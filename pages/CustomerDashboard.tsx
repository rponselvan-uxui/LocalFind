import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import LocalFindLogo from '../components/icons/LocalFindLogo';
import type { Product } from '../types';
import { useAuth } from '../components/hooks/AuthContext';
import LoadingSpinner from '../components/LoadingSpinner';
import { ROUTES } from './constants/routes';

const CustomerDashboard: React.FC = () => {
    const { user, logout } = useAuth();
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            setError(null);
            
            try {
                // --- THIS IS THE CHANGE ---
                // We are now fetching from our backend API
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products from server.');
                }
                const data: Product[] = await response.json();
                // --- END CHANGE ---

                setProducts(data);

            } catch (e) {
                setError((e as Error).message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);
    
    // ... (renderProductContent function remains the same)
    const renderProductContent = () => {
        if (isLoading) {
            return (
                <div className="flex w-full justify-center items-center h-64">
                    <LoadingSpinner />
                </div>
            );
        }

        if (error) {
            return (
                <div className="flex w-full justify-center items-center h-64 p-4">
                    <div className="rounded-lg bg-red-100 p-6 text-center text-red-700 dark:bg-red-900 dark:text-red-200">
                        <p className="font-bold text-lg">Error</p>
                        <p>{error}</p>
                    </div>
                </div>
            );
        }

        if (products.length === 0) {
            return (
                <div className="flex w-full justify-center items-center h-64 p-4">
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <span className="material-symbols-outlined text-6xl">storefront</span>
                        <p className="font-bold text-lg mt-4">No Products Found</p>
                        <p>There are no fresh finds near you right now. Check back later!</p>
                    </div>
                </div>
            );
        }

        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {products.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
        );
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col font-display text-text-light dark:text-text-dark">
            {/* ... (header JSX remains the same) ... */}
            <header className="sticky top-0 z-50 flex items-center justify-center whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm">
                <div className="flex w-full max-w-[1440px] items-center justify-between px-10 py-3">
                    <Link to={ROUTES.HOME} className="flex items-center gap-4">
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
                        <button onClick={logout} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-white text-sm font-bold shadow-soft hover:bg-primary/90 transition-colors">
                            Logout
                        </button>
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCDGOYxS-ohbnst8imXzN0NQ-2RGtRAzF4o_01PdBvLasXrDak6V7iutJ3ZiDXEtXE7HM8sZff_rWjTmUteJemwSBBAA0z0nUipI8JFtm7cA5LlSxUfQ54Cya77ClccM3_kMWE3NVByhTNDKvzgrnUGH3_OyMGn4GCAykfFQXAiFNwylPOeTBKatPJY-spkNq_1vYsrbt0LR0zGs4JrgYhgjSIKSrRuDa_ByAjPO9375w3CcTj97V8Uc8qYZYruA01hNHx9Nw8GB7A")` }}></div>
                    </div>
                </div>
            </header>
            
            <main className="flex w-full flex-1 justify-center py-5">
                <div className="flex flex-col w-full max-w-[1440px] flex-1 px-10">
                    <div className="flex flex-wrap justify-between gap-3 p-4">
                        <div className="flex min-w-72 flex-col gap-2">
                            <p className="text-text-light dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] font-heading">Hi, {user?.name || 'There'}!</p>
                            <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">Discover amazing products from shops near you.</p>
                        </div>
                    </div>
                    
                    {/* ... (Tabs JSX remains the same) ... */}
                    <div className="pb-3">
                        <div className="flex border-b border-border-light dark:border-border-dark px-4 gap-8">
                            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-primary pb-[13px] pt-4" href="#"><p className="text-sm font-bold leading-normal tracking-[0.015em]">Nearby Products</p></a>
                            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 dark:text-gray-400 hover:text-text-light dark:hover:text-text-dark pb-[13px] pt-4 transition-colors" href="#"><p className="text-sm font-bold leading-normal tracking-[0.015em]">Saved Shops</p></a>
                            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 dark:text-gray-400 hover:text-text-light dark:hover:text-text-dark pb-[13px] pt-4 transition-colors" href="#"><p className="text-sm font-bold leading-normal tracking-[0.015em]">Wishlist</p></a>
                            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 dark:text-gray-400 hover:text-text-light dark:hover:text-text-dark pb-[13px] pt-4 transition-colors" href="#"><p className="text-sm font-bold leading-normal tracking-[0.015em]">Profile Settings</p></a>
                        </div>
                    </div>

                    {/* ... (Filters JSX remains the same) ... */}
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
                    
                    {renderProductContent()}
                </div>
            </main>
            
            {/* ... (footer JSX remains the same) ... */}
            <footer className="flex justify-center w-full py-8 border-t border-border-light dark:border-border-dark mt-10">
                <div className="w-full max-w-[1440px] px-10 flex justify-center">
                    <Link className="text-primary font-bold hover:underline" to={ROUTES.DASHBOARD_SHOP_OWNER}>Switch Role → Shop Owner</Link>
                </div>
            </footer>
        </div>
    );
};

export default CustomerDashboard;