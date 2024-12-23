import React from 'react'
import propTypes from 'prop-types';
// import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar ${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className={`navbar-brand text-${props.mode==='light'? 'dark':'light'}`} href="#">{props.Title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-light">
              <li className="nav-item">
                <a className={`nav-link text-${props.mode==='light'? 'dark':'light'}`} aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link text-${props.mode==='light'? 'dark':'light'}`} href="#">About</a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
Navbar.propTypes = {
  Title: propTypes.string.isRequired                  //is required makes it required to pass title with <navbar />
}
// Navbar.defaultProps={
//     Title:"Set title"                         //default prop value of "title" will be displayed if no title value will passed with <navbar/>
// }                                                             
