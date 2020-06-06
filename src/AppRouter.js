import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard } from "./components/routes/Dashboard/Dashboard";
import Tracker from "./components/routes/Tracker/Tracker";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Dashboard} />
        <Route path={"/tracker"} component={Tracker} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
