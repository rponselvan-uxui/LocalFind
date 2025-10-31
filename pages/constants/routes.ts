/**
 * Centralized route definitions for the application.
 * This prevents magic strings and makes route management easier.
 */
export const ROUTES = {
  HOME: '/',
  // --- Login Routes ---
  LOGIN_CUSTOMER: '/login/customer',
  LOGIN_SHOP_OWNER: '/login/shop-owner',
  LOGIN_ADMIN: '/login/admin',
  
  // --- Dashboard Routes ---
  DASHBOARD_CUSTOMER: '/dashboard/customer',
  DASHBOARD_SHOP_OWNER: '/dashboard/shop-owner',
};