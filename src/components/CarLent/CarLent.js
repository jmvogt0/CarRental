import './CarLent.css';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadLentHistory } from '../../reducer/reducer';
import CarCard from '../CarCard/CarCard';

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
          <div>
            <CarCard car={v} key={v._id} />
            <div>
              <p>Gemietet von:</p>
              {mapRented(v.rented)}
            </div>
          </div>
        )
      })
      setAllCars(cars)
    } else {
      setAllCars([]);
    }
  }

  const mapRented = data => {
    if (data?.length > 0) {
      return data.map((v, i) => {
        return (
          <div>
            <p>{v.name} {new Date(v.date).toLocaleDateString()} </p>
          </div>)
      })
    } else {
      return <p>Keine Autos ausgeliehen</p>
    }
  }

  return (
    <div>
      <p>CarHistory</p>
      <p>Autos die ich vermietet habe:</p>
      {allCars}
      <a href="./">Back to Main</a>
    </div>
  )
};

export default CarLent;