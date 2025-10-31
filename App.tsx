
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CustomerDashboard from './pages/CustomerDashboard';
import ShopOwnerDashboard from './pages/ShopOwnerDashboard';
import AdminLoginPage from './pages/AdminLoginPage';
import CustomerLoginPage from './pages/CustomerLoginPage';
import ShopOwnerLoginPage from './pages/ShopOwnerLoginPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard/customer" element={<CustomerDashboard />} />
        <Route path="/dashboard/shop-owner" element={<ShopOwnerDashboard />} />
        <Route path="/login/admin" element={<AdminLoginPage />} />
        <Route path="/login/customer" element={<CustomerLoginPage />} />
        <Route path="/login/shop-owner" element={<ShopOwnerLoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
