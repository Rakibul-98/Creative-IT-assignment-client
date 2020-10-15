import React from 'react';
import { Link } from 'react-router-dom';
import mobile from '../../../images/icons/service1.png';
import graphic from '../../../images/icons/service2.png';
import web from '../../../images/icons/service3.png'

const Services = () => {

    const services=[
        {
            id:0,
            name:'Web & Mobile Design',
            description:'We craft exclusive and amazing web UI, using a well drafted UX to fit your product',
            photo: mobile
        },
        {
            id:1,
            name:'Graphic Design',
            description:'Amazing fliers, social media posts and brand logo that would make your brand stand out',
            photo: graphic
        },
        {
            id:2,
            name:'Web Development',
            description:'With well written codes, we build amazing apps for all platforms, mobil and web apps for general',
            photo: web
        },
    ]
    return (
        <div className="container" style={{marginTop:'170px'}}>
            <h2 style={{textAlign:'center',fontWeight:'bolder'}}>We provide awesome <span style={{color:'#76ac57'}}>services</span></h2>
            <div className="row d-flex justify-content-around text-center mt-5">
                {
                    services.map(service =>
                        <div key={service.id} className="col-md-3">
                            <Link to="/placeOrder" style={{textDecoration:'none', height:'100%',width:'100%'}}>
                                {service.photo}
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