// components/PriceCard.js

import React from 'react';
import FeatureList from './FeatureList';
import Button from './Button';
// import './PriceCard.css';

function PriceCard({ title, price, features, availableFeatures, buttonText }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <h3>{price}</h3>
      <FeatureList features={features} availableFeatures={availableFeatures} />
      <Button text={buttonText} />
    </div>
  );
}

export default PriceCard;
