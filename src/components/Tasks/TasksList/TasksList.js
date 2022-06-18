import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TasksList.module.css';
import { TaskCard } from '../TaskCard/TaskCard';
import { apiData } from '../../../utils/apiData';

export function TasksList() {
  const { jwt, notification } = useSelector((state) => state.authSlice);
  const [tasks, setTasks] = useState([]);
  const [taskChanged, setTaskChanged] = useState(false);

  const taskChangedHandler = () => {
    setTaskChanged(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${apiData}/tasks`, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      });
      const res = await data.json();
      setTasks(res);
    };
    fetchData().catch(console.error);
    setTaskChanged(false);
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
  const noTasks = (
    <div className={styles.noTasksContainer}>
      <p className={styles.info}>You dont have any tasks yet. </p>
      <NavLink to="/add" className={styles.add}> Add your first Task</NavLink>
    </div>
  );

  return (
    <>
      {tasks.length < 1 && noTasks}
      <ul className={`${styles.list} animateElement`}>
        {tasksList}

      </ul>
    </>
  );
}
