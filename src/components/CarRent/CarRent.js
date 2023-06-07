import './CarRent.css';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from '../../../src/axiosUrl';

import { useSelector, useDispatch } from 'react-redux';
import { loadCar } from '../../reducer/reducer';

const CarRent = (props) => {
  const car = useSelector((state) => { return state.car.car })
  const dispatch = useDispatch();
  const { rentalId } = useParams();

  const [date, setDate] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const carUrl = `/carrental/car/${rentalId}`;
    dispatch(loadCar(carUrl))
  }, [rentalId, dispatch])

  const onDateChange = (e) => {
    setDate(e.target.value);
  }
  const onNameChange = (e) => {
    setName(e.target.value);
  }

  const onRent = () => {
    console.log("RENT NOW OR WALK LATER")
    axios.post("/carrental/rent", {
      rentalId: rentalId,
      name: name,
      date: new Date(date).getTime(),
      price: car.price,
    })
    .then((res)=>{
      console.log(res);
      window.location.replace("/");
    }).catch((err)=>{
      console.log(err);
    });
  }

  return (
    <div>
      <p>Rent now or Walk later!</p>
      <div>
        <img src={car?.href} alt="Auto" />
        <p>Brand: {car?.brand}</p>
        <p>Modell: {car?.carmodel}</p>
        <p>Preis: {car?.price}</p>
        <p>Kilometer: {car?.kilometers}</p>
        <p>PS: {car?.horsepower}</p>
        <p>Gewicht: {car?.weight}</p>
        <p>Türen: {car?.doors}</p>
        <p>Beschreibung: {car?.description}</p>
        <p>Mietdauer: {car?.rentedLength}</p>
      </div>
      <input type="text" placeholder='Name' onChange={onNameChange}/>
      <input type="date" placeholder='Datum' onChange={onDateChange}/>
      <button onClick={onRent}>Rent now!</button>
    </div>
  )
};

export default CarRent;