import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";
import Appointment from './Appointment'
import Admin from './Admin'


const App = () => {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar view</Link>
            </li>
            <li>
              <Link to="/day">Day view</Link>
            </li>
            <li>
              <Link to="/appointment">Appointment</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/calendar/day">
              <Home />
            </Route>
            <Route path="/calendar">
              <Calendar  />
            </Route>
            <Route path="/day">
              <Day />
            </Route>
            <Route path="/appointment">
              <Appointment />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
};
export default App;
