import React from 'react';

// Use this pattern to make the component be the default export of the component
export default function Pet ({ name, animal, breed }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  ) 
};