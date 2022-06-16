import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import styles from './RegisterForm.module.css';
import { Button } from '../../commons/Button/Button';
import { sendLoginData } from '../../../store/sendLoginData';
import { authSliceActions } from '../../../store/authSlice';

export function RegisterForm() {
  const dispatch = useDispatch();
  const errorNotification = useSelector((state) => state.authSlice.notification);
  const isLogged = useSelector((state) => state.authSlice.isLogged);
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();

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
      if (!res.ok) {
        dispatch(authSliceActions.setNotification('We have some error. Please try again'));
      }
      dispatch(authSliceActions.setNotification(''));
      dispatch(sendLoginData({ email, password }));
    } catch (err) {
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
            <Button text="Register" />
          </form>
        </div>
        <div className="centered">
          <p>{errorNotification}</p>
        </div>
      </>
    ) : <Navigate to="/user" />
  );
}
