import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';
import { actionType } from '../reducer';
import { useStateValue } from '../StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionType.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => alert(error.message));
    }
    return (
        <div className='login'>
            <div className="login__logo">
              <img src=''/>
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
}

export default Login;
