import { useState } from 'react';
import axios from '../../../src/axiosUrl'
import './Rental.css';

const Rental = props => {
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState("");
  const [carmodel, setCarModel] = useState("");
  const [kilometers, setKilometers] = useState(0);
  const [horsepower, sethorsepower] = useState(0);
  const [weight, setWeight] = useState(0);
  const [doors, setDoors] = useState(0);
  const [description, setDescription] = useState("");
  const [href, setHref] = useState("");

  //onChange functions
  const onPriceChange = e => {
    setPrice(e.target.value);
  };
  const onBrandChange = e => {
    setBrand(e.target.value);
  };
  const onCarModelChange = e => {
    setCarModel(e.target.value);
  };
  const onKilometerChange = e => {
    setKilometers(e.target.value);
  };
  const onHorsepowerChange = e => {
    sethorsepower(e.target.value);
  };
  const onWeightChange = e => {
    setWeight(e.target.value);
  };
  const onDoorsChange = e => {
    setDoors(e.target.value);
  };
  const onDescriptionChange = e => {
    setDescription(e.target.value);
  };
  const onHrefChange = e => {
    setHref(e.target.value);
  };

  const onSave=()=> {
    let rentalObj = {
      owner: "646b65be26cf7e1b72c40f22",
      cartype: "646b75150bcdca0fdefca3d7",
      price,
      brand,
      carmodel,
      kilometers,
      horsepower,
      weight,
      doors,
      active: true,
      description,
      href,
    }
    console.log(rentalObj);
    axios.post("/carrental/rental/", rentalObj)
    .then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div>
      <p>Rental</p>
      <p>Preis</p>
      <input type="number" value={price} onChange={onPriceChange}/>
      <p>Marke</p>
      <input type="text" value={brand} onChange={onBrandChange}/>
      <p>Modell</p>
      <input type="text" value={carmodel} onChange={onCarModelChange}/>
      <p>Kilometer</p>
      <input type="number" value={kilometers} onChange={onKilometerChange}/>
      <p>Leistung</p>
      <input type="number" value={horsepower} onChange={onHorsepowerChange}/>
      <p>Gewicht</p>
      <input type="number" value={weight} onChange={onWeightChange}/>
      <p>Türen</p>
      <input type="number" value={doors} onChange={onDoorsChange}/>
      <p>Beschreibung</p>
      <textarea type="text" value={description} onChange={onDescriptionChange}/>
      <p>Bild-Url</p>
      <input type="text" value={href} onChange={onHrefChange}/>
      <button onClick={onSave}>Speichern</button>
    </div>
  );
}

export default Rental;