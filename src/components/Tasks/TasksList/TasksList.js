import { useSelector } from 'react-redux';
import styles from './TasksList.module.css';
import { TaskCard } from '../TaskCard/TaskCard';

export function TasksList() {
  const tasks = useSelector((state) => state.authSlice.user.tasks);

  const tasksList = tasks.map((el) => (
    <TaskCard
      key={el.taskID}
      title={el.title}
      content={el.content}
      createdAt={el.createdAt}
    />
  ));

  return (
    <>
      <ul className={styles.list}>
        {tasksList}

      </ul>
    </>
  );
}
