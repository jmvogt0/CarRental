import './CarDetail.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { loadCar } from '../../reducer/reducer';

const CarDetail = ({ carID }) => {
  const car = useSelector((state) => { return state.car })
  console.log(car);
  const dispatch = useDispatch();

  const { rentalId } = useParams();

  useEffect(() => {
    const carUrl = `/carrental/car/${rentalId}`;
    console.log(rentalId);
    dispatch(loadCar(carUrl))
    console.log();
  }, [rentalId, dispatch])


  console.log(car);
  return (
    <div>
      <p>CarDetail</p>
      <p>ID: {rentalId}</p>
      <div>
        <p>Card</p>
        <p>ID: {car?._id}</p>
        <p>Typ: {car?.cartype}</p>
        <p>Brand: {car?.brand}</p>
        <p>Modell: {car?.carmodel}</p>
        <p>Preis: {car?.price}</p>
        <p>Kilometer: {car?.kilometers}</p>
        <p>PS: {car?.horsepower}</p>
        <p>Gewicht: {car?.weight}</p>
        <p>Türen: {car?.doors}</p>
        <p>Active: {car?.active}</p>
        <p>Beschreibung: {car?.description}</p>
        <img src={car?.href} alt="Auto" />
        <p>_v: {car?._v}</p>
        <p>Besitzer: {car?.owner}</p>
        <p>Mietdauer: {car?.rentedLength}</p>
      </div>
    </div>
  );
}

export default CarDetail;