import React from 'react';
import Link from "next/link";
import Image from "next/image";
import logo from "./../public/images/logo_bopha.png";
import arrow from "./../public/images/icons/arrow-icon.svg";



export default function Footer() {
  return (
    <footer id="footer">
  <div className="footer-img">
    <Image src={logo} alt="logo" width="100" height="100" />
  </div>
  <div className="container">
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">
            Accueil
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/admin">
            Administration
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
    <Link target="_blank" href="/galerie">
      <button
        type="button"
        className="button btn btn-dark"
      >
        Voir la Galerie
        <Image src={arrow} alt="flèche" className="arrow" />
      </button>
    </Link>
  </div>
</footer>

  )
}


