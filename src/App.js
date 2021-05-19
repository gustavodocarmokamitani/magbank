import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./views/Home";
import Login from "./views/Login";
import AccountModal from "./components/AccountModal";
import "./App.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [ showModal, setShowModal ] = useState(false);


  return (
    <Router>

      <Navbar handleCreateAcc={() => setShowModal(true)}/>

      <Switch>

        <Route path="/" exact>
          <Home handleCreateAcc={() => setShowModal(true)}/>
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/Card">
          {/* <Card/> */}
        </Route>

        <Route path="/Wwa">
          {/* <Wwa/> */}
        </Route>

        <Route path="/Faq">
          {/* <Faq/> */}
        </Route>
      </Switch>

      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </Router>
  )
}

export default App;
