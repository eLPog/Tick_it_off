import { authSliceActions } from './authSlice';

export const sendTask = (newTask, jwt) => async (dispatch) => {
  console.log('jeden');
  console.log('dwa');

  try {
    await fetch('http://localhost:3001/v1/api/tasks', {
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
    dispatch(authSliceActions.addTask({ title: newTask.title, content: newTask.content }));
  } catch (err) {
    console.log(err);
  }
};
