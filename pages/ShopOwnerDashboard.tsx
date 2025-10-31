import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Activity } from '../types';
import { useAuth } from '../hooks/AuthContext';
import LoadingSpinner from '../components/LoadingSpinner';
import NavLink from '../components/NavLink'; // Import extracted component
import StatCard from '../components/StatCard'; // Import extracted component
import { ROUTES } from '../constants/routes';

// ... (MOCK_ACTIVITIES, statusColors)

// NavLink and StatCard components are now in their own files

const ShopOwnerDashboard: React.FC = () => {
    const { user, logout } = useAuth();
    const [activities, setActivities] = useState<Activity[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // ... (useEffect and renderActivityContent)

    return (
        <div className="relative flex min-h-screen w-full bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200">
            <aside className="flex w-64 flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-4 sticky top-0 h-screen">
                <Link to={ROUTES.HOME} className="flex items-center gap-3 text-primary px-3 mb-6">
                    <span className="material-symbols-outlined text-3xl">storefront</span>
                    <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] font-heading">LocalFind</h2>
                </Link>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-3 items-center">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD416cKDEpFxJnQwNHReFiFJpJkvhzqGIPG7tHOqZj-EeMV8hjh3EA4R1OuWR-Hz2zJvP7siK9TfQNAc1JChh8-Fq-5XaG7f--l2JYikEixJRUrgfbZsP0t-LQPaIBeIu5EIGcgGjHrWKXw3Gsjq4mJ9y3ttfGj3A4WlPr0mNGpNZv0xld8h5RBUtw3vW1snYlvVD_a1kK3Zy0FlidjNa_C_2bgoKnzP9K_yWCqGaMCq6GerpQ85IPAAS8IvETxKJ028NvaMaB8NAs")` }}></div>
                        <div className="flex flex-col">
                            <h1 className="text-slate-900 dark:text-white text-base font-medium leading-normal">The Corner Store</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Shop Owner</p>
                        </div>
                    </div>
                    <nav className="flex flex-col gap-2 mt-4">
                        <NavLink href="#" icon="dashboard" label="Dashboard" active />
                        <NavLink href="#" icon="inventory_2" label="My Products" />
                        <NavLink href="#" icon="add_box" label="Add Product" />
                        <NavLink href="#" icon="shopping_cart" label="Orders" />
                        <NavLink href="#" icon="settings" label="Shop Settings" />
                    </nav>
                </div>
                <div className="mt-auto">
                    <button onClick={logout} className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors w-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800`}>
                        <span className={`material-symbols-outlined`}>logout</span>
                        <p className="text-sm font-medium leading-normal">Logout</p>
                    </button>
                </div>
            </aside>

            <main className="flex-1 p-8 overflow-y-auto">
              {/* ... (rest of the dashboard JSX) ... */}
            </main>
        </div>
    );
};

export default ShopOwnerDashboard;