import { createSlice } from '@reduxjs/toolkit';

const initialStateAuthSlice = {
  email: '',
  password: '',
  jwt: '',
  isLogged: false,
};
const authSlice = createSlice({
  name: 'authSlice',
  initialState: initialStateAuthSlice,
  reducers: {
    loginUser(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    setJwt(state, action) {
      state.jwt = action.payload;
    },
  },
});
export const authSliceActions = authSlice.actions;
export const sendLoginData = (data) => async (dispatch) => {
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

  const jwt = await response.json();
  dispatch(authSliceActions.setJwt(jwt));
};
export default authSlice;
