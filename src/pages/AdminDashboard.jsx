import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import { Card, CardHeader, CardBody } from '../components/Card';
import { Users, FileText, TrendingUp, AlertTriangle } from 'lucide-react';
import './Dashboard.css';

const AdminDashboard = () => {
  const { listings, surveys, orders } = useAppContext();

  const totalValue = orders.reduce((sum, order) => sum + order.totalPrice, 0);

  return (
    <div className="dashboard-container animate-fade-in">
      <div className="dashboard-header">
        <h1>Admin Control Panel</h1>
        <p>Platform overview, user management, and transactional health.</p>
      </div>

      <div className="quick-stats mb-2">
        <Card>
          <CardBody>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="feature-icon" style={{ margin: 0, width: '48px', height: '48px' }}><FileText size={24} /></div>
              <div>
                <div className="stat-label">Total Listings</div>
                <div className="stat-value">{listings.length}</div>
              </div>
            </div>
          </CardBody>
        </Card>
        
        <Card>
          <CardBody>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="feature-icon" style={{ margin: 0, width: '48px', height: '48px', color: '#3b82f6', backgroundColor: 'rgba(59, 130, 246, 0.1)' }}><Users size={24} /></div>
              <div>
                <div className="stat-label">Active Surveys</div>
                <div className="stat-value">{surveys.length}</div>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="feature-icon" style={{ margin: 0, width: '48px', height: '48px', color: '#f59e0b', backgroundColor: 'rgba(245, 158, 11, 0.1)' }}><TrendingUp size={24} /></div>
              <div>
                <div className="stat-label">Total Volume ($)</div>
                <div className="stat-value">${totalValue.toFixed(2)}</div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <Card>
          <CardHeader title="Recent Platform Activity" action={<button className="btn btn-ghost" style={{padding: '0.25rem 0.5rem', fontSize: '0.75rem'}}>View All</button>} />
          <CardBody>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {orders.map(order => (
                <div key={order.id} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                  <div>
                    <strong style={{ color: '#fff' }}>Order #{order.id}</strong>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Completed on {order.date}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <strong style={{ color: 'var(--color-primary)' }}>+${order.totalPrice.toFixed(2)}</strong>
                    <p>Status: <span className="status-badge status-available" style={{fontSize: '0.65rem'}}>{order.status}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card style={{ borderColor: 'rgba(239, 68, 68, 0.5)' }}>
          <CardHeader title="Pending Disputes / Alerts" action={<AlertTriangle size={20} color="var(--color-danger)" />} />
          <CardBody>
            <div style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--color-text-muted)' }}>
              <AlertTriangle size={48} style={{ opacity: 0.2, margin: '0 auto 1rem' }} />
              <p>No active disputes.</p>
              <p style={{ fontSize: '0.875rem' }}>The marketplace is currently operating smoothly.</p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
