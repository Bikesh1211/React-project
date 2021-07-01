import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';

// import { auth,provider } from './firebase';

function Login() {
    const signIn =()=>{
        //signin

        // auth.signInWithPopup(provider).then(result => {console.log(result)}).catch((error)=> alert(error.messege));
    };
    return (
        <div className="login">
            <div className="login_logo"> 
            <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" />
            <h1>facebook</h1>
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
            
        </div>
    );
}

export default Login;
