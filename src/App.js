// App.js

import React from 'react';
import './App.css';
import PriceCard from './components/PriceCard';

const plans = [
  {
    title: 'Free',
    price: '$0/month',
    features: [
      'Single User',
      '50GB Storage',
      'Unlimited Public Projects',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports',
    ],
    availableFeatures: [true, true, true, true, false, false, false, false],
    buttonText: 'BUTTON',
  },
  {
    title: 'Plus',
    price: '$9/month',
    features: [
      '5 Users',
      '50GB Storage',
      'Unlimited Public Projects',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports',
    ],
    availableFeatures: [true, true, true, true, true, true, true, false],
    buttonText: 'BUTTON',
  },
  {
    title: 'Pro',
    price: '$49/month',
    features: [
      'Unlimited Users',
      '50GB Storage',
      'Unlimited Public Projects',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports',
    ],
    availableFeatures: [true, true, true, true, true, true, true, true],
    buttonText: 'BUTTON',
  },
];

function App() {
  return (
    <div className="App">
      <h1>React Price Card Task</h1>
      <div className="card-container">
        {plans.map((plan, index) => (
          <PriceCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
}

export default App;
