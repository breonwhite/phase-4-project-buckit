// import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './containers/Home';
import Items from './containers/item/Items';
import Item from './containers/item/Item';
import { UserProvider } from './context/user';
import Signup from './containers/user/Signup';
import Login from './containers/user/Login';

function App() {
  
  return (
    <div className="App">
      <UserProvider>
        <Navigation />
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/signup" element={ <Signup /> } />
          <Route exact path="/login" element={ <Login /> } />
          <Route path="/items" element={ <Items /> } />
          <Route path="/items/:id" element={ <Item /> } />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
