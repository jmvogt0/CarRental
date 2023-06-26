import './CarHistoryCard.css';

const CarHistoryCard = (props) => {
  const car = props.car;
  const mapRented = data => {
    if (data?.length > 0) {
      return data.map((v, i) => {
        return (
          <div className="history__table__row">
            <p>{v.name}</p><p>{new Date(v.date).toLocaleDateString()} </p>
          </div>)
      })
    } else {
      return <p>Keine Autos ausgeliehen</p>
    }
  }
  return (
    <div className='carHistoryCard'>
      <img className="carHistoryCard__carImage" src={car.href} alt="Auto" />
      <div className='card__textContainer'>
        <p className="card__textContainer__headline">{car.brand} {car.carmodel}</p>
        <div className="card__textContainer__textline"><p>{car.horsepower} ps</p><p>{car.weight} kg</p></div>
        <div className='card__textContainer__textline'><p>{car.kilometers} km</p><p>{car.doors} Türen</p></div>
        <p className='card__textContainer__price'>{car.price} € / Tag</p>
      </div>
      <div className="carHistoryCard__historyContainer">
        <div className='history__table__row'><p className='redText'>Name</p><p className='redText'>Datum</p></div>
        {mapRented(car.rented)}
      </div>
    </div>
  )
}

export default CarHistoryCard;