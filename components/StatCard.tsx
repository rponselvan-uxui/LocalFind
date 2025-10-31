import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change }) => (
  <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
    <p className="text-slate-600 dark:text-slate-300 text-base font-medium leading-normal">{title}</p>
    <p className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold leading-tight font-heading">{value}</p>
    <p className="text-accent text-sm font-medium leading-normal">{change}</p>
  </div>
);

export default StatCard;