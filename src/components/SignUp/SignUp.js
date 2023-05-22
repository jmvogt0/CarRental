import { useState } from 'react';
import './SignUp.css';

const Register = props => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [street, setStreet] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onFirstnameChange = e => {
    setFirstname(e.target.value);
  }
  const onLastnameChange = e => {
    setLastname(e.target.value);
  }
  const onStreetChange = e => {
    setStreet(e.target.value);
  }
  const onPostcodeChange = e => {
    setPostcode(e.target.value);
  }
  const onCityChange = e => {
    setCity(e.target.value);
  }
  const onCountryChange = e => {
    setCountry(e.target.value);
  }
  const onPhoneChange = e => {
    setPhone(e.target.value);
  }
  const onPasswordChange = e => {
    setPassword(e.target.value);
  }
  const onEmailChange = e => {
    setEmail(e.target.value);
  }

  const onSave=()=> {
    let signUpObj = {
      firstname,
      lastname,
      street,
      postcode,
      city,
      country,
      phone,
      password,
      email,
    }
    console.log(signUpObj);
    /*
    axios.post("/rental", rentalObj)
    .then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    }) */
  }

  return (
    <div>
      <p>Register</p>
      <p>Vorname</p>
      <input type="text" value={firstname} onChange={onFirstnameChange} />
      <p>Nachname</p>
      <input type="text" value={lastname} onChange={onLastnameChange} />
      <p>Straße</p>
      <input type="text" value={street} onChange={onStreetChange} />
      <p>Postleitzahl</p>
      <input type="number" value={postcode} onChange={onPostcodeChange} />
      <p>Stadt</p>
      <input type="text" value={city} onChange={onCityChange} />
      <p>Land</p>
      <input type="text" value={country} onChange={onCountryChange} />
      <p>Telefonnummer:</p>
      <input type="text" value={phone} onChange={onPhoneChange} />
      <p>Passwort:</p>
      <input type="password" value={password} onChange={onPasswordChange} />
      <p>Email</p>
      <input type="email" value={email} onChange={onEmailChange}/>
      <button onClick={onSave}>Registrieren</button>
    </div>
  );
}

export default Register;