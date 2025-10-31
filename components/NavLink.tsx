import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  icon: string;
  label: string;
  active?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, label, active }) => (
  <Link 
    to={href} 
    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
      active 
        ? 'bg-primary/10 dark:bg-primary/20 text-primary' 
        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
    }`}
  >
    <span className={`material-symbols-outlined ${active ? 'fill' : ''}`}>{icon}</span>
    <p className="text-sm font-medium leading-normal">{label}</p>
  </Link>
);

export default NavLink;