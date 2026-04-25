import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Factory, ShoppingCart, UserCog, Lock, Mail, ArrowLeft } from 'lucide-react';
import './Login.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError('');
    try {
      login(selectedRole, email, password);
      // Navigate on success
      if(selectedRole === 'provider') navigate('/provider');
      if(selectedRole === 'buyer') navigate('/buyer');
      if(selectedRole === 'admin') navigate('/admin');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = () => {
    // Simulate successful Google login except for Admin
    if (selectedRole === 'admin') {
      setError('Admin must use secure password authentication.');
      return;
    }
    
    login(selectedRole, 'user@google.com', 'google_auth_placeholder');
    if(selectedRole === 'provider') navigate('/provider');
    if(selectedRole === 'buyer') navigate('/buyer');
  };

  if (selectedRole) {
    return (
      <div className="login-container animate-fade-in">
        <div className="login-box glass-panel" style={{ maxWidth: '400px' }}>
          <button className="btn btn-ghost" style={{ marginBottom: '1.5rem', border: 'none', padding: '0.25rem' }} onClick={() => { setSelectedRole(null); setError(''); }}>
            <ArrowLeft size={20} /> Back to Roles
          </button>
          
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            {selectedRole === 'provider' && <Factory size={40} className="role-icon" />}
            {selectedRole === 'buyer' && <ShoppingCart size={40} className="role-icon" />}
            {selectedRole === 'admin' && <Lock size={40} className="role-icon" style={{ color: 'var(--color-danger)' }} />}
            <h2 className="login-title" style={{ fontSize: '1.5rem' }}>
              {selectedRole === 'admin' ? 'Secure Admin Login' : `${selectedRole === 'provider' ? 'Waste Provider' : 'Material Buyer'} Login`}
            </h2>
          </div>

          {error && <div className="error-message">{error}</div>}

          {selectedRole !== 'admin' && (
            <div style={{ marginBottom: '1.5rem' }}>
              <button type="button" className="google-btn" onClick={handleGoogleLogin}>
                <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>
              <div className="divider"><span>OR</span></div>
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="custom-form">
            <div className="form-group" style={{ textAlign: 'left' }}>
              <label>Email Address</label>
              <div className="input-group">
                <Mail size={18} />
                <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="name@company.com" style={{ width: '100%' }} />
              </div>
            </div>
            
            <div className="form-group" style={{ textAlign: 'left' }}>
              <label>Password {selectedRole === 'admin' && '(admin123)'}</label>
              <div className="input-group">
                <Lock size={18} />
                <input required type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" style={{ width: '100%' }} />
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem', padding: '0.75rem' }}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="login-container animate-fade-in">
      <div className="login-box glass-panel">
        <h2 className="login-title">Welcome to Waste to Value</h2>
        <p className="login-subtitle">Select your role to access the platform</p>
        
        <div className="role-grid">
          <button onClick={() => setSelectedRole('provider')} className="role-card">
            <Factory size={48} className="role-icon" />
            <h3>Waste Provider</h3>
            <p>I have industrial waste or by-products to sell.</p>
          </button>
          
          <button onClick={() => setSelectedRole('buyer')} className="role-card">
            <ShoppingCart size={48} className="role-icon" />
            <h3>Raw Material Buyer</h3>
            <p>I'm looking to buy affordable raw materials.</p>
          </button>

          <button onClick={() => setSelectedRole('admin')} className="role-card secure-card">
            <Lock size={48} className="role-icon" style={{ color: 'var(--color-danger)' }} />
            <h3>Platform Admin</h3>
            <p>Secure Portal. Password Required.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
