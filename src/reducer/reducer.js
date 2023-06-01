import { createAction, createReducer, createAsyncThunk, combineReducers } from '@reduxjs/toolkit';
import axios from "../axiosUrl";

export const loadCars = createAsyncThunk("/", async () => {
  const res = await axios.get("/carrental/cars")
  return res.data;
});

export const loadCar = createAsyncThunk("/car", async (carUrl) => {
  const res = await axios.get(carUrl)
  return res.data;
});

export const setLoggedIn = createAction("login/SET_LOGGED_IN");

const initialCarState = {
  cars: [],
  car: null,
};

const carReducer = createReducer(initialCarState, (builder) => {
  builder
    .addCase(loadCars.fulfilled, (state, action) => {
      console.log('loadCars')
      return {
        ...state,
        cars: action.payload,
      };
    })
    .addCase(loadCar.fulfilled, (state, action) => {
      return {
        ...state,
        car: action.payload,
      };
    });
});

const initialLoginState = {
  isLoggedIn: false,
};

const loginReducer = createReducer(initialLoginState, (builder) => {
  builder
  .addCase(setLoggedIn.type, (state, action) => {
    console.log(initialLoginState);
    console.log("nowLoggedIn");
    console.log(action.payload);
    return {
      ...state,
      isLoggedIn: action.payload,
    };
  })
});

const rootReducer = combineReducers({
  car: carReducer,
  login: loginReducer,
});

export default rootReducer;
