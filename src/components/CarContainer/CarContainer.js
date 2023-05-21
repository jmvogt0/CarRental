import './CarContainer.css'
import CarCard from "../CarCard/CarCard";
import { useState } from 'react';

const CarContainer = props => {
  const [cars, setCars] = useState(
    [
      {
        "tags": [
          "twingo"
        ],
        "_id": "63f5f3df2c3d640ed920c825",
        "cartype": "63f5e6b15538a309aa629b05",
        "price": 122.99,
        "brand": "Renault",
        "carmodel": "Twingo",
        "kilometers": 12123,
        "horsepower": 180,
        "weight": 1333,
        "doors": 5,
        "active": true,
        "description": "Top Zustand Renault Twingo zu mieten",
        "href": "https://images.ctfassets.net/uaddx06iwzdz/6zH7BXMBdZUq6ZKPnoMfSQ/cebd7c016a6c1ca9d7dd44ad96e05e2c/bmw-118-l-02.jpg",
        "_v": 0,
        "owner": "63d5eb0dda7d50c4b96d78e",
        "rentedLength": 0,
      },
      {
        "tags": [
          "3er"
        ],
        "_id": "63f5f3df2c3d640ed920c823",
        "cartype": "63f5e6b15538a309aa629b05",
        "price": 200.99,
        "brand": "BMW",
        "carmodel": "3er",
        "kilometers": 23623,
        "horsepower": 300,
        "weight": 2000,
        "doors": 5,
        "active": true,
        "description": "Top Zustand BMW 3er zu mieten",
        "href": "https://images.ctfassets.net/uaddx06iwzdz/6zH7BXMBdZUq6ZKPnoMfSQ/cebd7c016a6c1ca9d7dd44ad96e05e2c/bmw-118-l-02.jpg",
        "_v": 0,
        "owner": "63d5eb0dda7d50c4b96d78e",
        "rentedLength": 0,
      }
    ]);

  let allCars = null;
  allCars = cars.map((v, i) => {
    return <CarCard car={v} key={v._id} />;
  })
  return (
    <div>
      {allCars}
    </div>
  );
}

export default CarContainer;

