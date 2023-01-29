// import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './containers/Home';
import Items from './containers/item/Items';
import Item from './containers/item/Item';

function App() {
  
  return (
    <Router>
      <Navigation />
      <div className="App">
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/items" element={ <Items /> } />
          <Route path="/items/:id" element={ <Item /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
