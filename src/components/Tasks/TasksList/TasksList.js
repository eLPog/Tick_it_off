import { useSelector } from 'react-redux';
import styles from './TasksList.module.css';
import { TaskCard } from '../TaskCard/TaskCard';

export function TasksList() {
  const tasks = useSelector((state) => state.authSlice.user.tasks);

  return (
    <>
      <ul className={styles.list}>
        {tasks.map((el) => (
          <TaskCard
            key={el.taskId}
            title={el.title}
            content={el.content}
            createdAt={el.createdAt}
          />
        ))}

      </ul>
    </>
  );
}
