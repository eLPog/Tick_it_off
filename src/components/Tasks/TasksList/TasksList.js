import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TasksList.module.css';
import { TaskCard } from '../TaskCard/TaskCard';
import { apiData } from '../../../utils/apiData';
import { Button } from '../../commons/Button/Button';

export function TasksList() {
  const { jwt, notification } = useSelector((state) => state.authSlice);
  const [tasks, setTasks] = useState([]);
  const [taskChanged, setTaskChanged] = useState(false);
  const [sortAlpha, setSortAlpha] = useState(true);
  const [sortDate, setSortDate] = useState(false);
  const [sortAlphaAsc, setSortAlphaAsc] = useState(true);
  const [sortDateAsc, setSortDateAsc] = useState(true);

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

  const sortTasks = (tasks) => tasks.sort((el1, el2) => {
    if (sortAlpha) {
      if (sortAlphaAsc) {
        return el1.content.toLowerCase() > el2.content.toLowerCase() ? 1 : -1;
      }
      return el1.content.toLowerCase() < el2.content.toLowerCase() ? 1 : -1;
    }
    if (sortDateAsc) {
      return el1.createdAt < el2.createdAt ? 1 : -1;
    }
    return el1.createdAt > el2.createdAt ? 1 : -1;
  });
  const sortedTasks = sortTasks(tasks, true);

  const sortAfterAlphabet = () => {
    setSortDate(false);
    sortAlphaAsc ? setSortAlphaAsc(false) : setSortAlphaAsc(true);
    setSortAlpha(true);
  };
  const sortAfterDate = () => {
    setSortAlpha(false);
    sortDateAsc ? setSortDateAsc(false) : setSortDateAsc(true);
    setSortDate(true);
  };

  const tasksList = sortedTasks.map((el) => (
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
      <div className={styles.actions}>
        <Button text={sortAlphaAsc ? 'Z-A' : 'A-Z'} onClick={sortAfterAlphabet} />
        <Button text={sortDateAsc ? 'Oldest' : 'Newest'} onClick={sortAfterDate} />
      </div>

    </>
  );
}
