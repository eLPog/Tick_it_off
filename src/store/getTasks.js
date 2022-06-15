import { authSliceActions } from './authSlice';

export const getTasks = (jwt) => async (dispatch) => {
  try {
    const tasks = await fetch('http://localhost:3001/v1/api/tasks', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    });
    if (!tasks.ok) {
      dispatch(authSliceActions.setTasks([]));
      dispatch(authSliceActions.setNotification('Something went wrong. Please try again'));
      return;
    }
    const allTasks = await tasks.json();
    dispatch(authSliceActions.setNotification(''));
    dispatch(authSliceActions.setTasks(allTasks));
  } catch (err) {
    console.log(err);
  }
};
