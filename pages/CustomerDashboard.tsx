import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import LocalFindLogo from '../components/icons/LocalFindLogo';
import type { Product } from '../types';
import { useAuth } from '../hooks/AuthContext';
import LoadingSpinner from '../components/LoadingSpinner';

// This is mock data that we will "fetch"
const MOCK_PRODUCTS: Product[] = [
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
    // ... (other products from your original file)
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
    const { user, logout } = useAuth();
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Simulate a network request
        setIsLoading(true);
        setError(null);
        
        const fetchProducts = () => {
            // Simulate API call
            setTimeout(() => {
                try {
                    // To test empty state, uncomment this:
                    // setProducts([]);
                    
                    // To test error state, uncomment this:
                    // throw new Error("Failed to fetch products.");

                    // Success state
                    setProducts(MOCK_PRODUCTS);
                    setIsLoading(false);
                } catch (e) {
                    setError((e as Error).message);
                    setIsLoading(false);
                }
            }, 1500); // 1.5 second delay
        };

        fetchProducts();
    }, []);

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
            <header className="sticky top-0 z-50 flex items-center justify-center whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm">
                <div className="flex w-full max-w-[1440px] items-center justify-between px-10 py-3">
                    <Link to="/" className="flex items-center gap-4">
                        <LocalFindLogo className="size-6 text-primary" />
                        <h2 className="text-text-light dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] font-heading">LocalFind</h2>
                    </Link>
                    <div className="flex flex-1 items-center justify-end gap-4">
                        {/* ... (search bar) ... */}
                        <button className="... (notifications button) ...">
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
                    
                    {/* ... (Tabs) ... */}
                    <div className="pb-3">
                        {/* ... (Tabs content) ... */}
                    </div>

                    {/* ... (Filters) ... */}
                    <div className="flex gap-3 p-4 overflow-x-auto">
                        {/* ... (Filter buttons) ... */}
                    </div>

                    <h2 className="text-text-light dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 font-heading">Fresh Finds Near You</h2>
                    
                    {renderProductContent()}
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