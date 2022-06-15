import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './TasksList.module.css';
import { TaskCard } from '../TaskCard/TaskCard';
import { getTasks } from '../../../store/getTasks';

export function TasksList() {
  const tasks = useSelector((state) => state.authSlice.user.tasks);
  const jwt = useSelector((state) => state.authSlice.jwt);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks(jwt));
  }, [tasks]);

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
