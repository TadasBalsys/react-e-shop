import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component'
import HomePage from './pages/homepage.component';
import ShopPage from './components/shop/shop.component';
import './App.css';

// Switch component - prevents from rendering all Route components. When Route's is in Switch component, React finds Route component with the path which are needed, renders that Route component and stops rendering other Route components.(A <Switch> will iterate over all of its children <Route> elements and only render the first one that matches the current location. This helps when multiple route’s paths match the same pathname, when animating transitions between routes, and in identifying when no routes match the current location (so that you can render a “404” component).)
// Any component that gets render by Route component, gets three props - history, location, match
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route path='' />
      </Switch>
    </div>
  );
}

export default App;
