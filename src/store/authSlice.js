import { createSlice } from '@reduxjs/toolkit';

const initialStateAuthSlice = {
  email: '',
  password: '',
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
  },
});

export const authSliceActions = authSlice.actions;
export default authSlice;
