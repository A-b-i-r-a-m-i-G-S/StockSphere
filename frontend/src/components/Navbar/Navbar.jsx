import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light bg-body-tertiary border-bottom navbar-fixed-top">
      <div class="container p-1">
        <a class="navbar-brand" href="#">
          <img src="media/logo.svg" alt="logo" style={{width: "25%"}}/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navbar-right nav navbar-nav" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Signup</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Support</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar