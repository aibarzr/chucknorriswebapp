import React from 'react';
import ReactDOM from 'react-dom';
import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

/*ReactDOM.render((
<BrowserRouter>
  <div className="container">
      <Route path="/" component={FoodJokes}/>
      <Route path="/special" component={CelebrityJokes}/>
  </div>
</BrowserRouter>), document.getElementById('root'));*/
const root = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route path="/" component={FoodJokes}/>
        <Route path="/special" component={CelebrityJokes}/>
      </Switch>
    </div>
  </BrowserRouter>
);