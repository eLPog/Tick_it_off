import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Button } from '../../commons/Button/Button';
import styles from './UserStartPage.module.css';
import { Backdrop } from '../../Modals/Backdrop/Backdrop';
import { DeleteUserAccount } from '../../Modals/DeleteUserAccount/DeleteUserAccount';

export function UserStartPage() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const userData = useSelector((state) => state.authSlice.user);
  const showModalHandler = () => {
    showDeleteModal ? setShowDeleteModal(false) : setShowDeleteModal(true);
  };
  return (
    <>
      <div className={`${styles.userCard} animateElement`}>
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
        <div className={styles.actions}>
          <Button text="Edit" />
          <Button text="Delete" onClick={showModalHandler} />
        </div>
      </div>
      {showDeleteModal && (
      <>
        <Backdrop />
        <DeleteUserAccount modalHandler={showModalHandler} />
      </>
      )}
    </>
  );
}
