import { useState } from 'react';
import './Login.css';
import axios from '../../../src/axiosUrl';
import { redirect } from 'react-router-dom';

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = e => {
    setEmail(e.target.value);
  }
  const onPasswordChange = e => {
    setPassword(e.target.value);
  }

  const onLogin=()=> {
    axios.post("/login", {
      email,
      password,})
    .then((res)=>{
      console.log(res);
      window.location.replace("./");
    }).catch((err)=>{
      console.log(err);
    });
  }

  return (
    <div>
      <p>Login</p>
      <p>Username:</p>
      <input type="text" value={email} onChange={onEmailChange} />
      <p>Passwort:</p>
      <input type="password" value={password} onChange={onPasswordChange} />
      <button onClick={onLogin}>Login</button>
      <p>Noch keinen Account? <a href="/signUp">sign up</a></p>
    </div>
  );
}

export default Login;