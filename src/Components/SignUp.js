import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Notify from '../Toast.js';

// Styles
import styles from "../styles/SignUp.module.css";

import { Validate } from '../functions';

import { Link } from "react-router-dom";

const SignUp = () => {

    const [error, setError] = useState({});
    const [touched, setTouched] = useState(false);
    const [data, setData] = useState({
        Name: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
        IsAccepted: false
    });

    const changeHandler = event => {
        if(event.target.name === "IsAccepted") {
            setData({...data, [event.target.name]: event.target.checked})
        } else {
            setData({...data, [event.target.name]: event.target.value});
        }

        console.log(data)
    }

    const focusHandler = event => {
        setTouched({...touched, [event.target.name]: true});
    }

    useEffect(() => {
        setError(Validate(data));
        console.log(error);
    }, [data])

    const submitHandler = event => {
        event.preventDefault();
        if(!Object.keys(error).length) {
            console.log(data);
        Notify("You Signed in successfully.", "success");
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
            <form onSubmit={submitHandler} className={styles.signUpFrom}>
                <h1>SignUp</h1>
                <div className={styles.Fields}>
                    <label className={styles.Label}>Name</label>
                    <input type="text" name="Name" value={data.Name} onChange={changeHandler} onFocus={focusHandler} />
                    {error.Name && touched.Name && <span className={styles.ErrorsText}>{error.Name}</span> }
                </div>
                <div className={styles.Fields}>
                    <label className={styles.Label}>Email</label>
                    <input type="text" name="Email" value={data.Email} onChange={changeHandler} onFocus={focusHandler} />
                    {error.Email && touched.Email && <span className={styles.ErrorsText}>{error.Email}</span>}
                </div>
                <div className={styles.Fields}>
                    <label className={styles.Label}>Password</label>
                    <input type="password" name="Password" value={data.Password} onChange={changeHandler} onFocus={focusHandler} />
                    {error.Password && touched.Password && <span className={styles.ErrorsText}>{error.Password}</span>}
                </div>
                <div className={styles.Fields}>
                    <label className={styles.Label}>ConfirmPassword</label>
                    <input type="password" name="ConfirmPassword" value={data.ConfirmPassword} onChange={changeHandler} onFocus={focusHandler} />
                    {error.ConfirmPassword && touched.ConfirmPassword && <span className={styles.ErrorsText}>{error.ConfirmPassword}</span>}
                </div>
                <div className={styles.Privacy}>
                    <label className={styles.Label}>I accept terms of privacy policy</label>
                    <input type="checkbox" name="IsAccepted" value={data.IsAccepted} onChange={changeHandler} onFocus={focusHandler} />
                </div>
                {error.IsAccepted && <span className={styles.ErrorsText}>{error.IsAccepted}</span>}
                <div className={styles.Buttons}>
                    <Link to="/login">
                        <span>Login</span>
                    </Link>
                    <button>SignUp</button>
                </div>
                <ToastContainer />
            </form>
        </div>
    );
};

export default SignUp;