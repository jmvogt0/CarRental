import { useState } from 'react';
import './Login.css';
import axios from '../../../src/axiosUrl';
import { redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedIn } from '../../actions/actions'

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

  const onEmailChange = e => {
    setEmail(e.target.value);
  }
  const onPasswordChange = e => {
    setPassword(e.target.value);
  }

  const onErrorMsgChange = err => {
    setErrorMsg(err.response.data);
  }

  const onLogin=()=> {
    axios.post("/login", {
      email,
      password,})
    .then((res)=>{
      console.log(res);
      dispatch(setLoggedIn(true));
      window.location.replace("./");
    }).catch((err)=>{
      onErrorMsgChange(err);
      console.log(err);
    });
  }

  return (
    <div className='pageContainer'>
      <div className='pageContainer__LoginContainer'>
        <p>Login</p>
        <p>Username:</p>
        <input type="text" value={email} onChange={onEmailChange} />
        <p>Passwort:</p>
        <input type="password" value={password} onChange={onPasswordChange} />
        <button className="actionBtn" onClick={onLogin}>Login</button>
        <p className="errorMsg"> {errorMsg} </p>
        <p>Noch keinen Account? <a href="/signUp">sign up</a></p>
      </div>
    </div>
  );
}

export default Login;