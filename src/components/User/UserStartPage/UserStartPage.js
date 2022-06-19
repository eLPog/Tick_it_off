import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Button } from '../../commons/Button/Button';
import styles from './UserStartPage.module.css';
import { Backdrop } from '../../Modals/Backdrop/Backdrop';
import { DeleteUserAccount } from '../../Modals/DeleteUserAccount/DeleteUserAccount';
import { EditUserDataModal } from '../../Modals/EditUserDataModal/EditUserDataModal';

export function UserStartPage() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const userData = useSelector((state) => state.authSlice.user);
  const showDeleteConfirmModalHandler = () => {
    showDeleteModal ? setShowDeleteModal(false) : setShowDeleteModal(true);
  };
  const showEditModalHandler = () => {
    showEditModal ? setShowEditModal(false) : setShowEditModal(true);
  };
  return (
    <>
      <div className={`${styles.userCard} animateElement`}>

        <div className={styles.welcome}>
          Welcome
          {' '}
          <strong>{userData.name}</strong>

        </div>
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
            <span className={styles.option}>
              {' '}
              <strong>Registered On: </strong>
            </span>
            <span className={styles.data}>
              {' '}
              {userData.registerAt}
            </span>
          </p>
        </div>
        <div className={styles.actions}>
          <Button text="Edit" onClick={showEditModalHandler} />
          <Button text="Delete" onClick={showDeleteConfirmModalHandler} />
        </div>
      </div>
      {showDeleteModal && (
      <>
        <Backdrop />
        <DeleteUserAccount modalHandler={showDeleteConfirmModalHandler} />
      </>

      )}
      {showEditModal && (
      <>
        <Backdrop />
        <EditUserDataModal showModalHandler={showEditModalHandler} userData={userData} />
      </>
      )}
    </>
  );
}
