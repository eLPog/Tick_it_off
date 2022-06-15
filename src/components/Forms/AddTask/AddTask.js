import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import styles from './AddTask.module.css';
import { Button } from '../../commons/Button/Button';
import { sendTask } from '../../../store/sendTask';

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

  const fetchNewTask = (e) => {
    e.preventDefault();
    dispatch(sendTask({ title, content }, jwt));
    setTaskAdded(true);
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
      {taskAdded && <Navigate to="/tasks" />}
    </div>
  );
}
