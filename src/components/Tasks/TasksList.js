import { useSelector } from 'react-redux';

export function TasksList() {
  const jwt = useSelector((state) => state.authSlice.jwt);
  const tasks = useSelector((state) => state.authSlice.user.tasks);

  return (
    !jwt ? <p>No content</p> : (
      <div>
        {tasks.map((el) => (
          <li key={el.taskID}>
            {el.content}
          </li>
        ))}
      </div>
    )

  );
}
