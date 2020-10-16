import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import Logo from '../../images/logos/logo.png'
import GoogleLogo from '../../images/logos/google (2).png';
import './Login.css'



firebase.initializeApp(firebaseConfig);




const Login = () => {

    const [user, setUser] = useState({
        isSignedIn:false,
        name:'',
        email:'',
        photo:''
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(res=>{
            const {displayName, email, photoURL} = res.user;
            const signedInUser ={
                isSignedIn:true,
                name:displayName,
                email:email,
                photo:photoURL
            }
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            storeAuthToken();
            history.replace(from);
        })
        .catch(err=>{
            console.log(err)
            console.log(err.message)
        })
    }

    const storeAuthToken = () =>{
        firebase.auth().currentUser.getIdToken(true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken);
          })
          .catch(function(error) {

          });
    }


    const boxStyle={
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        height:'300px',
        width: '400px',
        marginTop:'50px',
        border:'1px solid black',
        borderRadius:'3px'
    }

    const buttonStyle={
        marginTop:'10px',
        marginLeft:'23px',
        border:'1px solid grey',
        backgroundColor: 'white',
        borderRadius: '20px',
        width: '350px',
        padding:'5px'
    }

    return (
        <div>
            <Link to="/"><img className="login-logo" src={Logo} alt=""/></Link>
            <div style={boxStyle}>
                <h3 style={{textAlign:'center',marginTop:'80px', fontWeight:'bold'}}>Login with</h3>
                <button onClick={handleSignIn} style={buttonStyle}><img style={{height:'25px',padding:'0 0 3px',marginRight:'60px'}} src={GoogleLogo} alt=""/> <span style={{marginRight:'90px'}}>Continue With Google</span> </button>
                <p style={{textAlign:'center',marginTop:'10px'}}><small>Don't Have an account?<Link to="/login">Create an account</Link></small></p>
            </div>
        </div>
    );
};

export default Login;