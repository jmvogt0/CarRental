import './CarDetail.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const CarDetail = props => {
    const { rentalId } = useParams();
    const [car, setCar] = useState(
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
    );
    console.log(car);
    return (
        <div>
            <p>CarDetail</p>
            <p>ID: { rentalId }</p>
            <div>
                <p>Card</p>
                <p>ID: {car._id}</p>
                <p>Typ: {car.cartype}</p>
                <p>Brand: {car.brand}</p>
                <p>Modell: {car.carmodel}</p>
                <p>Preis: {car.price}</p>
                <p>Kilometer: {car.kilometers}</p>
                <p>PS: {car.horsepower}</p>
                <p>Gewicht: {car.weight}</p>
                <p>Türen: {car.doors}</p>
                <p>Active: {car.active}</p>
                <p>Beschreibung: {car.description}</p>
                <img src={car.href} alt="Auto" />
                <p>_v: {car._v}</p>
                <p>Besitzer: {car.owner}</p>
                <p>Mietdauer: {car.rentedLength}</p>
            </div>
        </div>
    );
}

export default CarDetail;