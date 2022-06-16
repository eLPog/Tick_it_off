import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import styles from './TasksList.module.css';
import { TaskCard } from '../TaskCard/TaskCard';

export function TasksList() {
  const { jwt, notification } = useSelector((state) => state.authSlice);
  const [tasks, setTasks] = useState([]);
  const [taskChanged, setTaskChanged] = useState(false);

  const taskChangedHandler = () => {
    setTaskChanged(true);
  };

  useEffect(() => {
    console.log('tasks list rendered');
    const fetchData = async () => {
      const data = await fetch('http://localhost:3001/v1/api/tasks', {
        method: 'GET',
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      });
      const res = await data.json();
      setTasks(res);
    };
    fetchData().catch(console.error);
  }, [taskChanged]);

  const tasksList = tasks.map((el) => (
    <TaskCard
      key={el.taskID}
      title={el.title}
      content={el.content}
      createdAt={el.createdAt}
      taskID={el.taskID}
      taskChanged={taskChangedHandler}
    />
  ));

  return (
    <>
      {notification && <p>{notification}</p>}
      <ul className={styles.list}>
        {tasksList}

      </ul>
    </>
  );
}
