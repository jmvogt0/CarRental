import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarDetail from './components/CarDetail/CarDetail';
import CarContainer from './components/CarContainer/CarContainer';
import Rental from './components/Rental/Rental';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import CarHistory from './components/CarHistory/CarHistory';
import CarRent from './components/CarRent/CarRent';
import CarLent from './components/CarLent/CarLent';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/store';
import { Provider } from 'react-redux';

console.log(store.getState());

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<CarContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/cars/:rentalId" element={<CarDetail />} />
            <Route path="/cars/:rentalId/rent" element={<CarRent />} />
            <Route path="/newRental" element={<Rental />} />
            <Route path="/rented" element={<CarHistory />} />
            <Route path="/lent" element={<CarLent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

reportWebVitals();
