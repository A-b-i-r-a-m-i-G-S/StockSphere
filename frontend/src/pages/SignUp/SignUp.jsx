import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Helper function to handle successful login/signup
  const handleRedirect = () => {
    setTimeout(() => {
      window.location.href = 'https://github.com/A-b-i-r-a-m-i-G-S/StockSphere';
    }, 1000);
  };

  // Toggle between Login and SignUp
  const toggleLogin = () => {
    setLogin(!login);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'https://stocksphere-backend-tskz.onrender.com/signup',
        { email, username, password }
      );
      const { success, message } = data;
      if (success) {
        handleRedirect();
      } else {
        alert(message);
      }
    } catch (error) {
      console.error(error);
    }
    setEmail('');
    setUsername('');
    setPassword('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'https://stocksphere-backend-tskz.onrender.com/login',
        { email, password }
      );
      const { success, message } = data;
      if (success) {
        handleRedirect(); // Redirect after successful login
      } else {
        alert(message);
      }
    } catch (error) {
      console.error(error);
    }
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container">
      <div className="row m-5">
        <div className="col-6 p-5">
          <img src="media/signup.png" alt="" style={{ width: '100%' }} />
        </div>
        <div className="col-6 p-5">
          {login === false ? (
            <>
              <h2>Signup Now</h2>

              <form onSubmit={handleSignUp}>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button className="btn btn-primary mb-5" style={{ width: '100%' }}>
                  Sign Up
                </button>
                <p
                  className="text-primary text-center"
                  onClick={toggleLogin}
                  style={{ cursor: 'pointer' }}
                >
                  Existing User? Login here
                </p>
              </form>
            </>
          ) : (
            <>
              <h2>Login</h2>

              <form onSubmit={handleLogin}>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button className="btn btn-primary mb-5" style={{ width: '100%' }}>
                  Login
                </button>
                <p
                  className="text-primary text-center"
                  onClick={toggleLogin}
                  style={{ cursor: 'pointer' }}
                >
                  New User? Signup here
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
