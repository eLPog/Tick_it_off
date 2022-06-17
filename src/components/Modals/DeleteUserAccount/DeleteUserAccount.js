import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import styles from './DeleteUserAccount.module.css';
import { Button } from '../../commons/Button/Button';
import { apiData } from '../../../utils/apiData';
import { authSliceActions } from '../../../store/authSlice';

export function DeleteUserAccount(props) {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.authSlice.user.email);
  const jwt = useSelector((state) => state.authSlice.jwt);
  const [info, setInfo] = useState('');
  const [password, setPassword] = useState('');
  const [showInput, setShowInput] = useState(true);

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const deleteAccount = async () => {
    if (email === 'test@test.com' && password === 'password') {
      setInfo('Sorry, you cant delete a Test Account');
      return;
    }
    const res = await fetch(`${apiData}/user`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password,
      }),
    });

    if (res.status === 400) {
      setInfo('Invalid password');
      return;
    }
    if (res.status !== 200) {
      setInfo('Something went wrong. Please try again.');
      return;
    }
    setShowInput(false);
    setInfo(`Account ${email} has been successfully deleted.`);
    setTimeout(() => {
      dispatch(authSliceActions.setJwt(''));
    }, 3000);
  };

  return (
    <div className={`modal animateElement ${styles.local}`}>
      {showInput ? (
        <>
          <p>
            Are you sure you want to delete your account?
          </p>
          <p>
            Please confirm with password:
          </p>
          <input type="password" onChange={passwordHandler} />
          <div className={styles.actions}>
            <Button text="Delete" type="dangerButton" onClick={deleteAccount} />
            <Button text="Cancel" onClick={props.modalHandler} />
          </div>
        </>
      ) :
        null}
      {info && <p className={styles.info}>{info}</p>}
    </div>
  );
}
