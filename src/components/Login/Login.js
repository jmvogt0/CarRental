import { useState } from 'react';
import './Login.css';

const Login = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = e => {
    setUsername(e.target.value);
  }
  const onPasswordChange = e => {
    setPassword(e.target.value);
  }

  const onSave=()=> {
    let loginObj = {
      username,
      password,
    }
    console.log(loginObj);
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
      <p>Login</p>
      <p>Username:</p>
      <input type="text" value={username} onChange={onUsernameChange} />
      <p>Passwort:</p>
      <input type="password" value={password} onChange={onPasswordChange} />
      <button onClick={onSave}>Login</button>
      <p>Noch keinen Account? <a href="/signUp">sign up</a></p>
    </div>
  );
}

export default Login;