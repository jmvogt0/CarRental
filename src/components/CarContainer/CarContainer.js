import './CarContainer.css'
import CarCard from "../CarCard/CarCard";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCars, loadCarCategories, loadSearchCar, loadCategoryChange } from '../../reducer/reducer';

const CarContainer = props => {
  let cars = useSelector((state) => { return state.car.cars })
  let allCategories = useSelector((state) => { return state.car.carCategories })
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => { return state.login.isLoggedIn })

  const [allCars, setAllCars] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    dispatch(loadCars())
    dispatch(loadCarCategories())
  }, [dispatch])

  useEffect(() => {
    mapCars(cars);
  }, [cars]);

  const mapCars = data => {
    if (data?.length > 0) {
      const cars = data.map((v, i) => {
        return <CarCard car={v} key={v._id} hideBtn={false}/>;
      })
      setAllCars(cars)
    } else {
      setAllCars([]);
    }
  }

  const categories = allCategories?.map((v, i) => {
    return (
      <option key={v._id} value={v._id}>{v.cartype}</option>
    )
  })

  const onCategoryChange = (e) => {
    dispatch(loadCategoryChange(e.target.value));
  }

  const onSearchInputChange = (e) => {
    if (e.target.value !== "") {
      const searchValue = e.target.value;
      setSearchValue(searchValue);
      onSearchAndDateInputChange(searchValue, date);
    } else {
      dispatch(loadCars());
    }
  }

  const onDateInputChange = (e) => {
    if (e.target.value !== "") {
      const date = e.target.value;
      setDate(date);
      onSearchAndDateInputChange(searchValue, date);
    } else {
      dispatch(loadCars());
    }
  }

  //Function which combines both filters
  const onSearchAndDateInputChange = (searchValue, date) => {
    if (searchValue !== "" && date !== "") {
      date = new Date(date).getTime();
      dispatch(loadSearchCar("?tags=" + searchValue + "&date=" + date));
    } else if (searchValue !== "" && date === "") {
      dispatch(loadSearchCar("?tags=" + searchValue));
    } else if (searchValue === "" && date !== "") {
      date = new Date(date).getTime();
      dispatch(loadSearchCar("?date=" + date));
    }
  }
  return (
    <div className='content'>
      <div className='content__filters__container'>
        <div className="content__filters">
          <div className='content__filters__filter'>
            {isLoggedIn ? <input type="text"  placeholder='Suche' onChange={onSearchInputChange} className='content__filters__searchinput'/> : null}
            {isLoggedIn ? <input type="date" placeholder='Datum' onChange={onDateInputChange} className='content__filters__searchinput'/> : null}
            <select name="categories" id="1" onChange={onCategoryChange} className='content__filters__select'>
              <option></option>
              {categories}
            </select>
          </div>
          {isLoggedIn ? 
            <div className='content__filters__buttons'>
              <a href="/rented">Historie</a>
              <a href="/lent">meine Autos</a>  
            </div>
          : null}
        </div>
        </div>
      <div className='content__carArea'>
        {allCars}
      </div>
      <div className='content__footer'>
        <div className="content__footer__buttons">
        </div>
      </div>
    </div>
  );
}

export default CarContainer;

