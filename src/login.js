import React from 'react';
import { style } from "./style";

export const Login = () => {
    return (
        <div style={{ backgroundColor: 'dimgray', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100%' }}>
            <form style={style.formHandler}>
                <h3 style={{ textAlign: 'center', marginBottom: '30px' }}>
                    Login
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    <input style={inputStyle}
                        type="email"
                        placeholder="Email or Phone Number"
                        name="email"
                        required />

                    <input style={inputStyle}
                        type="password"
                        placeholder="Password"
                        name="password"
                        required />

                    <button style={buttonStyle}>
                        Log In
                    </button>

                    <span style={{ textAlign: 'center', marginBottom: '20px' }}>
                        Don't have an account? <a href="#" style={style.signUpStyle}>Sign Up</a>
                    </span>
                </div>
            </form>
        </div>
    )
}

const buttonStyle = {
    backgroundColor: "gray",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    margin: "15px 0px 25px 0px",
    cursor: "pointer"
}

const inputStyle = {
    border: '1px solid',
    borderRadius: '5px',
    margin: "10px 0px",
    padding: '10px',
    width: '100%'
}

export default Login;
