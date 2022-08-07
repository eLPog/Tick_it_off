import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './EditUserDataModal.module.css';
import { Button } from '../../commons/Button/Button';
import { apiData } from '../../../utils/apiData';
import { authSliceActions } from '../../../store/authSlice';

export function EditUserDataModal(props) {
  const dispatch = useDispatch();
  const jwt = useSelector((state) => state.authSlice.jwt);
  const userData = useSelector((state) => state.authSlice.user);
  const [email, setEmail] = useState(userData.email);
  const [name, setName] = useState(userData.name);
  const [password, setPassword] = useState('');
  const [info, setInfo] = useState('');

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setInfo('Invalid email format');
      return;
    }
    if (userData.email === 'test@test.com') {
      setInfo('You cant edit a Test Account.');
      return;
    }
    if (name.trim().length < 1 || email.trim().length < 1) {
      setInfo('Provide new values');
      return;
    }
    try {
      const res = await fetch(`${apiData}/user`, {
        method: 'PATCH',
        headers: {
          authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password,
          name,
          email,
        }),
      });
      if (res.status === 500) {
        setInfo('Unexpected server error. Please try again.');
        return;
      }
      const data = await res.json();
      dispatch(authSliceActions.setUserData({
        name: data.userDataToFront.name,
        email: data.userDataToFront.email,
        lastLogin: userData.lastLogin,
        registerAt: userData.registerAt,
        userID: userData.userID,
      }));
      if (!data.newToken) {
        props.showModalHandler();
      } else {
        setInfo('Please log in with new password');
        setTimeout(() => {
          dispatch(authSliceActions.setJwt(''));
        }, 2000);
        setTimeout(() => {
          props.showModalHandler();
        }, 2000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`modal animateElement ${styles.local}`}>
      <form className={`${styles.editForm} animateElement`} onSubmit={submitForm}>
        <label htmlFor="editEmail">
          Email
        </label>
        <input type="email" id="editEmail" required value={email} onChange={emailHandler} />
        <label htmlFor="editName">
          Name
        </label>
        <input type="text" id="editName" required value={name} onChange={nameHandler} />
        <label htmlFor="editPassword">
          Set new password
        </label>
        <input type="text" id="editPassword" onChange={passwordHandler} />
        <div className={styles.actions}>
          <Button text="Save" />
          <Button text="Cancel" onClick={props.showModalHandler} />
        </div>
      </form>
      {info && <p className={styles.info}>{info}</p>}
    </div>
  );
}
