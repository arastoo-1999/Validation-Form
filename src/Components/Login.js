import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import Notify from '../Toast';
import { ToastContainer } from 'react-toastify';

// Function
import { Validate } from '../functions';

// Styles 
import styles from "../styles/Login.module.css";

const Login = () => {

    const [error, setErrors] = useState({});
    const [touched, setTouched] = useState(false);
    const [data, setData] = useState({
        Name: "",
        Password: ""
    });

    useEffect(() => {
        setErrors(Validate(data));
        console.log(error);
    }, [data]);

    const changeHandler = event => {
        setData({...data, [event.target.name]: event.target.value});
    }

    const focusHandler = event => {
        setTouched({...touched, [event.target.name]: true});
    }

    const submitHandler = event => {
        event.preventDefault();
        if(!error.Name && !error.Password) {
        Notify("Success Login.", "success");
        } 
        else {
        Notify("Invalid data!", "error");
            setTouched({
                Name: true,
                Email: true,
                Password: true,
                ConfirmPassword: true,
                IsAccepted: true
            });
        }
    }

    return (
        <div className={styles.Container}>
            <form onSubmit={submitHandler} className={styles.loginForm}>
                <h1>Login</h1>
                <div className={styles.Fields}>
                    <label className={styles.Label}>Username</label>
                    <input type="text" name="Name" value={data.Name} onChange={changeHandler} onFocus={focusHandler} />
                    {touched.Name && error.Name && <span className={styles.errorsText}>{error.Name}</span>}
                    <label className={styles.Label}>Password</label>
                    <input type="password" name="Password" value={data.Password} onChange={changeHandler} onFocus={focusHandler} />
                    {touched.Password && error.Password && <span className={styles.errorsText}>{error.Password}</span>}
                </div>
                <div className={styles.Buttons}>
                    <Link to="/signup">
                        <span>SignUp</span>
                    </Link>
                    <button className={styles.loginButton}>Login</button>
                </div>
                <ToastContainer />
            </form>
        </div>
    );
};

export default Login;