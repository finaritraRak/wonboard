import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
      <footer className="blog-footer bg-dark text-light mt-2">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h5 className='text-light'>À propos de Raklabs</h5>
        <p className='text-light'>Raklabs est un blog dédié à fournir les dernières informations et tendances en matière de technologie, développement et innovation. Restez à jour avec nos articles informatifs et soyez en avance dans le monde numérique.</p>
      </div>
      <div className="col-md-3">
        <h5 className='text-light'>Catégories</h5>
        <ul className="list-unstyled">
          <li><a href="#">Technologie</a></li>
          <li><a href="#">Développement</a></li>
          <li><a href="#">Innovation</a></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h5 className='text-light'>Suivez-nous</h5>
        <ul className="list-unstyled">
          <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
          <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
          <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-center">
        <p className='text-light'>&copy; {new Date().getFullYear()} Raklabs - Tous droits réservés</p>
      </div>
    </div>
  </div>
</footer>

    

      

    )
}

export default Footer