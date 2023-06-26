import './CarDetail.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { loadCar } from '../../reducer/reducer';

const CarDetail = ({ carID }) => {
  const car = useSelector((state) => { return state.car.car })
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => { return state.login.isLoggedIn })

  const { rentalId } = useParams();

  useEffect(() => {
    const carUrl = `/carrental/car/${rentalId}`;
    dispatch(loadCar(carUrl))
  }, [rentalId, dispatch])

  const onRent = () => {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    url.pathname += "/rent";
    const updatedUrl = url.toString();

    window.location.href = updatedUrl;
  }

  return (
    <div class="carDetail__container">
      <img src={car?.href} alt="Auto" />
      <div className='carDetail__textContainer'>
        <div>
          <p className="carDetail__container__headline">{car?.brand} {car?.carmodel}</p>
          <p>{car?.price} € / Tag</p>
        </div>
        
        
        <p>{car?.kilometers} KM</p>
        <p>{car?.horsepower} PS</p>
        <p>{car?.weight} KG</p>
        <p>{car?.doors} Türen</p>
        <p>Beschreibung:</p>
        <p>{car?.description}</p>
      </div>
      {isLoggedIn? <button className="carDetail__actionBtn" onClick={onRent}> Jetzt Mieten !</button> : <p>Bitte einloggen um zu mieten</p>}
    </div>
  );
}

export default CarDetail;