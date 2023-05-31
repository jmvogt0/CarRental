import './CarDetail.css';
import { useEffect } from 'react';
import { redirect, useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { loadCar } from '../../reducer/reducer';

import axios from '../../../src/axiosUrl';

const CarDetail = ({ carID }) => {
  const car = useSelector((state) => { return state.car })
  console.log(car);
  const dispatch = useDispatch();

  const { rentalId } = useParams();

  useEffect(() => {
    const carUrl = `/carrental/car/${rentalId}`;
    dispatch(loadCar(carUrl))
  }, [rentalId, dispatch])

  const onRent = () => {
    console.log("RENT NOW OR WALK LATER")

    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    url.pathname += "/rent";
    const updatedUrl = url.toString();

    window.location.href = updatedUrl;
  }

  return (
    <div>
      <p>CarDetail</p>
      <a href="/">Zurück zur Übersicht</a>
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
      <button onClick={onRent}>Mieten</button>
    </div>
  );
}

export default CarDetail;