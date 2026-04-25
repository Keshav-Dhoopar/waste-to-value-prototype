export const MOCK_USERS = [
  { id: 'u1', role: 'admin', name: 'System Admin', company: 'Waste to Value' },
  { id: 'u2', role: 'provider', name: 'John Doe', company: 'Global Plastics Co.' },
  { id: 'u3', role: 'buyer', name: 'Jane Smith', company: 'EcoFurniture Inc.' }
];

export const MOCK_LISTINGS = [
  {
    id: 'l1',
    providerId: 'u2',
    type: 'Plastic (HDPE)',
    quantity: 500, // kg
    unit: 'kg',
    price: 0.5, // per unit
    location: 'New York, NY',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'l2',
    providerId: 'u2',
    type: 'Scrap Metal (Steel)',
    quantity: 1200,
    unit: 'kg',
    price: 1.2,
    location: 'Detroit, MI',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1544410145-207db8a011d6?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'l3',
    providerId: 'u2',
    type: 'Textile Waste (Cotton)',
    quantity: 300,
    unit: 'kg',
    price: 0.3,
    location: 'Raleigh, NC',
    status: 'Sold',
    image: 'https://images.unsplash.com/photo-1522204523234-8729b4651e04?auto=format&fit=crop&w=500&q=80'
  }
];

export const MOCK_SURVEYS = [
  {
    id: 's1',
    buyerId: 'u3',
    materialNeeded: 'Recycled Aluminum',
    monthlyVolume: '5000 kg',
    expectedPrice: '$1.00 - $1.20 / kg',
    qualityRequirements: 'Must be cleaned and shredded.',
    status: 'Active'
  },
  {
    id: 's2',
    buyerId: 'u3',
    materialNeeded: 'PET Plastic Flakes',
    monthlyVolume: '10000 kg',
    expectedPrice: '$0.40 - $0.50 / kg',
    qualityRequirements: 'Color sorted (Clear/Blue).',
    status: 'Fulfilled'
  }
];

export const MOCK_ORDERS = [
  {
    id: 'o1',
    listingId: 'l3',
    buyerId: 'u3',
    providerId: 'u2',
    quantity: 300,
    totalPrice: 90,
    status: 'Delivered',
    date: '2026-04-10'
  }
];
