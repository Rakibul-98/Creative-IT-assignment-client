import React from 'react';
import Logo from '../../../../images/logos/logo.png'
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCommentDots, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../../App';





const PlaceOrder = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    const [loggedInUser] = useContext(UserContext);




    return (
        <div className=" row">
            <div className="col-md-2 text">
               <Link to="/"><img className="logo-img" src={Logo} alt=""/></Link>
               <p style={{color:"#32CD32"}}><FontAwesomeIcon icon={faShoppingCart} />   Order</p>
               <Link to="/orders"><p><FontAwesomeIcon icon={faClipboardList} />   Service list</p></Link>
               <Link to="/Review"><p><FontAwesomeIcon icon={faCommentDots} />   Review</p></Link>
               
            </div>
            <div className="col-md-10 mt-4">
                <p>Order <span style={{float:'right',marginRight:'50px'}}>{loggedInUser.name} </span></p>
                <div className="input-sec">
                <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="input-one" name="name" placeholder="Your name / Company's name" ref={register({ required: true })} />
                        <br/>
                        <input className="input" name="email" placeholder="Your email address" ref={register({ required: true })} />
                        <br/>
                        <input className="input" name="title" placeholder="Project name" ref={register({ required: true })} />
                        <br/>
                        <input className="input-detail" type="text" name="message" placeholder="Project Details" ref={register({ required: true })} ></input>
                        <br/>
                        <input className="input-price" type="text" name="price" placeholder="Price" ref={register({ required: true })} />
                        <input className="input-price" type="file" name="file" placeholder="Upload project File" ref={register({ required: true })} />
                        <br/>
                        <input className="btn btn-dark mt-2 px-5 ml-4" type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;