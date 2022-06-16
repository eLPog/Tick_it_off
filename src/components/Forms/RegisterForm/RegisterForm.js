import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import styles from './RegisterForm.module.css';
import { Button } from '../../commons/Button/Button';
import { sendLoginData } from '../../../store/sendLoginData';

export function RegisterForm() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.authSlice.isLogged);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [info, setInfo] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);

  /*
  I compare if the passwords match,
  I provide the information with a delay to give the user time to enter the data
   */
  useEffect(() => {
    if (email.includes('@') && name && password
        && password2 && password.length > 4
        && password2.length > 4 && password === password2) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [email, name, password, password2]);
  useEffect(() => {
    const identifier = setTimeout(() => {
      password !== password2
        ? setInfo('Passwords are not the same') : setInfo('');
    }, 1200);
    return () => { clearTimeout(identifier); };
  }, [password, password2]);

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:3001/v1/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          password,
          password2,
        }),
      });
      if (res.status === 404) {
        setInfo('We have some error. Please try again');
        return;
      }
      if (res.status === 409) {
        setInfo('Email already exist');
        return;
      }
      dispatch(sendLoginData({ email, password }));
    } catch (err) {
      setInfo('Unexpected Error');
      console.log(err);
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const password2Handler = (e) => {
    setPassword2(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await fetchData();
  };

  return (
    !isLogged ? (
      <>
        <div className="centered">
          <form className={styles.registerForm} onSubmit={submitForm}>
            <label htmlFor="registerEmail">
              Email
            </label>
            <input type="email" id="registerEmail" required onChange={emailHandler} />
            <label htmlFor="registerName">
              Name
            </label>
            <input type="text" id="registerName" required onChange={nameHandler} />
            <label htmlFor="registerPassword">
              Password
            </label>
            <input type="password" id="registerPassword" required onChange={passwordHandler} />
            <label htmlFor="registerPassword2">
              Repeat password
            </label>
            <input type="password" id="registerPassword2" required onChange={password2Handler} />
            <Button text="Register" disabled={isButtonActive ? '' : 'disabled'} />
          </form>
        </div>
        {info && (
        <div className={`centered ${styles.errorInfo}`}>
          <p>{info}</p>
        </div>
        )}
        <div className={`centered ${styles.info}`}>
          <p>All fields are required and the password must be min. 5 characters long</p>
        </div>

      </>
    ) : <Navigate to="/user" />
  );
}
