import './CarLent.css';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadLentHistory } from '../../reducer/reducer';
import CarHistoryCard from '../HistoryCard/CarHistoryCard';

const CarLent = () => {
  let cars = useSelector((state) => { return state.car.lentHistory })
  const dispatch = useDispatch();
  const [allCars, setAllCars] = useState([]);

  useEffect(() => {
    dispatch(loadLentHistory())
  }, [dispatch])

  useEffect(() => {
    mapCars(cars);
  }, [cars]);

  const mapCars = data => {
    if (data?.length > 0) {
      const cars = data.map((v, i) => {
        return (
          <CarHistoryCard car={v} key={v._id} />
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
      <p>Autos die ich vermietet habe:</p>
      <div className='carHistoryContainer'>
        {allCars}
      </div>
    </div>
  )
};

export default CarLent;