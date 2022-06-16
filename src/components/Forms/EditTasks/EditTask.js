import { useState } from 'react';
import styles from './EditTask.module.css';
import { Button } from '../../commons/Button/Button';

export function EditTask(props) {
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const contentHandler = (e) => {
    setContent(e.target.value);
  };
  const editTaskHandler = async (e) => {
    e.preventDefault();
    await props.editTaskFetch(title, content);
  };

  return (
    <div className="centered">
      <form className={styles.addTaskForm} onSubmit={editTaskHandler}>
        <label htmlFor="taskTitleEdit">
          Title
        </label>
        <input type="text" id="taskTitleEdit" value={title} onChange={titleHandler} />
        <label htmlFor="taskContentEdit">
          Content
        </label>
        <textarea id="taskContentEdit" value={content} onChange={contentHandler} />
        <div className={styles.actions}>
          <Button text="Save" onClick={props.editTaskFetch} />
          <Button text="Cancel" onClick={props.showEditFormHandler} />
        </div>

      </form>
    </div>
  );
}
