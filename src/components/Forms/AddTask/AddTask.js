import { useState } from 'react';
import styles from './AddTask.module.css';
import { Button } from '../../commons/Button/Button';

export function AddTask() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="centered">
      <form className={styles.addTaskForm}>
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
