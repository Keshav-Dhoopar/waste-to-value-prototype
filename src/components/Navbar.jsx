import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Leaf } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar glass-panel">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <Leaf className="logo-icon" />
          <span>Waste to Value</span>
        </Link>
        
        <div className="navbar-links">
          <Link to="/learn-more" className="nav-link">Learn More</Link>
          {!currentUser ? (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/login" className="btn btn-primary">Get Started</Link>
            </>
          ) : (
            <div className="user-menu">
              <span className="user-name">{currentUser.name} ({currentUser.role})</span>
              <button onClick={handleLogout} className="btn btn-ghost">Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
