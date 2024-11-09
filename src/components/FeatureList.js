// components/FeatureList.js

import React from 'react';
// import './FeatureList.css';

function FeatureList({ features, availableFeatures }) {
  return (
    <ul>
      {features.map((feature, index) => (
        <li
          key={index}
          className={availableFeatures[index] ? 'available' : 'unavailable'}
        >
          {feature}
        </li>
      ))}
    </ul>
  );
}

export default FeatureList;
