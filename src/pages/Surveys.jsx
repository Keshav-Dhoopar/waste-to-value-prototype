import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { Card, CardHeader, CardBody } from '../components/Card';
import { PlusCircle, FileText } from 'lucide-react';
import './Dashboard.css';

const Surveys = () => {
  const { surveys, addSurvey } = useAppContext();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    materialNeeded: '',
    monthlyVolume: '',
    expectedPrice: '',
    qualityRequirements: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addSurvey({
      ...formData,
      buyerId: 'u3'
    });
    setShowForm(false);
    setFormData({ materialNeeded: '', monthlyVolume: '', expectedPrice: '', qualityRequirements: '' });
  };

  return (
    <div className="dashboard-container animate-fade-in">
      <div className="dashboard-header">
        <h1>Material Requirements (Surveys)</h1>
        <p>Post your raw material needs so providers can find you.</p>
      </div>

      <div className="actions-section">
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          <PlusCircle size={18} style={{ marginRight: '0.5rem' }} /> Post New Requirement
        </button>
      </div>

      {showForm && (
        <Card className="form-card animate-fade-in mb-2">
          <CardHeader title="Requirement Survey Form" />
          <CardBody>
            <form onSubmit={handleSubmit} className="custom-form">
              <div className="form-group">
                <label>What material do you need?</label>
                <input required type="text" value={formData.materialNeeded} onChange={e => setFormData({...formData, materialNeeded: e.target.value})} placeholder="e.g. Recycled Aluminum" />
              </div>
              <div className="form-group">
                <label>Estimated Monthly Volume</label>
                <input required type="text" value={formData.monthlyVolume} onChange={e => setFormData({...formData, monthlyVolume: e.target.value})} placeholder="e.g. 5000 kg" />
              </div>
              <div className="form-group">
                <label>Expected Price Range (per unit)</label>
                <input required type="text" value={formData.expectedPrice} onChange={e => setFormData({...formData, expectedPrice: e.target.value})} placeholder="e.g. $1.00 - $1.20 / kg" />
              </div>
              <div className="form-group">
                <label>Quality Requirements / Specifics</label>
                <textarea required rows="3" value={formData.qualityRequirements} onChange={e => setFormData({...formData, qualityRequirements: e.target.value})} placeholder="e.g. Must be cleaned and shredded without contaminants..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary mt-2">Publish Requirement</button>
            </form>
          </CardBody>
        </Card>
      )}

      <h2 className="section-title-sm mt-2">Your Posted Requirements</h2>
      <div className="listings-grid">
        {surveys.map(survey => (
          <Card key={survey.id}>
            <CardHeader title={survey.materialNeeded} />
            <CardBody>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                <p><strong>Volume:</strong> {survey.monthlyVolume}</p>
                <p><strong>Target Price:</strong> {survey.expectedPrice}</p>
                <p><strong>Specs:</strong> {survey.qualityRequirements}</p>
                <div style={{ marginTop: '1rem' }}>
                  <span className={`status-badge status-${survey.status.toLowerCase()}`}>{survey.status}</span>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Surveys;
