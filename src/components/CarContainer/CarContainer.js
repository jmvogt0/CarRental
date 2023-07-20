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
    console.log("searchValue: " + e.target.value);
    if (e.target.value !== "") {
      const searchValue = e.target.value;
      setSearchValue(searchValue);
      onSearchAndDateInputChange(searchValue, date);
    } else {
      setSearchValue("");
      dispatch(loadCars());
    }
  }

  const onDateInputChange = (e) => {
    if (e.target.value !== "") {
      const date = e.target.value;
      setDate(date);
      onSearchAndDateInputChange(searchValue, date);
    } else {
      setDate("");
      dispatch(loadCars());
    }
  }

  //Function which combines both filters
  const onSearchAndDateInputChange = (searchValue, date) => {
    console.log("searchValue: " + searchValue + " date: " + date);
    if (searchValue !== "" && date !== "") {
      console.log("both");
      date = new Date(date).getTime();
      dispatch(loadSearchCar("?tags=" + searchValue + "&date=" + date));
    } else if (searchValue !== "" && date === "") {
      console.log("just searchValue");
      dispatch(loadSearchCar("?tags=" + searchValue));
    } else if (searchValue === "" && date !== "") {
      date = new Date(date).getTime();
      console.log("just Date");
      dispatch(loadSearchCar("?date=" + date));
    } else {
      console.log("no filter");
    }
  }
  return (
    <div className='content'>
      <div className='content__filters__container'>
        <div className="content__filters">
          <div className='content__filters__filter'>
            {isLoggedIn ? <input type="text"  placeholder='Suche' onInput={onSearchInputChange} className='content__filters__searchinput'/> : null}
            {isLoggedIn ? <input type="date" placeholder='Datum' onInput={onDateInputChange} className='content__filters__searchinput'/> : null}
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

