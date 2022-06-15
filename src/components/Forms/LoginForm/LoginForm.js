import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import styles from './LoginForm.module.css';
import { authSliceActions } from '../../../store/authSlice';

export function LoginForm() {
  const stan = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
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
    dispatch(authSliceActions.loginUser({
      email, password,
    }));
  };

  return (
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
        <button>Login</button>
      </form>
    </div>
  );
}
