import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './main.min.css';

function App() {
  return (
    <div className="row">
      <div className="col">
        <dic className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        </dic>
      </div>
      <div className="col">
      <div class="page-header bg-default">
      <div class="page-header-image" style="background-image: url('../assets/img/ill/register_bg.png');"></div>
      <div class="container" id="container">
        <div class="form-container sign-up-container">
          <form action="javascript:;">
            <h2>Create Account</h2>
            <div class="social-container">
              <button type="button" class="btn btn-facebook btn-sm">
                <span class="btn-inner--icon"><i class="fab fa-facebook"></i></span>
              </button>
              <button type="button" class="btn-instagram btn btn-sm">
                <span class="btn-inner--icon"><i class="fab fa-instagram"></i></span>
              </button>
              <button type="button" class="btn btn-twitter btn-sm">
                <span class="btn-inner--icon"><i class="fab fa-twitter"></i></span>
              </button>
            </div>
            <span class="text-default mb-4">or use your email for registration</span>
            <div class="form-group mb-3">
              <div class="input-group input-group-alternative">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="ni ni-circle-08"></i></span>
                </div>
                <input class="form-control" placeholder="Name" type="text"></input>
              </div>
            </div>
            <div class="form-group mb-3">
              <div class="input-group input-group-alternative">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                </div>
                <input class="form-control" placeholder="Email" type="email"></input>
              </div>
            </div>
            <div class="form-group">
              <div class="input-group input-group-alternative">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                </div>
                <input class="form-control" placeholder="Password" type="password"></input>
              </div>
            </div>
            <button class="btn btn-primary">Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="#" role="form">
            <h2>Sign in</h2>
            <div class="social-container">
              <button type="button" class="btn btn-facebook btn-sm">
                <span class="btn-inner--icon"><i class="fab fa-facebook"></i></span>
              </button>
              <button type="button" class="btn-instagram btn btn-sm">
                <span class="btn-inner--icon"><i class="fab fa-instagram"></i></span>
              </button>
              <button type="button" class="btn btn-twitter btn-sm">
                <span class="btn-inner--icon"><i class="fab fa-twitter"></i></span>
              </button>
            </div>
            <span class="text-default mb-4">or use your account</span>
            <div class="form-group mb-3">
              <div class="input-group input-group-alternative">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                </div>
                <input class="form-control" placeholder="Email" type="email"></input>
              </div>
            </div>
            <div class="form-group">
              <div class="input-group input-group-alternative">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                </div>
                <input class="form-control" placeholder="Password" type="password"></input>
              </div>
            </div>
            <a href="javascript:;">Forgot your password?</a>
            <button class="btn btn-primary mt-3">Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1 class="text-white">Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button class="btn btn-neutral btn-sm" id="signIn">Sign In</button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1 class="text-white">Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button class="btn btn-neutral btn-sm" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    
    </div>
  );
}

export default App;
