import './CarContainer.css'
import CarCard from "../CarCard/CarCard";
import { useState, useEffect } from 'react';
import axios from '../../../src/axiosUrl';
import { useSelector, useDispatch } from 'react-redux';
import { loadCars } from '../../reducer/reducer';
import { setLoggedIn } from '../../actions/actions'

const CarContainer = props => {
  let cars = useSelector((state) => { return state.car.cars })
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => { return state.login.isLoggedIn })

  const [allCategories, setAllCategories] = useState();
  const [allCars, setAllCars] = useState([]);

  useEffect(() => {
    dispatch(loadCars())
    getAllCategories()
  }, [dispatch])

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
        dispatch(setLoggedIn(false));
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
    axios.get("/carrental/cars/" + e.target.value)
      .then((res) => {
        mapCars(res.data);
      }).catch((err) => {
        console.log(err);
      })
  }

  const onSearchInputChange = (e) => {
    if (e.target.value !== "") {
      axios.get("/carrental/search?tags=" + e.target.value)
      .then((res) => {
        mapCars(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    } else {
      dispatch(loadCars());
    }
  }

  return (
    <div className='content'>
      <div className='content__header'>
        <h1>Carrental App</h1>
        <div className='content__header__buttons'>
          {isLoggedIn ? <button className='content__header__buttons__logoutBtn' onClick={onLogout}>Logout</button> : <a href="/login" className='content__header__buttons__loginBtn'>Login</a>}
        </div>
      </div>
      <div className='content__filters'>
        <div>
          {isLoggedIn ? <input type="text" placeholder='Suche' onChange={onSearchInputChange} /> : null}
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
          <a href="/rented">Autos die ich gemietet habe</a>
          <a href="/lent">Autos die ich vermietet habe</a>
        </div>
      </div>
    </div>
  );
}

export default CarContainer;

