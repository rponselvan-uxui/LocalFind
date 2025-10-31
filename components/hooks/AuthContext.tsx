import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of our user
interface User {
  id: string;
  name: string;
  email: string;
  role: 'Customer' | 'ShopOwner';
}

// Define the shape of the context
interface AuthContextType {
  user: User | null;
  login: (email: string, role: 'Customer' | 'ShopOwner') => void;
  logout: () => void;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// The provider component that wraps our app
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Mock login function
  const login = (email: string, role: 'Customer' | 'ShopOwner') => {
    // In a real app, you'd make an API call here.
    // For this demo, we'll create a mock user.
    const mockUser: User = {
      id: '1',
      email: email,
      role: role,
      name: role === 'Customer' ? 'Jane' : 'James', // Match your dashboard mockups
    };
    setUser(mockUser);
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to easily use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};