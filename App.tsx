import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
// These paths are now corrected:
import { useAuth } from './components/hooks/AuthContext';
import { ROUTES } from './pages/constants/routes';
// This path was correct:
import LoadingSpinner from './components/LoadingSpinner';

// Import pages lazily
const LandingPage = lazy(() => import('./pages/LandingPage'));
const CustomerDashboard = lazy(() => import('./pages/CustomerDashboard'));
const ShopOwnerDashboard = lazy(() => import('./pages/ShopOwnerDashboard'));
const AdminLoginPage = lazy(() => import('./pages/AdminLoginPage'));
const CustomerLoginPage = lazy(() => import('./pages/CustomerLoginPage'));
const ShopOwnerLoginPage = lazy(() => import('./pages/ShopOwnerLoginPage'));

// A layout for routes that should be protected
const ProtectedLayout: React.FC<{ allowedRole: 'Customer' | 'ShopOwner' }> = ({ allowedRole }) => {
  const { user } = useAuth();

  if (!user) {
    // If no user, redirect to the customer login page
    return <Navigate to={ROUTES.LOGIN_CUSTOMER} replace />;
  }

  if (user.role !== allowedRole) {
    // If user is the wrong role, send them to the landing page
    return <Navigate to={ROUTES.HOME} replace />;
  }

  // If user is authenticated and has the correct role, show the page
  return <Outlet />;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Public Routes */}
          <Route path={ROUTES.HOME} element={<LandingPage />} />
          <Route path={ROUTES.LOGIN_ADMIN} element={<AdminLoginPage />} />
          <Route path={ROUTES.LOGIN_CUSTOMER} element={<CustomerLoginPage />} />
          <Route path={ROUTES.LOGIN_SHOP_OWNER} element={<ShopOwnerLoginPage />} />

          {/* Protected Customer Routes */}
          <Route element={<ProtectedLayout allowedRole="Customer" />}>
            <Route path={ROUTES.DASHBOARD_CUSTOMER} element={<CustomerDashboard />} />
          </Route>

          {/* Protected Shop Owner Routes */}
          <Route element={<ProtectedLayout allowedRole="ShopOwner" />}>
            <Route path={ROUTES.DASHBOARD_SHOP_OWNER} element={<ShopOwnerDashboard />} />
          </Route>

          {/* Fallback route */}
          <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;