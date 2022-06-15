import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './AddTask.module.css';
import { Button } from '../../commons/Button/Button';
import { sendTask } from '../../../store/sendTask';

export function AddTask() {
  const dispatch = useDispatch();
  const jwt = useSelector((state) => state.authSlice.jwt);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  const fetchNewTask = (e) => {
    e.preventDefault();
    dispatch(sendTask({ title, content }, jwt));
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
    </div>
  );
}
