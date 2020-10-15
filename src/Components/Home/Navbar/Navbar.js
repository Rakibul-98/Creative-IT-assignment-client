import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logos/logo.png'





const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg mt-3">
              <img style={{height:'40px'}} src={Logo} alt=""/>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link text-body mr-5" to="/"> <small>Home</small> <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-body mr-5" to="/portfolio"> <small>Our Portfolio</small></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-body mr-5" to="/team"><small>Our Team</small></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-body mr-5" to="/contact"><small>Contact Us</small></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login"><button className="px-4 btn btn-dark">Login</button></Link>
                    </li>
                    </ul>
                </div>
            </nav>
    );
};

export default Navbar;