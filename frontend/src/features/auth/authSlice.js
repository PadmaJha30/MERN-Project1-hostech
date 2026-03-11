import {createSlice} from '@reduxjs/toolkit';
// import { updateUser } from '../profile/profileSlice';

const token = localStorage.getItem('token');
const user = localStorage.getItem("user");




const initialState= {
    user: user? JSON.parse(user) : null,
    // user:null,
    token:token || null,
    isAuthenticated: !!token,
};

const authSlice  = createSlice({
    name:'auth',
    initialState,
    reducers:{
        loginSuccess :(state,action) =>{
            state.user = action.payload.user;
            state.token= action.payload.token;
            state.isAuthenticated= true;

            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('user', JSON.stringify(action.payload.user));
        },
        logout:(state)=>{
            state.user= null;
            state.token= null;
            state.isAuthenticated=false;

            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
        updateUser:(state,action)=>{
            state.user=action.payload;
            localStorage.setItem('user',JSON.stringify(action.payload));
        },
    },
});

export const {loginSuccess,logout,updateUser} = authSlice.actions;
export default authSlice.reducer;