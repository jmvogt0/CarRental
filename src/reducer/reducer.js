import { createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "../axiosUrl";

export const loadCars = createAsyncThunk("/", async () => {
  const res = await axios.get("/carrental/cars")
  return res.data;
});
export const loadCar = createAsyncThunk("/car", async (carUrl) => {
  const res = await axios.get(carUrl)
  return res.data;
});

const initialState = {
  cars: [],
  car: null,
}

const carReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadCars.fulfilled, (state, action) => {
    return {
      ...state,
      cars: action.payload,
    }
  })
  .addCase(loadCar.fulfilled, (state, action) => {
    return {
      ...state,
      car: action.payload,
    }
  })
  /*
  .addCase(updateTasks, (state, action) => {
    const taskIndex = state.tasks.findIndex(v => v._id === action.payload._id)
    const taskCopy = {...state.tasks[taskIndex]}
    taskCopy.completed = action.payload.completed;
    console.log(...state.tasks);
    const taskArrayCopy = [...state.tasks];
    taskArrayCopy[taskIndex] = taskCopy;

    return {
      ...state,
      tasks: taskArrayCopy,
    }
  })*/
});

export default carReducer;