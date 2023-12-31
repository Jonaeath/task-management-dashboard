import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    isLoading: false,
    currentUser: null,
    error: null,
 }; 

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    loginSuccess: (state, action) =>{
        state.currentUser = action.payload;
        state.isLoading = false;
    },
    loginFailure:(state, action) =>{
        state.error = action.payload.errorMessage;
    },
    registerSuccess: (state, action) =>{
        state.currentUser = action.payload;
        state.isLoading = false;
    },
    registerFailure:(state, action) =>{
        state.error = action.payload.errorMessage;
    },
    logoutSuccess: (state) =>{
        state.currentUser = null;
    }
  },
})

export const {
	loginFailure,
	loginSuccess,
	registerFailure,
	registerSuccess,
	logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;