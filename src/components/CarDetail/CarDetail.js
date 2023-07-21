import './CarDetail.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { loadCar } from '../../reducer/reducer';

import CarCardDetail from '../carCardDetail/carCardDetail';

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
    <div className="carDetail__container">
      <CarCardDetail car={car} />
      {isLoggedIn? <button className="carDetail__actionBtn" onClick={onRent}> Jetzt Mieten !</button> : <p>Bitte einloggen um zu mieten</p>}
    </div>
  );
}

export default CarDetail;