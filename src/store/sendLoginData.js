// thunk function to use async fetch
import { authSliceActions } from './authSlice';
import { getTasks } from './getTasks';

export const sendLoginData = (data) => async (dispatch) => {
  dispatch(authSliceActions.setNotification(''));
  try {
    const response = await fetch('http://localhost:3001/v1/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    if (!response.ok) {
      dispatch(authSliceActions.setNotification('Email or password incorrect'));
      return;
    }
    const jwt = await response.json();
    dispatch(authSliceActions.setJwt(jwt));
    const userData = await fetch('http://localhost:3001/v1/api/user', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    });
    if (!userData.ok) {
      dispatch(authSliceActions.setNotification('Ups...we have some error.'));
      return;
    }
    const user = await userData.json();
    dispatch(authSliceActions.setUserData({
      email: user.email,
      name: user.name,
      userID: user.userID,
      lastLogin: user.lastLogin.slice(0, 10),
      registerAt: user.registerAt.slice(0, 10),
    }));
    // const tasks = await fetch('http://localhost:3001/v1/api/tasks', {
    //   method: 'GET',
    //   headers: {
    //     authorization: `Bearer ${jwt}`,
    //   },
    // });
    // const allTasks = await tasks.json();
    // dispatch(authSliceActions.setTasks(allTasks));
    dispatch(getTasks(jwt));
  } catch (err) {
    console.log(err);
  }
};
