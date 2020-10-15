import React from 'react';
import { useForm } from "react-hook-form";

const Footer = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    const textBoxStyle={
        width: '100%',
        padding: '10px 20px',
        margin: '8px 0',
        boxSizing: 'border-box'
    }

    const footerStyle={
        textAlign:"center",
        fontSize:'10px',
        color:"gray",
        marginTop:'100px'
    }


    return (
        <div style={{backgroundColor:'#fbd062', marginTop:'200px'}}>
            <div className="row container">
                <div className="col-md-6 d-flex justify-content-center mt-5 ">
                    <div>
                        <h3><strong>Let us handle your <br/> projects, Professionally</strong></h3>
                        <small>With well written codes, we build amazing apps for all <br/> platforms, mobil and web apps for general</small>
                    </div>
                </div>
                <div className="col-md-6 mt-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input style={textBoxStyle} name="email" placeholder="Your email address" ref={register({ required: true })} />
                        <input style={textBoxStyle} name="name" placeholder="Your name / Company's name" ref={register({ required: true })} />
                        <textarea name="message" placeholder="Your message" style={{height:"200px", width:'100%'}}></textarea>
                        
                        <input className="btn btn-dark mt-2 px-5" type="submit" />
                    </form>
                </div>
            </div>
            <footer style={footerStyle}>copyright orange labs {(new Date()).getFullYear()} </footer>
        </div>
    );
};

export default Footer;