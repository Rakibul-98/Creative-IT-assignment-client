import React, { useEffect } from 'react';
import './Service.css'
import { useContext } from 'react';
import { UserContext } from '../../../../App';
import { useState } from 'react';
import SideNav from '../../SideNav/SideNav';

const Service = () => {

   const [loggedInUser] = useContext(UserContext);
   const [serviceList, setServiceList] = useState([]);



   useEffect(()=>{
    fetch('https://boiling-oasis-63976.herokuapp.com/ordersList')
    .then(res =>res.json())
    .then(data => setServiceList(data) )
},[])


    return (
        <div className=" row">
            <div className="col-md-2 text">
               <SideNav></SideNav>
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
                                {
                                    serviceList.map(service =>
                                         <tr>
                                            <td>{service.name} </td>
                                            <td>{service.email} </td>
                                            <td>{service.projectName} </td>
                                            <td>{service.details} </td>
                                            <td>{} </td>
                                         </tr> )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;