import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';
import styles from './AddTask.module.css';
import { Button } from '../../commons/Button/Button';
import { authSliceActions } from '../../../store/authSlice';
import { apiData } from '../../../utils/apiData';

export function AddTask() {
  const dispatch = useDispatch();
  const errorNotification = useSelector((state) => state.authSlice.notification);
  const jwt = useSelector((state) => state.authSlice.jwt);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [taskAdded, setTaskAdded] = useState(false);
  const [errorInfo, setErrorInfo] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [info, setInfo] = useState('');

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const contentHandler = (e) => {
    setContent(e.target.value);
  };
  useEffect(() => {
    if (title.trim().length > 100 || content.trim().length > 500) {
      setErrorInfo('The title must be between 1 and 100 characters long. ' +
          'Task content must be between 1 and 500 characters long');
    } if (title.trim().length < 1 || content.trim().length < 1) {
      setInfo('Add title (max. 100 characters) and content (max. 500 characters)');
    } else {
      setIsButtonActive(true);
      setErrorInfo('');
    }
  }, [title, content]);

  const fetchNewTask = async (e) => {
    e.preventDefault();
    if (title.trim().length < 1 || content.trim().length < 1) {
      setErrorInfo('Task need a title and content');
      return;
    }
    try {
      const res = await fetch(`${apiData}/tasks`, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });
      if (!res.ok) {
        setErrorInfo('Error. Check if title or content are not to long.');
        return;
      }
      dispatch(authSliceActions.setNotification(''));
      setTaskAdded(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>

      <form className={`${styles.addTaskForm} animateElement`} onSubmit={fetchNewTask}>
        <label htmlFor="taskTitle">
          Title
        </label>
        <input type="text" id="taskTitle" onChange={titleHandler} />
        <label htmlFor="taskContent">
          Content
        </label>
        <textarea id="taskContent" onChange={contentHandler} />
        <Button text="Add" disabled={isButtonActive ? '' : 'disabled'} />
        <NavLink
          to="/tasks"
        >
          <Button text="Cancel" />
        </NavLink>
      </form>

      {errorNotification && (
        <div className={styles.errorInfo}>
          <p>{errorNotification}</p>
        </div>
      )}
      {errorInfo && (
      <div className={styles.errorInfo}>
        <p>{errorInfo}</p>
      </div>
      )}
      {info && (
      <div className={styles.info}>
        <p>{info}</p>
      </div>
      )}
      {taskAdded && <Navigate to="/tasks" replace />}
    </div>
  );
}
