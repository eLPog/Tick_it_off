import { authSliceActions } from './authSlice';

export const sendTask = (newTask, jwt) => async (dispatch) => {
  dispatch(authSliceActions.setNotification(''));
  try {
    const res = await fetch('http://localhost:3001/v1/api/tasks', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: newTask.title,
        content: newTask.content,
      }),
    });
    if (!res.ok) {
      dispatch(authSliceActions.setNotification('Error adding task'));
    }
    const tasks = await fetch('http://localhost:3001/v1/api/tasks', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    });
    const allTasks = await tasks.json();
    dispatch(authSliceActions.setTasks(allTasks));
  } catch (err) {
    console.log(err);
  }
};
