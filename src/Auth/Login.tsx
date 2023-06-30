import React from 'react';
import { NavLink } from 'react-router-dom';
function Login() {
  

  return (
    <div id="page-container">
    
   
    <main id="main-container  justify-content-center">
     
    <div className="hero-static d-flex justify-content-center">
        <div className="w-100 justify-content-center">
       
          <div className="bg-body-extra-light align-items-center justify-content-center">
            <div className="content align-items-center  fs-sm">
              <div className="row g-3 justify-content-center block-content">
                <div className="col-md-10 col-lg-8 col-xl-6 py-4 px-4 px-lg-5 block block-rounded block-rounded" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              
                  <div className="text-center">
                    <p className="mb-2">
                      <img src="assets/media/favicons/logo_large.jpg" alt="" width="200px"/>
                    </p>
                    <p className="fw-medium text-muted mb-3">
                      Connectez-vous pour accéder à votre compte et découvrir les dernières offres d'emploi correspondant à votre profil.
                    </p>
                  </div>
                  <form className="js-validation-signin" action="be_pages_auth_all.html" method="POST">
                    <div className="py-3">
                      <div className="mb-4">
                        <input type="text" className="form-control form-control-lg form-control-alt" id="login-username"
                          name="login-username" placeholder="Adresse email"/>
                      </div>
                      <div className="mb-4">
                        <input type="password" className="form-control form-control-lg form-control-alt" id="login-password"
                          name="login-password" placeholder="Mot de passe"/>
                      </div>
                      <div className="mb-4">
                        <div className="d-md-flex align-items-md-center justify-content-md-between">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="login-remember"
                              name="login-remember"/>
                            <label className="form-check-label" >Souvenir de moi</label>
                          </div>
                          <div className="py-2">
                            <a className="fs-sm fw-medium" href="op_auth_reminder2.html">Mot de passe oublié ?</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-lg-6 col-xxl-5">
                        <button type="submit" className="btn w-100 btn-alt-success">
                          <i className="fa fa-fw fa-sign-in-alt me-1 opacity-50"></i> Connectez
                        </button>
                      </div>
                      <div className="col-lg-6 col-xxl-5">
                        <button type="submit" className="btn w-100 btn-alt-primary">
                          <i className="fa fa-fw fa-plus me-1 opacity-50 text-primary"></i> <NavLink to="/aregister">S'inscrire</NavLink>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
         
       </div>
       </div>
       </main>
        </div>
     
   
 
  );
}

export default Login;

