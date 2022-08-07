import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TasksList.module.css';
import { TaskCard } from '../TaskCard/TaskCard';
import { apiData } from '../../../utils/apiData';
import { Button } from '../../commons/Button/Button';

export function TasksList() {
  const { jwt } = useSelector((state) => state.authSlice);
  const [tasks, setTasks] = useState([]);
  const [taskChanged, setTaskChanged] = useState(false);
  const [sortAlpha, setSortAlpha] = useState(false);
  const [sortDate, setSortDate] = useState(true);
  const [sortAlphaAsc, setSortAlphaAsc] = useState(true);
  const [sortDateAsc, setSortDateAsc] = useState(true);
  const [info, setInfo] = useState('');

  const taskChangedHandler = () => {
    setTaskChanged(true);
  };
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
  useEffect(() => {
    (async () => {
      const data = await fetch(`${apiData}/tasks`, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      });
      if (!data.ok) {
        setInfo('Server Error. Please try again');
        return;
      }
      const tasks = await data.json();
      if (tasks.length < 1) {
        setInfo('Your tasks list is empty');
        return;
      }
      const sortedTasks = sortTasks(tasks);
      setTasks(sortedTasks);
    })();
    setTaskChanged(false);
  }, [taskChanged]);
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
  const sortedTasks = sortTasks(tasks, true);

  const tasksList = sortedTasks.map((el) => (
    <TaskCard
      key={el.taskID}
      title={el.title}
      content={el.content}
      createdAt={el.createdAt}
      taskID={el.taskID}
      isDone={el.isDone}
      taskChanged={taskChangedHandler}
    />
  ));
  const information = (
    <p className={styles.info}>{info}</p>
  );

  return (
    <>
      {info ? information : (
        <>
          <div className={styles.actions}>
            <NavLink
              to="/add"
            >
              <Button text="Add task" />
            </NavLink>
            <Button text={sortAlphaAsc ? 'Z-A' : 'A-Z'} onClick={sortAfterAlphabet} />
            <Button text={sortDateAsc ? 'Oldest' : 'Newest'} onClick={sortAfterDate} />
          </div>
          <ul className={`${styles.list} animateElement`}>
            {tasksList}
          </ul>
        </>
      )}
    </>

  );
}
