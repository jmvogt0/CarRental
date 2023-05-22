import './CarContainer.css'
import CarCard from "../CarCard/CarCard";
import { useState, useEffect } from 'react';
import axios from '../../../src/axiosUrl';
import { useSelector, useDispatch } from 'react-redux';
import { loadCars } from '../../reducer/reducer';

const CarContainer = props => {
  const cars = useSelector((state) => {return state.cars})
  console.log(cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCars())
  },[loadCars])

  let allCars = null;
  if (cars?.length > 0) {
    allCars = cars.map((v, i) => {
      return <CarCard car={v} key={v._id} />;
    })
  }

  const onLogout = () => {
    axios.post("/logout")
    .then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <div className='content'>
      <div className='content__header'>
        <h1>Carrental App</h1>
        <div className='content__header__buttons'>
          <a href="/login" className='content__header__buttons__loginBtn'>Login</a>
          <button className='content__header__buttons__logoutBtn' onClick={onLogout}>Logout</button>
        </div>
      </div>
      <div className='content__filters'>
        <div>
          <input type="text" placeholder='Suche'/>
          <select name="Kategorie" id="1">
            <option value="Limousine">Limousine</option>
            <option value="Cabrio">Cabrio</option>
            <option value="Sportwagen">Sportwagen</option>
          </select>
        </div>
      </div>
      <div className='content__carArea'>
        {allCars}
      </div>
    </div>
  );
}

export default CarContainer;

