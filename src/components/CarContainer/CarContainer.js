import './CarContainer.css'
import CarCard from "../CarCard/CarCard";
import { useState, useEffect } from 'react';
import axios from '../../../src/axiosUrl';
import { useSelector, useDispatch } from 'react-redux';
import { loadCars } from '../../reducer/reducer';

const CarContainer = props => {
  let cars = useSelector((state) => {return state.cars})
  const dispatch = useDispatch();

  const [allCategories, setAllCategories] = useState();
  const [allCars, setAllCars] = useState([]);

  useEffect(() => {
    dispatch(loadCars())
    getAllCategories()
  },[dispatch])

  useEffect(() => {
    mapCars(cars);
  }, [cars]);

  const mapCars = data => {
    if (data?.length > 0) {
      const cars = data.map((v, i) => {
        return <CarCard car={v} key={v._id} />;
      })
      setAllCars(cars)
    } else {
      setAllCars([]);
    }
  }

  const onLogout = () => {
    axios.post("/logout")
    .then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  // Categories

  const getAllCategories = () => {
    axios.get("/carrental/cartypes")
    .then((res) => {
      setAllCategories(res.data)
    }).catch((err) => {
      console.log(err);
    })
  }

  const categories = allCategories?.map((v, i) => {
    return (
      <option key={v._id} value={v._id}>{v.cartype}</option>
    )
  })

  const onCategoryChange = (e) => {
    console.log(e.target.value)
    axios.get("/carrental/cars/" + e.target.value)
    .then((res) => {
      mapCars(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className='content'>
      <div className='content__header'>
        <h1>Carrental App</h1>
        <div className='content__header__buttons'>
          <a href="/login" className='content__header__buttons__loginBtn'>Login</a>
          <button className='content__header__buttons__logoutBtn' onClick={onLogout}>Logout</button>
        </div>
      </div>
      <div className='content__filters'>
        <div>
          <input type="text" placeholder='Suche'/>
          <select name="categories" id="1" onChange={onCategoryChange}>
            <option></option>
            {categories}
          </select>
        </div>
      </div>
      <div className='content__carArea'>
        {allCars}
      </div>
      <div className='content__footer'>
        <div className="content__footer__buttons">
          <a href="/newRental">Auto der Vermietung hinzufügen</a>
        </div>
      </div>
    </div>
  );
}

export default CarContainer;

