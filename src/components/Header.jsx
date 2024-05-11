
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'; 
import '../index.css';

const Header = () => {

  const location = useLocation();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); 

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };
  

  return (
    <>
      <header className="meow">
        <nav className={`navbar navbar-expand-sm bg-black ${isNavbarOpen ? 'show' : ''}`}>
          <div className="container-fluid ">
            <h2>
              <NavLink to="/" className="nav-link lead custom-shadow" aria-current="page" style={{ color: 'rgba(122, 58, 108, 1)' }} onClick={closeNavbar}>s1v4h3r3</NavLink>
            </h2>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNavbar} style={{border: "2px solid purple", padding: "7px 15px"}}>
              <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
            </button>
            <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''} kukka`} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-2 pb-md-2">
                <li className="nav-item dropdown">
                  <NavLink to="/" className={`nav-link ${location.pathname === "/" ? "active text-white" : "text-secondary"} me-lg-5 me-md-5 fs-5`} aria-current="page" onClick={closeNavbar}>Home</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink to="/about" className={`nav-link ${location.pathname === "/about" ? "active text-white" : "text-secondary"} me-lg-5 me-md-5 fs-5`} aria-current="page" onClick={closeNavbar}>About</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink to="/contact" className={`nav-link ${location.pathname === "/contact" ? "active text-white" : "text-secondary"} me-lg-5 me-md-5 fs-5`} aria-current="page" onClick={closeNavbar}>Contact</NavLink>
                </li>
                <li className="nav-item dropdown ">
                  <NavLink to="/login" className={`nav-link ${location.pathname === "/login" ? "active text-white" : "text-secondary"} me-lg-5 me-md-5 fs-5`} aria-current="page" onClick={closeNavbar}>Login</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header;
