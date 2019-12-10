import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cards from "../../Components/Cards/Card";
import Inputs from "../../Components/Inputs/Input";
import Buttons from "../../Components/Buttons/Buttons";
import "../Login/Login.css";

export default function Signup(props) {
  const [response, setResponse] = useState("");
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: ""
  });

  function handleChange(e) {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: `http://localhost:5000/admin/signup`,
      data: values
    })
      .then(response => {
        console.log(response.data.data.message);
        setResponse(response.data.data.message);
        props.history.push("/admin-login");
      })
      .catch(err => {
        setResponse(err.response.data.message);
      });
  }
  return (
    <div>
      <Cards Cardstyle={cardStyle}>
        <h3 className="Cardh3">MiniBank.Com</h3>
        <p>{response}</p>
        <form onSubmit={handleSubmit}>
          <Inputs
            placeholder="First name"
            type="text"
            id="Signupfirstname"
            onChange={handleChange}
            value={values.firstname}
            name="firstname"
          />
          <Inputs
            placeholder="Last name"
            type="text"
            id="Signuplastname"
            onChange={handleChange}
            value={values.lastname}
            name="lastname"
          />
          <Inputs
            placeholder="Email"
            type="email"
            id="Signupemail"
            onChange={handleChange}
            value={values.email}
            name="email"
          />
          <Inputs
            placeholder="Username"
            type="text"
            id="LoginUsername"
            onChange={handleChange}
            value={values.username}
            name="username"
          />
          <Inputs
            placeholder="Password"
            type="password"
            id="LoginPassword"
            onChange={handleChange}
            value={values.password}
            name="password"
          />
          <Buttons
            className="loginButton btn btn-success"
            onClick={handleSubmit}
          >
            signup
          </Buttons>
          <Link to="/admin/login" className="link">
            Already have an account? Login
          </Link>
        </form>
      </Cards>
    </div>
  );
}

const cardStyle = {
  width: "60%",
  border: "none",
  boxShadow: "4px 10px 15px #888",
  margin: "15% auto"
};
