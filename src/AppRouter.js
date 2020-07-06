import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/routes/Dashboard/Dashboard';
import Tracker from './components/routes/Tracker/Tracker';
import { AboutUs } from './components/routes/AboutUs/AboutUs';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={Dashboard} />
        <Route path={'/tracker'} component={Tracker} />
        <Route path={'/about-us'} component={AboutUs} />
        <Route exact path="/opportunities" component={Opportunities} />
        <Route exact path="/solutions" component={Solutions} />
        <Route exact path="/contact-us" component={Contact} />
      </Switch>
    </Router>
  );
};

function Opportunities() {
  return <p>Discover our numerous opportunities</p>;
}

function Solutions() {
  return <p>Solutions that help you.</p>;
}

function Contact() {
  return <p>Feel free to reach us.</p>;
}

export default AppRouter;
