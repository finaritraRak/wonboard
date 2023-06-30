import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faPlus, faBlog, faChalkboardTeacher, faImages, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faHome, faPlus, faBlog, faChalkboardTeacher, faImages, faUser);

const Navbar = () => {
    return (
      <main id="main-container">
        
      <div className="bg-success">
        <div className="bg-black-10">
          <div className="content py-3">
        
            <div className="d-lg-none">
              <button type="button" className="btn w-100 btn-alt-secondary d-flex justify-content-between align-items-center"
                data-toggle="className-toggle" data-target="#main-navigation" data-className="d-none">
                Menu
                <i className="fa fa-bars"></i>
              </button>
            </div>

            <div id="main-navigation" className="d-none d-lg-block mt-2 mt-lg-0">
              <ul className="nav-main nav-main-dark nav-main-horizontal nav-main-hover">
                <li className="nav-main-item">
                  <a className="nav-main-link" href="#">
                    <span className="nav-main-link-name active">Menu</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link active" href="#">
                    <span className="nav-main-link-name">Recherche d'emploi</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link active" href="#">
                    <span className="nav-main-link-name">Offres d'emploi</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link active" href="#">
                    <span className="nav-main-link-name">Entreprises</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link active" href="#">
                    <span className="nav-main-link-name">Ressources</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link active" href="#">
                    <span className="nav-main-link-name">À propos de nous</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link active" href="#">
                    <span className="nav-main-link-name">Contact</span>
                  </a>
                </li>
                
              </ul>
            </div>
         
          </div>
        </div>
      </div>
  

      
      <div className="content">
       
        <div className="block block-rounded">
          <div className="block-content block-content-full">
            <div className="py-4 text-center">
              <h1 className="h3 fw-bold mb-2">
              </h1>
              <h2 className="fs-base lh-base fw-medium text-muted mb-0">
                
              </h2>
            </div>
          </div>
        </div>
       
        <div className="block block-rounded">
          <div className="block-content block-content-full">
            <div className="py-4 text-center">
              <h1 className="h3 fw-bold mb-2">
              </h1>
              <h2 className="fs-base lh-base fw-medium text-muted mb-0">
                
              </h2>
            </div>
          </div>
        </div>
   
        <div className="block block-rounded">
          <div className="block-content block-content-full">
            <div className="py-4 text-center">
              <h1 className="h3 fw-bold mb-2">
              </h1>
              <h2 className="fs-base lh-base fw-medium text-muted mb-0">
                
              </h2>
            </div>
          </div>
        </div>
      
        <div className="block block-rounded">
          <div className="block-content block-content-full">
            <div className="py-4 text-center">
              <h1 className="h3 fw-bold mb-2">
              </h1>
              <h2 className="fs-base lh-base fw-medium text-muted mb-0">
                
              </h2>
            </div>
          </div>
        </div>

      </div>
   
    </main>
    

    
      
    )
}

export default Navbar