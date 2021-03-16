import React from 'react'
import Pet from './Pet';
import SearchParams from './SearchParams';

export default function App() {
  return (
    <div>
      <h1>Adopt me!</h1>
      <SearchParams/>
      {/* <Pet name="Luna" animal="Dog" breed="Havanese"></Pet>
      <Pet name="Pepper" animal="Bird" breed="Cockatiel"></Pet>
      <Pet name="Doink" animal="Cat" breed="Stray"></Pet> */}
    </div>
  )
};
