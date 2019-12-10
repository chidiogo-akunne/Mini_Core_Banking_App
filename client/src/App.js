import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/admin/dashboard" component={Dashboard}></Route>
        <Route exact path="/admin/login" component={Login}></Route>
        <Route exact path="/admin/signup" component={Login}></Route>
      </div>
    </Router>
  );
}

export default App;
