import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { useAuth } from '../contexts/AuthContext';
import { PlusCircle, Package } from 'lucide-react';
import { Card, CardHeader, CardBody } from '../components/Card';
import './Dashboard.css';

const ProviderDashboard = () => {
  const { listings, addListing } = useAppContext();
  const { currentUser } = useAuth();
  
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ type: '', quantity: '', unit: 'kg', price: '', location: '' });

  const providerListings = listings.filter(l => l.providerId === currentUser.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    addListing({ ...formData, providerId: currentUser.id, image: 'https://images.unsplash.com/photo-1530587191344-d807663e8a4a?w=500&q=80' });
    setFormData({ type: '', quantity: '', unit: 'kg', price: '', location: '' });
    setShowForm(false);
  };

  return (
    <div className="dashboard-container animate-fade-in">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Manage your waste material listings and view performance.</p>
      </div>

      <div className="quick-stats">
        <Card>
          <CardBody>
            <div className="stat-label">Total Listings</div>
            <div className="stat-value">{providerListings.length}</div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="stat-label">Total Sold</div>
            <div className="stat-value">{providerListings.filter(l => l.status === 'Sold').length}</div>
          </CardBody>
        </Card>
      </div>

      <div className="actions-section">
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          <PlusCircle size={18} style={{ marginRight: '0.5rem' }} /> Add New Listing
        </button>
      </div>

      {showForm && (
        <Card className="form-card animate-fade-in mb-2">
          <CardHeader title="Create New Listing" />
          <CardBody>
            <form onSubmit={handleSubmit} className="custom-form">
              <div className="form-group">
                <label>Material Type</label>
                <input required type="text" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} placeholder="e.g. Plastic Flakes" />
              </div>
              <div className="form-group">
                <label>Quantity</label>
                <input required type="number" value={formData.quantity} onChange={e => setFormData({...formData, quantity: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Price (per unit)</label>
                <input required type="number" step="0.01" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input required type="text" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} />
              </div>
              <button type="submit" className="btn btn-primary">Publish Listing</button>
            </form>
          </CardBody>
        </Card>
      )}

      <h2 className="section-title-sm mt-2">Your Listings</h2>
      <div className="listings-grid">
        {providerListings.map(listing => (
          <Card key={listing.id} className="listing-card">
            <img src={listing.image} alt={listing.type} className="listing-img" />
            <div className="listing-content">
              <h3>{listing.type}</h3>
              <p className="listing-meta"><Package size={14}/> {listing.quantity} {listing.unit}</p>
              <div className="listing-footer">
                <span className="listing-price">${listing.price}/{listing.unit}</span>
                <span className={`status-badge status-${listing.status.toLowerCase()}`}>{listing.status}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProviderDashboard;
