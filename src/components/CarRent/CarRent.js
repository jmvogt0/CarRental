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
    <div className="rentContainer">
      <img src={car?.href} alt="Auto" />
      <div className="rentContainer__textContainer">
        <p className='rentContainer__headline'>{car?.brand} {car?.carmodel}</p>
        <p>{car?.price} € / Tag</p>
        <p>{car?.kilometers} KM</p>
        <p>{car?.horsepower} PS</p>
        <p>{car?.weight} KG</p>
        <p>{car?.doors} Türen</p>
        <p>Beschreibung:</p>
        <p>{car?.description}</p>
        <p>Mietdauer: {car?.rentedLength}</p>
        <input type="text" placeholder='Name' onChange={onNameChange}/>
        <input type="date" placeholder='Datum' onChange={onDateChange}/>
        <button className="rentContainer__actionBtn" onClick={onRent}>Reservierung abschließen</button>
      </div>
    </div>
  )
};

export default CarRent;