import { createSlice } from '@reduxjs/toolkit';

const initialStateAuthSlice = {
  user: {
    email: '',
    tasks: [],
    lastLogin: '',
    registerAt: '',
    userID: '',
  },
  jwt: '',
  isLogged: false,
  notification: '',

};
const authSlice = createSlice({
  name: 'authSlice',
  initialState: initialStateAuthSlice,
  reducers: {
    setUserData(state, action) {
      state.user.email = action.payload.email;
      state.user.lastLogin = action.payload.lastLogin;
      state.user.registerAt = action.payload.registerAt;
      state.user.userID = action.payload.userID;
      state.isLogged = true;
    },
    setJwt(state, action) {
      state.jwt = action.payload;
    },
    setNotification(state, action) {
      state.notification = action.payload;
    },
  },
});
export const authSliceActions = authSlice.actions;

// thunk function to use async fetch
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
    console.log(`jwt ${jwt}`);
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
    console.log(`User data: ${user.email}`);
    dispatch(authSliceActions.setUserData({
      email: user.email,
      userID: user.userID,
      lastLogin: user.lastLogin,
      registerAt: user.registerAt,
    }));
  } catch (err) {
    console.log(err);
  }
};
export default authSlice;
