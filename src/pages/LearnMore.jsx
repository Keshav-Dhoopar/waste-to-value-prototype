import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, DollarSign, Factory, Globe, ShieldCheck, Zap } from 'lucide-react';
import './LearnMore.css';

const LearnMore = () => {
  return (
    <div className="learn-container animate-fade-in">
      {/* Header Section */}
      <section className="learn-header">
        <div className="learn-content">
          <h1 className="learn-title">About <span className="text-highlight">Waste to Value</span></h1>
          <p className="learn-subtitle">
            Pioneering the industrial circular economy by transforming by-products into valuable raw materials.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-grid">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              Every year, millions of tons of industrial by-products are sent to landfills, incurring immense disposal costs and environmental damage. Meanwhile, other industries are constantly seeking cost-effective raw materials.
            </p>
            <p>
              <strong>Waste to Value</strong> bridges this gap. We provide a secure, AI-driven marketplace that matches waste producers with buyers who can utilize these exact materials, fostering a sustainable ecosystem where nothing is wasted.
            </p>
          </div>
          <div className="mission-visual glass-panel">
            <Globe className="mission-icon" size={80} />
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="value-section">
        <h2 className="section-title">Why Join Our Platform?</h2>
        <div className="value-grid">
          {/* For Providers */}
          <div className="value-card glass-panel">
            <div className="card-header">
              <Factory className="value-icon provider-icon" size={32} />
              <h3>For Waste Providers</h3>
            </div>
            <ul className="value-list">
              <li><DollarSign size={18} className="list-icon" /> Eliminate costly disposal fees.</li>
              <li><Zap size={18} className="list-icon" /> Open new revenue streams from by-products.</li>
              <li><Leaf size={18} className="list-icon" /> Achieve zero-waste sustainability goals.</li>
              <li><ShieldCheck size={18} className="list-icon" /> Secure verification and quality assurance.</li>
            </ul>
          </div>
          
          {/* For Buyers */}
          <div className="value-card glass-panel">
            <div className="card-header">
              <Leaf className="value-icon buyer-icon" size={32} />
              <h3>For Raw Material Buyers</h3>
            </div>
            <ul className="value-list">
              <li><DollarSign size={18} className="list-icon" /> Access cheaper alternatives to virgin materials.</li>
              <li><Zap size={18} className="list-icon" /> Improve supply chain resilience.</li>
              <li><Globe size={18} className="list-icon" /> Boost your company's green credentials.</li>
              <li><ShieldCheck size={18} className="list-icon" /> Verified suppliers and material specs.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to transform your industrial footprint?</h2>
        <p>Join the Waste to Value marketplace today and take the first step towards a circular economy.</p>
        <div className="cta-actions">
          <Link to="/login" className="btn btn-primary btn-lg">Create an Account</Link>
          <Link to="/" className="btn btn-ghost btn-lg">Back to Home</Link>
        </div>
      </section>
    </div>
  );
};

export default LearnMore;
