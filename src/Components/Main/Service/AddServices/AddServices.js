import React, { useContext, useState } from 'react';
import './AddServices.css';
import { UserContext } from '../../../../App';
import SideNav from '../../SideNav/SideNav';
import { useHistory } from 'react-router-dom';



const AddServices = () => {

    const [loggedInUser] = useContext(UserContext);

    const history = useHistory();
    const { from } = { from: { pathname: "/" } };

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) =>{
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const handleSubmit = () =>{
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('https://boiling-oasis-63976.herokuapp.com/addAService', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Service added successfully...');
                history.replace(from)
                }
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
                <p>Services list <span style={{float:'right',marginRight:'50px'}}>{loggedInUser.name} </span></p>
                <div className="input-sec">
                    <form onSubmit={handleSubmit}>
                        <div className="row add-service-sec">
                            <div className="col-md-6">
                                <label for="title">Service Title</label>
                                <br/>
                                <input onBlur={handleBlur} style={{width:'90%', marginBottom:'30px'}} name="title" placeholder="Enter Title"  />
                                <br/>
                                <label for="description">Description</label>
                                <br/>
                                <input onBlur={handleBlur} style={{width:'90%', height:'100px'}} name="description" placeholder="Enter designation"  />
                            </div>

                            <div className="col-md-6">
                               <label className="icon-file" for="icon">Icon</label>
                               <br/>
                                <input onChange={handleFileChange} type="file" name="icon" id="exampleInputPassword1"/>
                            </div>
                         </div>
                            <button className="btn btn-success mt-2 mr-4 px-4" style={{float:'right'}} type="submit">Submit</button>
                        </form>
                </div>
            </div>
        </div>
    );
};

export default AddServices;