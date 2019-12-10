import React, { useState } from "react";
import axios from "axios";
import Cards from "../../Components/Cards/Card";
import Inputs from "../../Components/Inputs/Input";
import Buttons from "../../Components/Buttons/Buttons";
import "./Login.css";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

function Login(props) {
  const [response, setResponse] = useState("");
  const [values, setValues] = useState({
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
      url: `http://localhost:5000/admin/login`,
      data: values
    })
      .then(response => {
        console.log(response.data.data.message);
        setResponse(response.data.data.message);
        localStorage.setItem("token", response.data.data.token);
        props.history.push("/admin");
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
            className="loginButton btn btn-primary"
            onClick={handleSubmit}
          >
            Login
          </Buttons>
          <Link to="/admin-signup" className="link">
            Do you want to signup?
          </Link>
        </form>
      </Cards>
    </div>
  );
}

const cardStyle = {
  width: "50%",
  border: "none",
  boxShadow: "4px 10px 15px #888",
  margin: "15% auto"
};

export default withRouter(Login);
