import './CarCard.css'

const CarCard = car => {
  //`./carrental/cars/${car.car._id}`
  return (
    <div>
      <p>Card</p>
      <p>ID: {car.car._id}</p>
      <a href={`/cars/${car.car._id}`}>Detailseite</a>
      <p>Typ: {car.car.cartype}</p>
      <p>Brand: {car.car.brand}</p>
      <p>Modell: {car.car.carmodel}</p>
      <p>Preis: {car.car.price}</p>
      <p>Kilometer: {car.car.kilometers}</p>
      <p>PS: {car.car.horsepower}</p>
      <p>Gewicht: {car.car.weight}</p>
      <p>Türen: {car.car.doors}</p>
      <p>Active: {car.car.active}</p>
      <p>Beschreibung: {car.car.description}</p>
      <img className="carImage" src={car.car.href} alt="Auto" />
      <p>_v: {car.car._v}</p>
      <p>Besitzer: {car.car.owner}</p>
      <p>Mietdauer: {car.car.rentedLength}</p>
    </div>
  );
}

export default CarCard;