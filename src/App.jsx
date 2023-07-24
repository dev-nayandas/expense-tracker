import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import IncomePage from './pages/IncomePage';
import ExpensePage from './pages/ExpensePage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
       
          <Switch>
          <Route path="/income" component={IncomePage} />
          <Route path="/expense" component={ExpensePage} />
          </Switch>
    
      </div>
    </Router>
  );
}

export default App;
