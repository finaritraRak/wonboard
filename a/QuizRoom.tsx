import React from 'react';
import { NavLink } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBrain, faDatabase, faCode, faMobileAlt, faCloud, faNetworkWired, faShieldAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faCodeBranch, faRobot } from '@fortawesome/free-solid-svg-icons';

library.add(faBrain, faDatabase, faCode, faMobileAlt, faCloud, faNetworkWired, faShieldAlt, faUsers);

const QuizCategories = () => {
  return (
    <div className="container">
      <h1>Quiz Categories</h1>
      <div className="row mb-3">
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <FontAwesomeIcon icon={faBrain} /> Intelligence Artificielle
              </h5>
              <p className="card-text">Description de la catégorie d'Intelligence Artificielle.</p>
              
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <FontAwesomeIcon icon={faDatabase} /> Base de Données
              </h5>
              <p className="card-text">Description de la catégorie de Base de Données.</p>
             
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <FontAwesomeIcon icon={faCode} /> Développement Web
              </h5>
              <p className="card-text">Description de la catégorie de Développement Web.</p>
             
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <FontAwesomeIcon icon={faMobileAlt} /> Développement Mobile
              </h5>
              <p className="card-text">Description de la catégorie de Développement Mobile.</p>
             
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <FontAwesomeIcon icon={faCloud} /> AWS Cloud Computing
              </h5>
              <p className="card-text">Description de la catégorie d'AWS Cloud Computing.</p>
             
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
        <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <FontAwesomeIcon icon={faNetworkWired} /> Réseau
              </h5>
              <p className="card-text">Description de la catégorie de Réseau.</p>
             
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <FontAwesomeIcon icon={faShieldAlt} /> Sécurité Informatique
              </h5>
              <p className="card-text">Description de la catégorie de Sécurité Informatique.</p>
              
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <FontAwesomeIcon icon={faUsers} /> Télécommunication
              </h5>
              <p className="card-text">Description de la catégorie de Télécommunication.</p>
             
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">
        <FontAwesomeIcon icon={faChartBar} /> Science des données
      </h5>
      <p className="card-text">Description de la catégorie de Science des données.</p>
      
    </div>
  </div>
</div>
<div className="col-sm-6 col-md-4">
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">
        <FontAwesomeIcon icon={faCodeBranch} /> DevOps
      </h5>
      <p className="card-text">Description de la catégorie de DevOps.</p>
      
    </div>
  </div>
</div>
<div className="col-sm-6 col-md-4">
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">
        <FontAwesomeIcon icon={faRobot} /> Robotique
      </h5>
      <p className="card-text">Description de la catégorie de Robotique.</p>
      
    </div>
  </div>
</div>

        {/* Ajoutez ici d'autres catégories de quiz */}
      </div>
    </div>
  );
}

export default QuizCategories;
