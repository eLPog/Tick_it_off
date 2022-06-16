import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import styles from './AddTask.module.css';
import { Button } from '../../commons/Button/Button';
import { authSliceActions } from '../../../store/authSlice';

export function AddTask() {
  const dispatch = useDispatch();
  const errorNotification = useSelector((state) => state.authSlice.notification);
  const jwt = useSelector((state) => state.authSlice.jwt);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [taskAdded, setTaskAdded] = useState(false);

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  const fetchNewTask = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/v1/api/tasks', {
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
        dispatch(authSliceActions.setNotification('Error adding task'));
        return;
      }
      dispatch(authSliceActions.setNotification(''));
      setTaskAdded(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="centered">
      <form className={styles.addTaskForm} onSubmit={fetchNewTask}>
        <label htmlFor="taskTitle">
          Title
        </label>
        <input type="text" id="taskTitle" onChange={titleHandler} />
        <label htmlFor="taskContent">
          Content
        </label>
        <textarea id="taskContent" onChange={contentHandler} />
        <Button text="Add" />
      </form>
      <p>{errorNotification}</p>
      {taskAdded && <Navigate to="/tasks" replace />}
    </div>
  );
}
