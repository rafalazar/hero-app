import React from 'react';
import { useHistory } from 'react-router-dom';

const LoginScreen = () => {

    const history = useHistory();

    const handleLogin = () => {
        history.replace('/'); 
        //Replace reemplaza la historia y no permite regresar hacia atrás.
        // history.push('/');
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>

            <hr/>

            <button 
                className="btn btn-primary"
                onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}

export default LoginScreen;
