import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Logo from '../../../../images/logos/logo.png';
import './Service.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../../App';

const Service = () => {

   const [loggedInUser] = useContext(UserContext);


    return (
        <div className=" row">
            <div className="col-md-2 text">
               <Link to="/"><img className="logo-img" src={Logo} alt=""/></Link>
               <p style={{color:"#32CD32"}}><FontAwesomeIcon icon={faListAlt} />   Service list</p>
               <Link to="/addServices"><p><FontAwesomeIcon icon={faPlus} />   Add service</p></Link>
               <Link to="/addAdmin"><p><FontAwesomeIcon icon={faUserPlus} />   Make admin</p></Link>
            </div>

            <div className="col-md-10 mt-4">
                <p>Services list <span style={{float:'right',marginRight:'50px'}}>{loggedInUser.name} </span></p>
                <div className="input-sec">
                    <div className="table-sec">
                        <table class="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Project Details</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;