import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import GoalForm from './GoalForm';
import GoalList from './GoalList';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/new-goal">
          <GoalForm />
        </Route>
        <Route path="/your-goals">
        <GoalList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
