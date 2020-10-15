import { faClipboardList, faCommentDots, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Logo from '../../../images/logos/logo.png';
import './Review.css'




const Review = () => {

    const [loggedInUser] = useContext(UserContext);

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className=" row">
            <div className="col-md-2 text">
               <Link to="/"><img className="logo-img" src={Logo} alt=""/></Link>
               <Link to="/placeOrder"><p><FontAwesomeIcon icon={faShoppingCart} />   Order</p></Link>
               <Link to="/orders"><p><FontAwesomeIcon icon={faClipboardList} />   Service list</p></Link>
               <p style={{color:"#32CD32"}}><FontAwesomeIcon icon={faCommentDots} />   Review</p>
            </div>
            <div className="col-md-10 mt-4">
                <p>Order <span style={{float:'right',marginRight:'50px'}}>{loggedInUser.name} </span></p>
                <div className="input-sec">
                <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="input-one" name="name" placeholder="Your name" ref={register({ required: true })} />
                        <br/>
                        <input className="input" name="title" placeholder="Company's name, Designation" ref={register({ required: true })} />
                        <br/>
                        <input className={"input-detail"} type="text" name="message" placeholder="Description" ref={register({ required: true })}></input>
                        <br/>
                        <input className="btn btn-dark mt-2 px-5 ml-4" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;