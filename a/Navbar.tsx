import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faPlus, faBlog, faChalkboardTeacher, faImages, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faHome, faPlus, faBlog, faChalkboardTeacher, faImages, faUser);

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink to="/" className="navbar-brand">Lab</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                <FontAwesomeIcon className='white-icon' icon={faHome} /> Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="createDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <FontAwesomeIcon icon={faPlus} /> Create
              </a>
              <ul className="dropdown-menu" aria-labelledby="createDropdown">
                <li><NavLink to="/create" className="dropdown-item">Create</NavLink></li>
                <li><NavLink to="/createImage" className="dropdown-item">Create Image</NavLink></li>
                <li><NavLink to="/newformation" className="dropdown-item">Create Formation</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink to="/blogs/:id" className="nav-link">
                <FontAwesomeIcon icon={faBlog} /> Blog Details
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/formations" className="nav-link">
                <FontAwesomeIcon icon={faChalkboardTeacher} /> Formations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/quizroom" className="nav-link">
                <FontAwesomeIcon icon={faChalkboardTeacher} /> Quiz
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/gallery" className="nav-link">
                <FontAwesomeIcon icon={faImages} /> Gallery
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <FontAwesomeIcon icon={faUser} /> Profile
            </a>
            <ul className="dropdown-menu" aria-labelledby="profileDropdown">
              <li><NavLink to="/login" className="dropdown-item">Login</NavLink></li>
              <li><NavLink to="/register" className="dropdown-item">Register</NavLink></li>
            </ul>
          </li>
        </div>
      </div>
    </nav>
    

    
      
    )
}

export default Navbar