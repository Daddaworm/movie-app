import React from "react";
import { useState } from 'react'
import './SignupLogin.css'
import Errors from "./Errors";


const Login = ({ handleSignupLogin, errors }) => {
    const [state, setState] = useState({});

    const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    let config = {
                method: "POST",
                headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
        body: JSON.stringify(state),
    };

    fetch("/login", config)
        .then((res) => res.json())
        .then((data) => {
            console.log(data, 'login data')
            handleSignupLogin(data)
        });
    };

    return (
    <div className="signup__login">
        <br />
        <form onSubmit={handleSubmit}>
            <fieldset >
                <legend>Login</legend><br />
                <label>Username:<br />
                <input onChange={onChange} type="text" name="username" /></label><br />
                <label>Password:<br />
                <input onChange={onChange} type="password" name="password" /></label><br />
                <br />
                <input type="submit"></input>
            </fieldset>
        </form>
        <Errors errors={errors} />
    </div>
    );
};

export default Login;
