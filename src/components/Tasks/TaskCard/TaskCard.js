import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import styles from './TaskCard.module.css';
import { authSliceActions } from '../../../store/authSlice';
import { EditTask } from '../../Forms/EditTasks/EditTask';
import iconDelete from '../../../assets/iconDelete.png';
import iconEdit from '../../../assets/iconEdit.png';
import iconDone from '../../../assets/iconDone.png';
import { apiData } from '../../../utils/apiData';

export function TaskCard(props) {
  const { errorNotification, jwt } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const [showEditForm, setShowEditForm] = useState(false);
  const [taskFinished, setTaskFinished] = useState(props.isDone);
  const [loading, setLoading] = useState(false);
  const showEditFormHandler = () => {
    showEditForm ? setShowEditForm(false) : setShowEditForm(true);
  };

  const editTask = async (title, content) => {
    try {
      await fetch(`${apiData}/tasks/${props.taskID}`, {
        method: 'PATCH',
        headers: {
          authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });
      props.taskChanged();
      setShowEditForm(false);
    } catch (err) {
      dispatch(authSliceActions.setNotification('Error by editing.Please try again'));
      console.log(err);
    }
  };

  const deleteTask = async () => {
    try {
      const data = await fetch(`${apiData}/tasks/${props.taskID}`, {
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
  const taskDone = async () => {
    try {
      const data = await fetch(`${apiData}/tasks/${props.taskID}`, {
        method: 'PUT',
        headers: {
          authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json',
        },
      });
      if (!data.ok) {
        dispatch(authSliceActions.setNotification('Unexpected error. Please try again'));
        return;
      }
      taskFinished ? setTaskFinished(false) : setTaskFinished(true);
      // const res = await data.json();
      // console.log(res);
      dispatch(authSliceActions.setNotification(''));
      props.taskChanged();
    } catch (err) {
      dispatch(authSliceActions.setNotification('Error by deleting. Please try again'));
      console.log(err);
    }
  };

  return (
    <>
      {showEditForm && (
      <EditTask
        title={props.title}
        content={props.content}
        taskID={props.taskID}
        showEditFormHandler={showEditFormHandler}
        editTaskFetch={editTask}
      />
      )}
      <li className={`${styles.item} ${!taskFinished ? '' : styles.isDone}`}>
        <div className={styles.title}>
          <p>
            <strong>Title:</strong>
            {props.title}
          </p>
          <p className={styles.createdAt}>
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
          <button onClick={taskDone}>
            <img
              src={iconDone}
              alt="Finished task icon"
            />
          </button>
          <button onClick={showEditFormHandler}><img src={iconEdit} alt="Edit task icon" /></button>
          <button onClick={deleteTask}><img src={iconDelete} alt="Delete task icon" /></button>
          <p>{errorNotification}</p>
        </div>
      </li>
    </>
  );
}
