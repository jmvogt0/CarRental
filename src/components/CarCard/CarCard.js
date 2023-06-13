import './CarCard.css'

const CarCard = (props) => {
  const hideBtn = props.hideBtn;
  const car = props.car;
  return (
    <div className='card'>
      <img className="card__link__carImage" src={car.href} alt="Auto" />
      <div className='card__textContainer'>
        <p className="card__textContainer__headline">{car.brand} {car.carmodel}</p>
        <div className="card__textContainer__textline"><p>{car.horsepower} ps</p><p>{car.weight} kg</p></div>
        <div className='card__textContainer__textline'><p>{car.kilometers} km</p><p>{car.doors} Türen</p></div>
        <p className='card__textContainer__price'>{car.price} € / Tag</p>
        
       
      </div>
      {hideBtn === false ? <div className="card__button__container">
        <a href={`/cars/${car._id}`} className="card__button">Verfügbarkeit prüfen</a>
      </div> : null}
    </div>
  );
}

export default CarCard;