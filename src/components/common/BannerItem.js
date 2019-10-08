import React from 'react';

const BannerItem = ({
  name,
  description
}) => (
  <div>
    <h2>Banner Item {name}</h2>
    <p>{description}</p>
  </div>
);

export default BannerItem;
