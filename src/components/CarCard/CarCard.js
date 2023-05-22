import './CarCard.css'

const CarCard = car => {
  //`./carrental/cars/${car.car._id}`
  return (
    <div className='card'>
      <a className='card__link' href={`/cars/${car.car._id}`}>
        <img className="card__link__carImage" src={car.car.href} alt="Auto" />
        <p>Brand: {car.car.brand}</p>
        <p>Modell: {car.car.carmodel}</p>
        <p>Preis: {car.car.price} €</p>
        <p>Kilometer: {car.car.kilometers}</p>
        <p>PS: {car.car.horsepower}</p>
        <p>Gewicht: {car.car.weight}</p>
        <p>Türen: {car.car.doors}</p>
      </a>
    </div>
  );
}

export default CarCard;