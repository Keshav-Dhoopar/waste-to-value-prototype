import React from 'react';
import { HashRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { AppProvider } from './contexts/AppContext';

// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

// Pages (to be implemented)
import Home from './pages/Home';
import Login from './pages/Login';
import LearnMore from './pages/LearnMore';
import Surveys from './pages/Surveys';
import ProviderDashboard from './pages/ProviderDashboard';
import BuyerDashboard from './pages/BuyerDashboard';
import AdminDashboard from './pages/AdminDashboard';

// Protected Route Wrapper
const ProtectedRoute = ({ allowedRoles }) => {
  const { currentUser } = useAuth();
  
  if (!currentUser) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(currentUser.role)) return <Navigate to="/" replace />;
  
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <Outlet />
      </main>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppProvider>
        <Router>
          <div className="app-container">
            <Navbar />
            <div className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/learn-more" element={<LearnMore />} />
                
                {/* Provider Routes */}
                <Route element={<ProtectedRoute allowedRoles={['provider']} />}>
                  <Route path="/provider" element={<ProviderDashboard />} />
                  <Route path="/provider/listings" element={<ProviderDashboard />} />
                </Route>

                {/* Buyer Routes */}
                <Route element={<ProtectedRoute allowedRoles={['buyer']} />}>
                  <Route path="/buyer" element={<BuyerDashboard />} />
                  <Route path="/buyer/requirements" element={<Surveys />} />
                  <Route path="/buyer/orders" element={<div className="p-8"><h1 className="text-2xl text-white">My Orders Page</h1><p className="text-gray-400 mt-2">Order tracking coming soon.</p></div>} />
                </Route>

                {/* Admin Routes */}
                <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                  <Route path="/admin" element={<AdminDashboard />} />
                </Route>
              </Routes>
            </div>
          </div>
        </Router>
      </AppProvider>
    </AuthProvider>
  );
};

export default App;
