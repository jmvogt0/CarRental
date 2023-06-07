import './CarLent.css';

import { useEffect, useState } from 'react';
import axios from '../../../src/axiosUrl';

import CarCard from '../CarCard/CarCard';

const CarLent = () => {
  const [allCars, setAllCars] = useState([]);
  useEffect(() => {
    const carHistoryUrl = `/carrental/lent`;
    axios.get(carHistoryUrl)
    .then((res) => {
      console.log(res.data);
      //setAllCars(res.data);
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