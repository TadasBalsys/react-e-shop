import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage.component';
import './App.css'

const HatsPage = () =>{
  // three props from the react router dom - history, location, match
  return (<h2>This is Hats Page</h2>)
}

// Switch component - prevents from rendering all Route components. When Route's is in Switch component, React finds Route component with the path which are needed, renders that Route component and stops rendering other Route components.(A <Switch> will iterate over all of its children <Route> elements and only render the first one that matches the current location. This helps when multiple route’s paths match the same pathname, when animating transitions between routes, and in identifying when no routes match the current location (so that you can render a “404” component).)
// Any component that gets render by Route component, gets three props - history, location, match
function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop/hats' component={HatsPage}/>
      <Route path='' />
    </Switch>
  );
}

export default App;
