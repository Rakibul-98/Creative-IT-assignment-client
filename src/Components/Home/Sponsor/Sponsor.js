import React from 'react';
import Air from '../../../images/logos/airbnb.png';
import Google from '../../../images/logos/google.png';
import Netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import Uber from '../../../images/logos/uber.png';

const Sponsor = () => {


    const imgStyle ={
        height:'40px',
        margin:'0 25px'
    }

    return (
        <div style={{marginTop:'100px'}} className="d-flex justify-content-center">
            <img style={imgStyle} src={slack} alt=""/>
            <img style={imgStyle} src={Google} alt=""/>
            <img style={imgStyle} src={Uber} alt=""/>
            <img style={imgStyle} src={Netflix} alt=""/>
            <img style={imgStyle} src={Air} alt=""/>
         </div>
    );
};

export default Sponsor;