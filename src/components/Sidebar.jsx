import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LayoutDashboard, ShoppingCart, ListCollapse, MessageSquare, Shield, FileText } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const { currentUser } = useAuth();

  const renderLinks = () => {
    switch (currentUser?.role) {
      case 'provider':
        return (
          <>
            <NavLink to="/provider" end className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>
              <LayoutDashboard size={20} /> Dashboard
            </NavLink>
            <NavLink to="/provider/listings" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>
              <ListCollapse size={20} /> My Listings
            </NavLink>
          </>
        );
      case 'buyer':
        return (
          <>
            <NavLink to="/buyer" end className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>
              <LayoutDashboard size={20} /> Marketplace
            </NavLink>
            <NavLink to="/buyer/requirements" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>
              <FileText size={20} /> My Requirements
            </NavLink>
            <NavLink to="/buyer/orders" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>
              <ShoppingCart size={20} /> Orders
            </NavLink>
          </>
        );
      case 'admin':
        return (
          <>
            <NavLink to="/admin" end className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>
              <Shield size={20} /> Admin Panel
            </NavLink>
          </>
        );
      default:
        return null;
    }
  };

  if(!currentUser) return null;

  return (
    <aside className="sidebar">
      <div className="sidebar-nav">
        {renderLinks()}
        <NavLink to="/messages" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>
          <MessageSquare size={20} /> Messages
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
