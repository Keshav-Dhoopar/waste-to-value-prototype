import React from 'react';
import { Link } from 'react-router-dom';
import { Recycle, TrendingUp, Handshake, ChevronRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Turn Waste into <span className="text-highlight">Value</span></h1>
          <p className="hero-subtitle">
            One person’s waste is another’s raw material. We connect factories generating industrial waste with businesses seeking affordable, sustainable raw materials.
          </p>
          <div className="hero-actions">
            <Link to="/login" className="btn btn-primary btn-lg">Get Started <ChevronRight size={18} /></Link>
            <Link to="/learn-more" className="btn btn-ghost btn-lg">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Services/Features Section */}
      <section id="how-it-works" className="features-section">
        <h2 className="section-title">How It Works</h2>
        <div className="features-grid">
          <div className="feature-card glass-panel">
            <div className="feature-icon"><Recycle size={32} /></div>
            <h3>List Your Waste</h3>
            <p>Factories can easily list their by-products, specifying material type, quantity, and location.</p>
          </div>
          <div className="feature-card glass-panel">
            <div className="feature-icon"><Handshake size={32} /></div>
            <h3>Match with Buyers</h3>
            <p>Our platform algorithmically suggests the best matching buyers who need those exact raw materials.</p>
          </div>
          <div className="feature-card glass-panel">
            <div className="feature-icon"><TrendingUp size={32} /></div>
            <h3>Generate Value</h3>
            <p>Transform disposal costs into new revenue streams while contributing to a circular economy.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
