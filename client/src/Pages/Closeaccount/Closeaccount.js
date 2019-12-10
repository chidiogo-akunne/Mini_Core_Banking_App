import React, { useState, useEffect } from "react";
import axios from "axios";
import "../OpenAccount/openaccount.css";

import Card from "../../Components/Cards/Card";
import Input from "../../Components/Inputs/Input";
import Button from "../../Components/Buttons/Buttons";

import "./CloseAccount.css";

export default function Closeaccount() {
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

  const [accounts, setAccounts] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/admin/allaccounts",
      headers: {
        authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setAccounts(response.data.payload);
      })
      .catch(err => {});
  }, []);

  console.log(accounts);

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

  function closeAccountHandler(e) {
    e.preventDefault();
    let id = e.target.href.split("/").reverse()[0];

    axios({
      method: "PATCH",
      url: `http://localhost:5000/admin/closeaccount`,
      data: { accountID: id },
      headers: {
        authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setResponse(response.data.data.message);
      })
      .catch(err => {
        setResponse(err.response.data.message);
      });
  }

  return (
    <>
      <Card Cardstyle={parentCardStyle}>
        <p>{response}</p>
        <h4 className="card-heading">Close Account</h4>

        {accounts.map(item =>
          !item.deletedAt ? (
            <div key={item._id} className="single-account">
              <p>{item.accountName}</p>
              <p>Account Open</p>
              <a href={item._id} onClick={closeAccountHandler}>
                Close Account
              </a>
            </div>
          ) : (
            <div key={item._id} className="single-account">
              <p>{item.accountName}</p>
              <p>Account Closed</p>
            </div>
          )
        )}
      </Card>
    </>
  );
}
