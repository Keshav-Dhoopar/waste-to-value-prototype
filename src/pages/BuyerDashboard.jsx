import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { Search, MapPin, Package, Filter } from 'lucide-react';
import { Card, CardBody } from '../components/Card';
import './Dashboard.css';

const BuyerDashboard = () => {
  const { listings, placeOrder } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  
  const availableListings = listings.filter(l => l.status === 'Available' && l.type.toLowerCase().includes(searchTerm.toLowerCase()));

  const handlePurchase = (listing) => {
    // In a real app, this would open a checkout modal
    if(window.confirm(`Are you sure you want to request purchase for ${listing.type}?`)) {
      placeOrder({
        listingId: listing.id,
        buyerId: 'u3', // Assuming current user is buyer
        providerId: listing.providerId,
        quantity: listing.quantity,
        totalPrice: listing.quantity * listing.price
      });
      alert('Order request placed successfully!');
    }
  };

  return (
    <div className="dashboard-container animate-fade-in">
      <div className="dashboard-header">
        <h1>Marketplace</h1>
        <p>Find affordable raw materials and sustainable by-products.</p>
      </div>

      <div className="search-bar-container mb-2">
        <div className="search-input-wrapper" style={{ position: 'relative', maxWidth: '600px' }}>
          <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
          <input 
            type="text" 
            placeholder="Search materials (e.g., Plastic, Metal)..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)', color: '#fff', fontSize: '1rem' }}
          />
        </div>
      </div>

      <h2 className="section-title-sm">Available Materials</h2>
      {availableListings.length === 0 ? (
        <p style={{ color: 'var(--color-text-muted)' }}>No materials found matching "{searchTerm}".</p>
      ) : (
        <div className="listings-grid">
          {availableListings.map(listing => (
            <Card key={listing.id} className="listing-card">
              <img src={listing.image} alt={listing.type} className="listing-img" />
              <div className="listing-content">
                <h3>{listing.type}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span className="listing-meta" style={{margin: 0}}><Package size={14}/> {listing.quantity} {listing.unit} Available</span>
                  <span className="listing-meta" style={{margin: 0}}><MapPin size={14}/> {listing.location}</span>
                </div>
                <div className="listing-footer">
                  <span className="listing-price">${listing.price}/{listing.unit}</span>
                  <button onClick={() => handlePurchase(listing)} className="btn btn-primary">Request</button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default BuyerDashboard;
