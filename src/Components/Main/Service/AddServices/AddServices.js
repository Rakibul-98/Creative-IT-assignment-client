import { faListAlt, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import Logo from '../../../../images/logos/logo.png'
import { useForm } from "react-hook-form";
import './AddServices.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';



const AddServices = () => {

    const [loggedInUser] = useContext(UserContext);

    const [info, setInfo] = useState({});
    const [file, setFile] = useState({});
    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) =>{
        const newFile = e.target.files[0];
        setFile(newFile)
    }


    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className=" row">
            <div className="col-md-2 text">
               <Link to="/"><img className="logo-img" src={Logo} alt=""/></Link>
               <Link to="/service"><p><FontAwesomeIcon icon={faListAlt} />   Service list</p></Link>
               <p style={{color:"#32CD32"}}><FontAwesomeIcon icon={faPlus} />   Add service</p>
               <Link to="/addAdmin"><p><FontAwesomeIcon icon={faUserPlus} />   Make admin</p></Link>
            </div>
            <div className="col-md-10 mt-4">
                <p>Services list <span style={{float:'right',marginRight:'50px'}}>{loggedInUser.name} </span></p>
                <div className="input-sec">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row add-service-sec">
                            <div className="col-md-6">
                            <label for="title">Service Title</label>
                                <br/>
                                <input onBlur={handleBlur} style={{width:'90%', marginBottom:'30px'}} name="title" placeholder="Enter Title" ref={register({ required: true })} />
                                {errors.name && <span>Service title is required</span>}
                                <br/>
                                <label for="description">Description</label>
                                <br/>
                                <input onBlur={handleBlur} style={{width:'90%', height:'100px'}} name="description" placeholder="Enter designation" ref={register({ required: true })} />
                                {errors.description && <span>Description is required</span>}
                            </div>

                            <div className="col-md-6">
                               <label className="icon-file" for="icon">Icon</label>
                               <br/>
                                <input onChange={handleFileChange} type="file" name="icon" ref={register({ required: true })}/>
                                {errors.icon && <span>Icon is required</span>}
                            </div>
                        </div>
                            
                            <input className="btn btn-success mt-2 mr-4 px-4" style={{float:'right'}} type="submit" />
                        </form>
                </div>
            </div>
        </div>
    );
};

export default AddServices;