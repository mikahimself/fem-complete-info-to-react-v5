import React from 'react'
import Details from './Details';
import { Link, Router } from '@reach/router';
import SearchParams from './SearchParams';

export default function App() {
  return (
    <div>
      <header>
      <Link to="/">
        <h1>Adopt me!</h1>
      </Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  )
};
