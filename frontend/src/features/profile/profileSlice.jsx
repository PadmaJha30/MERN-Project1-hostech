import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8081";


export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (_, {   }) => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.get(`${API_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data.data;
      
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to load profile"
      );
    }
  }
);


export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (formDataOrObject, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.put(
        `${API_URL}/auth/update-profile`,
        formDataOrObject,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Profile update failed"
      );
    }
  }
);

export const updateProfilePicture = createAsyncThunk(
'profile/updateProfilePicture',
 async (formDataOrObject, {rejectWithValue})=>{
  try {
    const token = localStorage.getItem('token');

          const { data } = await axios.put(
        `${API_URL}/auth/update-profile-pic`,
        formDataOrObject,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
  } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Profile update failed"
      );
    }
 }
);

export const changePassword = createAsyncThunk(
  'profile/changePassword',
  async (paswordData,{rejectWithValue})=>{
    try {
      const token  = localStorage.getItem('token');

      const {data} = await axios.put(
        `${API_URL}/auth/change-password`,
        paswordData,
        {
          headers:{
            Authorization:`Bearer ${token}`,
          },
        }
      );
      return data;

    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Password updated faild '
      );
    }
  }
);
 
const profileSlice = createSlice({
  name: "profile",
  initialState: {
    user: null,
    loading: false,
    message: null,
    error: null,
  },
  reducers: {
    clearMessage: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(getProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

     
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

         .addCase(updateProfilePicture.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfilePicture.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(updateProfilePicture.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      
         .addCase(changePassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearMessage } = profileSlice.actions;
export default profileSlice.reducer;


