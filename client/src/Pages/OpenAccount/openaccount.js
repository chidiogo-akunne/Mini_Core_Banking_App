import React, { useState } from "react";
import axios from "axios";

import Card from "../../Components/Cards/Card";
import Input from "../../Components/Inputs/Input";
import Button from "../../Components/Buttons/Buttons";
import "./openaccount.css";

export default function Openaccount(props) {
  const parentCardStyle = {
    display: "flex",
    background: "#fff",
    margin: "10px auto",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: "97%",
    borderRadius: "4px",
    flexDirection: "row",
    flexWrap: "wrap",
    paddin: "20px"
  };
  const openAccountBtn = {
    margin: "auto",
    fontWeight: "600"
  };

  const [response, setResponse] = useState("");
  const [values, setValues] = useState({
    accountType: "",
    password: "",
    username: "",
    firstname: "",
    lastname: "",
    gender: "",
    nationality: "",
    maritaStatus: "",
    religion: "",
    dateOfBirth: "",
    employmentStatus: "",
    bvn: "",
    email: "",
    phoneNumber: ""
  });

  function handleChange(e) {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: `http://localhost:5000/admin/createaccount`,
      data: values
    })
      .then(response => {
        console.log(response.data.data.message);
        setResponse(response.data.data.message);
        setValues({
          accountType: "",
          password: "",
          username: "",
          firstname: "",
          lastname: "",
          gender: "",
          nationality: "",
          maritaStatus: "",
          religion: "",
          dateOfBirth: "",
          employmentStatus: "",
          bvn: "",
          email: "",
          phoneNumber: ""
        });
      })
      .catch(err => {
        setResponse(err.response.data.message);
      });
  }

  return (
    <>
      <Card Cardstyle={parentCardStyle}>
        <p>{response}</p>
        <h4 className="card-heading">Create Account</h4>
        <form
          style={{ display: "flex", flexWrap: "wrap" }}
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="First name"
            className="input-field"
            required
            type="text"
            onChange={handleChange}
            value={values.firstname}
            name="firstname"
          />
          <Input
            placeholder="Account Type"
            className="input-field"
            required
            type="text"
            onChange={handleChange}
            value={values.accountType}
            name="accountType"
          />
          <Input
            placeholder="Last Name"
            className="input-field"
            required
            type="text"
            onChange={handleChange}
            value={values.lastname}
            name="lastname"
          />
          <Input
            placeholder="BVN"
            className="input-field"
            required
            type="number"
            onChange={handleChange}
            value={values.bvn}
            name="bvn"
          />
          <Input
            placeholder="Nationality"
            className="input-field"
            required
            type="text"
            onChange={handleChange}
            value={values.nationality}
            name="nationality"
          />
          <Input
            placeholder="Date of Birth"
            className="input-field"
            required
            type="text"
            onChange={handleChange}
            value={values.dateOfBirth}
            name="dateOfBirth"
          />
          <Input
            placeholder="Religion"
            className="input-field"
            type="text"
            onChange={handleChange}
            value={values.religion}
            name="religion"
          />
          <Input
            placeholder="Gender"
            className="input-field"
            required
            type="text"
            onChange={handleChange}
            value={values.gender}
            name="gender"
          />
          <Input
            placeholder="Marital Status"
            className="input-field"
            type="text"
            onChange={handleChange}
            value={values.maritaStatus}
            name="maritaStatus"
          />
          <Input
            placeholder="Employment Status"
            className="input-field"
            type="text"
            onChange={handleChange}
            value={values.employmentStatus}
            name="employmentStatus"
          />
          <Input
            placeholder="Email"
            className="input-field"
            required
            type="email"
            onChange={handleChange}
            value={values.email}
            name="email"
          />
          <Input
            placeholder="Username"
            className="input-field"
            required
            type="text"
            onChange={handleChange}
            value={values.username}
            name="username"
          />
          <Input
            placeholder="Phone Number"
            className="input-field"
            required
            type="tele"
            onChange={handleChange}
            value={values.phoneNumber}
            name="phoneNumber"
          />
          <Input
            placeholder="Password"
            className="input-field"
            required
            type="password"
            onChange={handleChange}
            value={values.password}
            name="password"
          />
          <Button
            className="btn btn-success"
            style={openAccountBtn}
            onClick={handleSubmit}
          >
            Open Account
          </Button>
        </form>
      </Card>
    </>
  );
}
