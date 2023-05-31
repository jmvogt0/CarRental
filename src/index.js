import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CarDetail from './components/CarDetail/CarDetail';
import CarContainer from './components/CarContainer/CarContainer';
import Rental from './components/Rental/Rental';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import CarHistory from './components/CarHistory/CarHistory';
import CarRent from './components/CarRent/CarRent';
import CarLent from './components/CarLent/CarLent';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from "./reducer/reducer";

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
      {
      index: true,
      element: <CarContainer />
      },
      {
        path:'/login',
        element: <Login />,
      },
      {
        path:'/signUp',
        element: <SignUp />,
      },
      {
        path:'/cars/:rentalId',
        element: <CarDetail />,
      },
      {
        path:'/cars/:rentalId/rent',
        element: <CarRent />,
      },
      {
        path:'/newRental',
        element: <Rental />,
      },
      {
        path:'/rented',
        element: <CarHistory />,
      },
      {
        path:'/lent',
        element: <CarLent />,
      },
    ]
  }
])
const store = configureStore({reducer: rootReducer});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store ={store}>
    <RouterProvider router={router}/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
