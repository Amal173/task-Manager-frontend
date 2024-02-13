import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../Redux/Slice/TaskSlice'
export default configureStore({
  reducer: {
    task:taskReducer
  },
});