import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Activity } from '../types';
import { useAuth } from '../components/hooks/AuthContext';
import { ROUTES } from './constants/routes';
import LoadingSpinner from '../components/LoadingSpinner';
import NavLink from '../components/NavLink'; 
import StatCard from '../components/StatCard'; 

const statusColors = {
    Processing: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    Completed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    "Action Required": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
};

const ShopOwnerDashboard: React.FC = () => {
    const { user, logout } = useAuth();
    const [activities, setActivities] = useState<Activity[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchActivities = async () => {
            setIsLoading(true);
            setError(null);

            try {
                // --- THIS IS THE CHANGE ---
                const response = await fetch('/api/shop/activity');
                if (!response.ok) {
                    throw new Error('Failed to load shop activity.');
                }
                const data: Activity[] = await response.json();
                // --- END CHANGE ---
                
                setActivities(data);
            } catch (e) {
                setError((e as Error).message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchActivities();
    }, []);

    // ... (renderActivityContent function remains the same)
    const renderActivityContent = () => {
        if (isLoading) {
            return (
                <tr>
                    <td colSpan={4}>
                        <div className="flex w-full justify-center items-center h-48">
                            <div className="size-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                        </div>
                    </td>
                </tr>
            );
        }

        if (error) {
            return (
                <tr>
                    <td colSpan={4}>
                        <div className="flex w-full justify-center items-center h-48 p-4">
                            <div className="rounded-lg bg-red-100 p-6 text-center text-red-700 dark:bg-red-900 dark:text-red-200">
                                <p className="font-bold">Error</p>
                                <p>{error}</p>
                            </div>
                        </div>
                    </td>
                </tr>
            );
        }
        
        if (activities.length === 0) {
            return (
                 <tr>
                    <td colSpan={4}>
                        <div className="flex flex-col w-full justify-center items-center h-48 p-4 text-gray-500 dark:text-gray-400">
                            <span className="material-symbols-outlined text-6xl">work_history</span>
                            <p className="font-bold text-lg mt-4">No Recent Activity</p>
                            <p>New orders and reviews will appear here.</p>
                        </div>
                    </td>
                </tr>
            );
        }

        return (
            <>
                {activities.map((activity, index) => (
                    <tr key={index} className="border-b border-slate-200 dark:border-slate-800">
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{activity.event}</td>
                        <td className="px-6 py-4">{activity.user}</td>
                        <td className="px-6 py-4">{activity.date}</td>
                        <td className="px-6 py-4">
                            <span className={`text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ${statusColors[activity.status]}`}>{activity.status}</span>
                        </td>
                    </tr>
                ))}
            </>
        );
    };

    return (
        <div className="relative flex min-h-screen w-full bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200">
            {/* ... (aside/sidebar JSX remains the same) ... */}
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
                <div className="max-w-7xl mx-auto">
                    {/* ... (main header JSX remains the same) ... */}
                    <header className="flex items-center justify-end whitespace-nowrap mb-8">
                        <div className="flex items-center gap-4">
                            <button className="flex cursor-pointer items-center justify-center rounded-full h-10 w-10 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCjZUC6_Bqp_toHvs1dDdYHd-qu1LjllbVF6SQ4ndMa5FJOfOOsL8wMSnDBBgXl2KGWa4tz41B5G8r1cI6_1NI58HiAZf91MHY4efG9pb8FWgJptJ_PlnKpRGjiRMCU2_WtbCcI_LY6w9Z8hC8W-sP7lJxPFRt0olbg-sOf1Ib6g8CCy4ky1g7KCX127e67ldAwWNWvQ776-Zm33xTd_1_Qg58SoMKfhxEFjJzGQBFz451Yif9tz5WZ5_dieFeRFvT9Jzo7AUaWunA")` }}></div>
                        </div>
                    </header>
                    <div className="flex flex-wrap justify-between gap-3 mb-8">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] font-heading">Welcome back, {user?.name || 'Shop Owner'}!</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">Here's a summary of your shop's activity today.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <StatCard title="Total Views" value="1,482" change="+5.2%" />
                        <StatCard title="Total Products" value="86" change="+2 this week" />
                        <StatCard title="Total Customers" value="127" change="+11.8%" />
                        <StatCard title="Revenue" value="$2,450.75" change="+8.1%" />
                    </div>
                    
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <div className="flex justify-between items-center p-6 border-b border-slate-200 dark:border-slate-800">
                            <h2 className="text-slate-800 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] font-heading">Recent Activity</h2>
                            <button className="px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors">View All</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50 dark:bg-slate-800">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Event</th>
                                        <th scope="col" className="px-6 py-3">User</th>
                                        <th scope="col" className="px-6 py-3">Date</th>
                                        <th scope="col" className="px-6 py-3">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderActivityContent()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ShopOwnerDashboard;