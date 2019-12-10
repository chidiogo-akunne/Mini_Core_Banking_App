import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/signup";
import Dashboard from "./Pages/Dashboard/index";
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/admin-login" component={Login}></Route>
        <Route exact path="/admin-signup" component={Signup}></Route>
        <Route path="/admin" component={Dashboard}></Route>
      </div>
    </Router>
  );
}

export default App;
