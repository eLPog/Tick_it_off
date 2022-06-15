import { createSlice } from '@reduxjs/toolkit';

const initialStateAuthSlice = {
  user: {
    email: '',
    name: '',
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
      state.user.name = action.payload.name;
      state.user.lastLogin = action.payload.lastLogin;
      state.user.registerAt = action.payload.registerAt;
      state.user.userID = action.payload.userID;
    },
    setJwt(state, action) {
      state.jwt = action.payload;
      action.payload ? state.isLogged = true : state.isLogged = false;
    },
    setNotification(state, action) {
      state.notification = action.payload;
    },
    setTasks(state, action) {
      state.user.tasks = action.payload;
    },
  },
});
export const authSliceActions = authSlice.actions;
export default authSlice;
