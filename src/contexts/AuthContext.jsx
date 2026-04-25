import React, { createContext, useContext, useState } from 'react';
import { MOCK_USERS } from '../data/mockData';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = (role, email, password) => {
    if (role === 'admin' && password !== 'admin123') {
      throw new Error('Invalid Admin Password. Please enter the secure lock password.');
    }
    const user = MOCK_USERS.find(u => u.role === role);
    if(user) {
      setCurrentUser({ ...user, email });
    }
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
