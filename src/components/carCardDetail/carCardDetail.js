import "./carCardDetail.css";

const carCardDetail = ({ car }) => {
  console.log(car);
  return (
    <div>
      <img src={car?.href} alt="Auto" />
      <div className='carDetail__textContainer'>
        <div>
          <p className="carDetail__container__headline">{car?.brand} {car?.carmodel}</p>
          <p>{car?.price} € / Tag</p>
        </div>
        <p>{car?.kilometers} KM</p>
        <p>{car?.horsepower} PS</p>
        <p>{car?.weight} KG</p>
        <p>{car?.doors} Türen</p>
        <p>Bisher gemietet: {car?.rentedLength} Tage</p>
        <p>Beschreibung:</p>
        <p>{car?.description}</p>
      </div>
    </div>
  );
};

export default carCardDetail;