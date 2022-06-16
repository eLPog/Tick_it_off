import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import styles from './LoginForm.module.css';
import { sendLoginData } from '../../../store/sendLoginData';
import { Button } from '../../commons/Button/Button';

export function LoginForm() {
  const dispatch = useDispatch();
  const errorNotification = useSelector((state) => state.authSlice.notification);
  const isLogged = useSelector((state) => state.authSlice.isLogged);
  // I use local state for storing variables with email and password.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const formSend = (e) => {
    e.preventDefault();
    // I call thunk function to can send data to backend async
    dispatch(sendLoginData({ email, password }));
  };
  return (

    !isLogged ? (
      <>
        <div className="centered">
          <form className={styles.loginForm} onSubmit={formSend}>
            <label htmlFor="loginEmail">
              Email
            </label>
            <input type="email" id="loginEmail" onChange={emailHandler} required />
            <label htmlFor="loginPassword">
              Password
            </label>
            <input type="password" id="loginPassword" onChange={passwordHandler} required />
            <Button text="Login" />
          </form>
        </div>
        <div className="centered">
          <p>{errorNotification}</p>
        </div>
      </>
    ) : <Navigate to="/user" />

  );
}
