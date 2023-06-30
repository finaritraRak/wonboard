import React, { useState } from "react";

function AdminRegister() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
   
      const data = {
        email,
        password,
      };
  
      fetch("http://localhost:5001/api/admin/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
         
        })
        .catch((error) => {
       
          console.log(error);
        });
    };
  

  return (
    <div id="page-container">
      <main id="main-container" className="justify-content-center">
        <div className="hero-static d-flex justify-content-center">
          <div className="w-100 justify-content-center">
            <div className="bg-body-extra-light align-items-center justify-content-center">
              <div className="content align-items-center fs-sm">
                <div className="row g-3 justify-content-center block-content">
                  <div
                    className="col-md-10 col-lg-8 col-xl-6 py-4 px-4 px-lg-5 block block-rounded block-rounded"
                    style={{
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <form className="js-validation-signin" onSubmit={handleSubmit}>
                      <div className="py-3">
                        <div className="mb-4">
                          <input
                            type="text"
                            className="form-control form-control-lg form-control-alt"
                            id="login-username"
                            name="login-username"
                            placeholder="Adresse email"
                            value={email}
                            onChange={handleEmailChange}
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control form-control-lg form-control-alt"
                            id="login-password"
                            name="login-password"
                            placeholder="Mot de passe"
                            value={password}
                            onChange={handlePasswordChange}
                          />
                        </div>
                        <div className="mb-4">
                          <div className="d-md-flex align-items-md-center justify-content-md-between">
                            <div className="py-2">
                              <a className="fs-sm fw-medium" href="op_auth_reminder2.html">
                                Mot de passe oublié ?
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row justify-content-center">
                        <div className="col-lg-6 col-xxl-5">
                          <button type="submit" className="btn w-100 btn-alt-success">
                            <i className="fa fa-fw fa-sign-in-alt me-1 opacity-50"></i> enregistrer
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

export default AdminRegister;

