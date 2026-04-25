import React, { createContext, useContext, useState } from 'react';
import { MOCK_LISTINGS, MOCK_SURVEYS, MOCK_ORDERS } from '../data/mockData';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [listings, setListings] = useState(MOCK_LISTINGS);
  const [surveys, setSurveys] = useState(MOCK_SURVEYS);
  const [orders, setOrders] = useState(MOCK_ORDERS);

  const addListing = (listing) => {
    setListings([...listings, { ...listing, id: `l${Date.now()}`, status: 'Available' }]);
  };

  const addSurvey = (survey) => {
    setSurveys([...surveys, { ...survey, id: `s${Date.now()}`, status: 'Active' }]);
  };

  const placeOrder = (order) => {
    setOrders([...orders, { ...order, id: `o${Date.now()}`, status: 'Pending', date: new Date().toISOString().split('T')[0] }]);
    // Update listing status if needed
    setListings(listings.map(l => l.id === order.listingId ? { ...l, status: 'Sold' } : l));
  };

  return (
    <AppContext.Provider value={{
      listings, addListing,
      surveys, addSurvey,
      orders, placeOrder
    }}>
      {children}
    </AppContext.Provider>
  );
};
