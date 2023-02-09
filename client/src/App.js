import React, { Suspense }from 'react';
import { Routes, Route } from 'react-router-dom'
//import Home from './containers/Home';
// import Items from './containers/item/Items';
// import Item from './containers/item/Item';
import { UserProvider } from './context/user';
import Signup from './containers/user/Signup';
import Login from './containers/user/Login';
import Navbar from './containers/user/Navbar';

function App() {

  const Home = React.lazy(() => import('./containers/Home'));
  const Item = React.lazy(() => import('./containers/item/Item'));
  const Items = React.lazy(() => import('./containers/item/Items'));
  
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
      <UserProvider>
      <Navbar />
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/signup" element={ <Signup /> } />
          <Route exact path="/login" element={ <Login /> } />
          <Route path="/items" element={ <Items /> } />
          <Route path="/items/:id" element={ <Item /> } />
        </Routes>
      </UserProvider>
      </Suspense>
    </div>
  );
}

export default App;
