import './CarHistory.css';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadHistory } from '../../reducer/reducer';
import CarHistoryCard from '../HistoryCard/CarHistoryCard';

const CarHistory = () => {
  let cars = useSelector((state) => { return state.car.carHistory })
  const dispatch = useDispatch();
  const [allCars, setAllCars] = useState([]);

  useEffect(() => {
    dispatch(loadHistory())
  }, [dispatch])

  useEffect(() => {
    mapCars(cars);
  }, [cars]);

  const mapCars = data => {
    if (data?.length > 0) {
      const cars = data.map((v, i) => {
        console.log(v);
        return (
          <CarHistoryCard car={v} />
        )
      })
      setAllCars(cars)
    } else {
      setAllCars([]);
    }
  }

  return (
    <div>
      <p>CarHistory</p>
      <p>Autos die ich gemietet habe:</p>
      <div className='carHistoryContainer'>
        {allCars}
      </div>
    </div>
  )
};

export default CarHistory;