import './CarRent.css';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from '../../../src/axiosUrl';

import { useSelector, useDispatch } from 'react-redux';
import { loadCar } from '../../reducer/reducer';

import CarCardDetail from '../carCardDetail/carCardDetail';

const CarRent = (props) => {
  const car = useSelector((state) => { return state.car.car })
  const dispatch = useDispatch();
  const { rentalId } = useParams();

  const [date, setDate] = useState('');
  const [name, setName] = useState('');

  const [errorMsg, setErrorMsg] = useState('');

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

  const onErrorMsgChange = err => {
    setErrorMsg(err.response.data);
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
      onErrorMsgChange(err);
      console.log(err);
    });
  }

  return (
    <div className="rentContainer">
      <CarCardDetail car={car} />
      <div className="rentContainer__textContainer">
        <input type="text" placeholder='Name' onChange={onNameChange}/>
        <input type="date" placeholder='Datum' onChange={onDateChange}/>
        <button className="rentContainer__actionBtn" onClick={onRent}>Reservierung abschließen</button>
        <p className="errorMsg"> {errorMsg} </p>
      </div>
    </div>
  )
};

export default CarRent;