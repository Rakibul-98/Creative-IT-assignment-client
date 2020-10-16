import React, { useContext } from 'react';
import './Admin.css';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../../App';
import SideNav from '../../SideNav/SideNav';




const AddAdmin = () => {



    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {


        fetch('http://localhost:9000/addAdmin',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(success =>{
            if (success) {
                alert('Admin added successfully...');
                window.location.reload();
            }
        })


    };

    const [loggedInUser] = useContext(UserContext);

    return (
        <div className=" row">
            <div className="col-md-2 text">
               <SideNav></SideNav>
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