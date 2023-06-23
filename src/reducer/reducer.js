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

export const loadHistory = createAsyncThunk("/carHistory", async () => {
  const res = await axios.get("/carrental/rented")
  return res.data;
});

export const loadLentHistory = createAsyncThunk("/lentHistory", async () => {
  const res = await axios.get("/carrental/lent")
  return res.data;
});

export const loadCarCategories = createAsyncThunk("/carCategories", async () => {
  const res = await axios.get("/carrental/cartypes")
  return res.data;
});

export const loadSearchCar = createAsyncThunk("/searchCar", async (searchValue) => {
  const res = await axios.get("/carrental/search" + searchValue)
  return res.data;
});

export const loadCategoryChange = createAsyncThunk("/categoryChange", async (category) => {
  const res = await axios.get("/carrental/cars/" + category)
  return res.data;
});

export const setLoggedIn = createAction("login/SET_LOGGED_IN");

const initialCarState = {
  cars: [],
  car: null,
  carHistory: [],
  lentHistory: [],
  carCategories: [],
  
};

const carReducer = createReducer(initialCarState, (builder) => {
  builder
    .addCase(loadCars.fulfilled, (state, action) => {
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
    })
    .addCase(loadHistory.fulfilled, (state, action) => {
      return {
        ...state,
        carHistory: action.payload,
      };
    })
    .addCase(loadLentHistory.fulfilled, (state, action) => {
      return {
        ...state,
        lentHistory: action.payload,
      };
    })
    .addCase(loadCarCategories.fulfilled, (state, action) => {
      return {
        ...state,
        carCategories: action.payload,
      };
    })
    .addCase(loadSearchCar.fulfilled, (state, action) => {
      return {
        ...state,
        cars: action.payload,
      };
    })
    .addCase(loadCategoryChange.fulfilled, (state, action) => {
      return {
        ...state,
        cars: action.payload,
      };
    })
});

const initialLoginState = {
  isLoggedIn: false,
};

const loginReducer = createReducer(initialLoginState, (builder) => {
  builder
  .addCase(setLoggedIn.type, (state, action) => {
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
