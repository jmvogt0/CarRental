import './CarLent.css';

import { useEffect, useState } from 'react';
import axios from '../../../src/axiosUrl';

const CarLent = () => {
  const [allCars, setAllCars] = useState([]);
  useEffect(() => {
    const carHistoryUrl = `/carrental/lent`;
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
      <p>Autos die ich vermietet habe:</p>
      {JSON.stringify(allCars)} 
      <a href="./">Back to Main</a>
    </div>
  )
};

export default CarLent;