import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {

    
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:9000/services')
        .then(res =>res.json())
        .then(data => setServices(data) )
   },[])




    return (
        <div className="container" style={{marginTop:'170px'}}>
            <h2 style={{textAlign:'center',fontWeight:'bolder'}}>We provide awesome <span style={{color:'#76ac57'}}>services</span></h2>
            <div className="row d-flex justify-content-around text-center mt-5 mx-2">
                {
                    services.map(service =>
                        <div style={{border:'1px solid white'}} key={service.id} className="col-md-3 p-3">
                            <Link to="/placeOrder" style={{textDecoration:'none', height:'100%',width:'100%'}}>
                                <img style={{height:'60px'}} src={`data:image/jpeg;base64,${service.image.img}`} alt="" />
                                <h5 style={{color:'black'}}><strong>{service.name}</strong></h5>
                                <p style={{color:'black'}}><small>{service.description}</small></p>
                            </Link>
                        </div>
                    
                    )
                }
            </div>
        </div>
    );
};

export default Services;