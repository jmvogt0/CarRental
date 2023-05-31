import './CarHistory.css';

import { useEffect, useState } from 'react';
import axios from '../../../src/axiosUrl';

const CarHistory = () => {
  const [allCars, setAllCars] = useState([]);
  useEffect(() => {
    const carHistoryUrl = `/carrental/rented`;
    axios.get(carHistoryUrl)
    .then((res) => {
      console.log(res.data);
      setAllCars(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])

  return (
    <div>
      <p>CarHistory</p>
      <p>Autos die ich gemietet habe:</p>
      {JSON.stringify(allCars)} 
    </div>
  )
};

export default CarHistory;