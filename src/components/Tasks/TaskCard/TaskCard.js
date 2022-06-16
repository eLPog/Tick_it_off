import { useDispatch, useSelector } from 'react-redux';
import styles from './TaskCard.module.css';
import { authSliceActions } from '../../../store/authSlice';

export function TaskCard(props) {
  const { errorNotification, jwt } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();

  const deleteTask = async () => {
    try {
      const data = await fetch(`http://localhost:3001/v1/api/tasks/${props.taskID}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      });
      if (!data.ok) {
        dispatch(authSliceActions.setNotification('Error by deleting. Please try again'));
        return;
      }
      dispatch(authSliceActions.setNotification(''));
      props.taskChanged();
    } catch (err) {
      dispatch(authSliceActions.setNotification('Error by deleting. Please try again'));
      console.log(err);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.title}>
        <p>
          <strong>Title:</strong>
          {props.title}
        </p>
        <p>
          <strong>
            Created at:
          </strong>
          {props.createdAt.slice(0, 10)}
        </p>
      </div>
      <div className={styles.content}>
        <p>{props.content}</p>
      </div>
      <div className={styles.actions}>
        <button onClick={deleteTask}>X X X</button>
        <button>E</button>
        <p>{errorNotification}</p>
      </div>
    </li>
  );
}
