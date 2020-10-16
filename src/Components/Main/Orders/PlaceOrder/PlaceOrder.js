import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../../App';
import SideNav from '../../SideNav/SideNav';
import { useHistory } from 'react-router-dom';





const PlaceOrder = () => {

    const history = useHistory();
    const { from } = { from: { pathname: "/orders" } };

    const [loggedInUser] = useContext(UserContext);

    const [orderInfo, setOrderInfo] = useState({});
    const [photo, setPhoto] = useState(null);


    const handleBlur = e => {
        const newInfo = {...orderInfo};
        newInfo[e.target.name] = e.target.value;
        setOrderInfo(newInfo);
    }

    const handleFileChange = (e) =>{
        const newFile = e.target.files[0];
        setPhoto(newFile)
    }

    const handleSubmit = () =>{
        const formData = new FormData()
        formData.append('photo', photo);
        formData.append('price', orderInfo.price);
        formData.append('details', orderInfo.details);
        formData.append('projectName', orderInfo.projectName);
        formData.append('email', orderInfo.email);
        formData.append('name', orderInfo.name);

        fetch('https://boiling-oasis-63976.herokuapp.com/addAOrder', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                alert('Order placed successfully...');
                history.replace(from)
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div className=" row">
            <div className="col-md-2 text">
               <SideNav></SideNav>
            </div>
            <div className="col-md-10 mt-4">
                <p>Order <span style={{float:'right',marginRight:'50px'}}>{loggedInUser.name} </span></p>
                <div className="input-sec">
                <form onSubmit={handleSubmit}>
                        <input onBlur={handleBlur} className="input-one" name="name" placeholder="Your name / Company's name"  />
                        <br/>
                        <input onBlur={handleBlur} className="input" name="email" placeholder="Your email"  />
                        <br/>
                        <input onBlur={handleBlur} className="input" name="projectName" placeholder="Project name"  />
                        <br/>
                        <input onBlur={handleBlur} className="input-detail" name="details" placeholder="Project Details" />
                        <br/>
                        <input onBlur={handleBlur} className="input-price" name="price" placeholder="Price"  />
                        <input onChange={handleFileChange} className="input-price" type="file" name="icon" id="exampleInputPassword1" />
                        <br/>
                        <button className="btn btn-dark mt-2 px-5 ml-4" type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;