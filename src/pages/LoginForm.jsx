import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password); 
    // Add your login logic here
    if(email=="nikitarwt@gmail.com" && password=="nikita@12345")
    {
        alert("Login Success");
        navigate('/welcome');  // redirect to welcome page
    }
    else{
        alert("Login Failed");
    }

  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div className="mt-3 text-center">
          <small>
            Don't have an account? <a href="/register">Sign up</a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
