import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

// Function
import { Validate } from '../functions';

// Styles 
import styles from "../styles/Login.module.css";

const Login = () => {

    const [Errors, setErrors] = useState({});
    const [touched, setTouched] = useState(false);
    const [data, setData] = useState({
        Name: "",
        Password: ""
    });

    useEffect(() => {
        setErrors(Validate(data));
        console.log(Errors);
    }, [data]);

    const changeHandler = event => {
        setData({...data, [event.target.name]: event.target.value});
    }

    const focusHandler = event => {
        setTouched({...touched, [event.target.name]: true});
    }

    return (
        <div className={styles.Container}>
            <form className={styles.loginForm}>
                <h1>Login</h1>
                <div className={styles.Fields}>
                    <label className={styles.Label}>Name</label>
                    <input type="text" name="Name" value={data.Name} onChange={changeHandler} onFocus={focusHandler} />
                    {touched.Name && Errors.Name && <span className={styles.errorsText}>{Errors.Name}</span>}
                    <label className={styles.Label}>Password</label>
                    <input type="password" name="Password" value={data.Password} onChange={changeHandler} onFocus={focusHandler} />
                    {touched.Password && Errors.Password && <span className={styles.errorsText}>{Errors.Password}</span>}
                </div>
                <div className={styles.Buttons}>
                    <Link to="/signup">
                        <span>SignUp</span>
                    </Link>
                    <button className={styles.loginButton}>Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;