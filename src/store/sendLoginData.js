// thunk function to use async fetch
import { authSliceActions } from './authSlice';
import { apiData } from '../utils/apiData';

export const sendLoginData = (data) => async (dispatch) => {
  dispatch(authSliceActions.setNotification(''));
  try {
    const response = await fetch(`${apiData}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    if (response.status === 400) {
      dispatch(authSliceActions.setNotification('Email or password incorrect'));
      return;
    }
    if (response.status === 404) {
      dispatch(authSliceActions.setNotification('Problem on server side. Please try again.'));
      return;
    }
    if (response.status < 200 || response.status > 299) {
      dispatch(authSliceActions.setNotification('Unexpected error. Please try again.'));
      return;
    }
    const jwt = await response.json();
    dispatch(authSliceActions.setJwt(jwt));
    const userData = await fetch(`${apiData}/user`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    });
    if (!userData.ok) {
      dispatch(authSliceActions.setNotification('Ups...we have some error. Please try again.'));
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
  } catch (err) {
    console.log(err);
  }
};
