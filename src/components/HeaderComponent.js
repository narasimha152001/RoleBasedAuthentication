import React, { Component } from 'react'
import './Footer.css';
import favicon from '../images/favicon.png';

class HeaderComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  render() {
    return (
      <div>
        <header className="header">
          <nav className="navbar navbar-expand-sm navbar-light bg-primary fixed-top">
            <div className="container-fluid">
              <div className="img-rounded ">
                {/* <img src="assets/favicon.png" height="64" width="58" alt='bpcl'/> */}
                <img src={favicon} style={{ width: 58, height: 61 }} alt="React Logo" />
              </div>
              <div className="text-row ps-1 ">
                <h6 className="text-white" style={{ fontstyle: "italic" }}><strong>Bharath Petrolium Corporation Limited</strong></h6>
                <h6 className="text-white" style={{ fontstyle: "italic" }}><strong>QR Code Based Track & Trace System For Lubes BU</strong></h6>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-5">
                  <li className="nav-item ps-5">
                    <a className="nav-link active pl-5 ml-5" aria-current="page" style={{ color: "white", fontweight: "bold", fontsize: "large" }}
                      href="google.com"><h5><strong>Home</strong></h5></a>
                  </li>
                  <li className="nav-item ps-1">
                    <a className="nav-link" style={{ color: "white", fontweight: "bold", fontsize: "large" }} href="google.com"><h5><strong>About</strong></h5></a>
                  </li>
                  <li className="nav-item ps-1">
                    <a className="nav-link" style={{ color: "white", fontweight: "bold", fontsize: "large" }} href="google.com"><h5><strong>Contact</strong></h5></a>
                  </li>
                  <li className="nav-item ps-1">
                    <a className="nav-link" style={{ color: "white", fontweight: "bold", fontsize: "large" }} href="google.com"><h5><strong>Cart</strong></h5></a>
                  </li>
                  <li className="nav-item ps-1">
                    <a className="nav-link mr-5" style={{ color: "white", fontweight: "bold", fontsize: "large" }} href="google.com"><h5><strong>Products</strong></h5></a>
                  </li>
                </ul>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}

export default HeaderComponent
