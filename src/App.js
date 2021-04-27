import React from 'react';
import Navbar from './components/Navbar';
import Home from "./views/Home";
import "./App.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>

        <Switch>
          <Route path="/Login">
            {/* <Login/> */}
          </Route>
        </Switch>

        <Switch>
          <Route path="/Card">
            {/* <Card/> */}
          </Route>
        </Switch>

        <Switch>
          <Route path="/Wwa">
            {/* <Wwa/> */}
          </Route>
        </Switch>

        <Switch>
          <Route path="/Faq">
            {/* <Faq/> */}
          </Route>
        </Switch>
        
      </div>
    </Router>
  )
}

export default App;
