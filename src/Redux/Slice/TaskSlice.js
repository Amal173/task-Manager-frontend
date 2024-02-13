import {createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios  from 'axios';

const initialState={ 
    tasks:[],

}

export const fetchAsyncTasks = createAsyncThunk('task/fetchAsyncTasks', async () => {
    const response = await axios.get(`http://localhost:4040/task`);
    console.log("response data get task", response);
    return response.data;
});

export const fetchAsyncCreateTasks = createAsyncThunk('task/fetchAsyncCreateTasks', async (data) => {
    console.log(data);
    const response = await axios.post(`http://localhost:4040/task`,data);
    console.log("response data get task", response);
    return response.data;
});


export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncTasks.fulfilled, (state, { payload }) => {
        state.tasks = payload;
    });

},


});



export default taskSlice.reducer;