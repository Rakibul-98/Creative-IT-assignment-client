import React from 'react';
import './Header.css'
import Navbar from '../Navbar/Navbar';
import HeaderImg from '../../../images/logos/Frame.png';
import { Link } from 'react-router-dom';


const Header = () => {

    


    return (
        <div className="header">
            <div className="container">
                <Navbar></Navbar>
                <div className="container row mt-4">
                    <div className="col-md-5 d-flex align-items-center">
                        <div>
                            <h1>Let's Grow Your <br/> Brand To The <br/> Next Level</h1>
                            <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam exercitationem quas doloribus quibusdam expedita veniam, placeat asperiores aperiam suscipit dolorum.</small>
                            <br/>
                            <Link to="/placeOrder"><button type="button" className="btn btn-dark mt-4 px-5">HIRE US</button></Link>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <img className="img-fluid" src={HeaderImg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;