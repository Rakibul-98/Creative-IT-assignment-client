import { faListAlt, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import Logo from '../../../../images/logos/logo.png';
import './Admin.css'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';




const AddAdmin = () => {


    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    const [loggedInUser] = useContext(UserContext);

    return (
        <div className=" row">
            <div className="col-md-2 text">
               <Link to="/"><img className="logo-img" src={Logo} alt=""/></Link>
               <Link to="/service"><p><FontAwesomeIcon icon={faListAlt} />   Service list</p></Link>
               <Link to="/addServices"><p><FontAwesomeIcon icon={faPlus} />   Add service</p></Link>
               <p style={{color:"#32CD32"}}><FontAwesomeIcon icon={faUserPlus} />   Make admin</p>
            </div>

            <div className="col-md-10 mt-4">
                <p>Services list <span style={{float:'right',marginRight:'50px'}}>{loggedInUser.name} </span></p>
                <div className="input-sec">
                   <div className="admin-sec">
                    <form onSubmit={handleSubmit(onSubmit)}>
                            <label for="email">Email</label>
                            <br/>
                            <input style={{height:'37px',width:'45%'}} name="email" placeholder="jon@gmail.com" ref={register({ required: true })} />
                            {errors.email && <span>Email is required</span>}
                            
                            <input className="btn btn-success ml-2 px-4 mb-1" type="submit" />
                        </form>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;