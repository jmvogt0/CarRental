import './CarHistory.css';

import { useEffect, useState } from 'react';
import axios from '../../../src/axiosUrl';
import CarCard from '../CarCard/CarCard';

const CarHistory = () => {
  const [allCars, setAllCars] = useState([]);
  useEffect(() => {
    const carHistoryUrl = `/carrental/rented`;
    axios.get(carHistoryUrl)
    .then((res) => {
      console.log(res.data);
      mapCars(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])

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
      console.log(data);
      return data.map((v, i) => {
        console.log(v.name);
        return (
          <div>
            <p>{v.date}</p>
          </div>)
      })
    } else {
      return <p>Keine Autos vermietet</p>
    }
  }

  return (
    <div>
      <p>CarHistory</p>
      <p>Autos die ich gemietet habe:</p>
      {allCars}
    </div>
  )
};

export default CarHistory;