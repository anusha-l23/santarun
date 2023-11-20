import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../api';
import axios from "axios";
const initialState = {
  user: {},
  registrationStatus: 'idle',
  error: null,
}

export const registerUser = createAsyncThunk("user/registerUser", async(userData, {rejectWithValue})=>{
  try {
    const response = await axios.post("http://localhost:3001/santarun/register", userData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
builder
.addCase(registerUser.pending, (state)=>{
  state.registrationStatus= "loading"
})
.addCase(registerUser.fulfilled, (state, action)=>{
  state.user = action.payload;
  state.registrationStatus = "succeeded";
  state.error = null;
})
.addCase(registerUser.rejected, (state, action)=>{
  state.error = action.payload;
  state.registrationStatus = "failed" 
})
  }
});

export default userSlice.reducer;