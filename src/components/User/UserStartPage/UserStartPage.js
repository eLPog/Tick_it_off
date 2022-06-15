import { useSelector } from 'react-redux';
import styles from './UserStartPage.module.css';

export function UserStartPage() {
  const userData = useSelector((state) => state.authSlice.user);
  const isLogged = useSelector((state) => state.authSlice.isLogged);
  return (
    isLogged ? (
      <div className={styles.userCard}>
        Welcome
        <span className={styles.userEmail}>
          {' '}
          {userData.name}
        </span>
        <div className={styles.userData}>
          <p>
            <strong>Email: </strong>
            {userData.email}
          </p>
          <p>
            <strong>Last Login: </strong>
            {userData.lastLogin}
          </p>
          <p>
            <strong>Registered On: </strong>
            {userData.registerAt}
          </p>
        </div>
      </div>
    )
      : (
        <div>
          <p>
            Please log in.
          </p>
        </div>
      )
  );
}
