import './App.css';
import { Outlet } from 'react-router-dom';
import { setLoggedIn } from './actions/actions'
import { useSelector, useDispatch } from 'react-redux';
import axios from './axiosUrl';

function App() {
  const isLoggedIn = useSelector((state) => { return state.login.isLoggedIn })
  const dispatch = useDispatch();

  const onLogout = () => {
    axios.post("/logout")
      .then((res) => {
        dispatch(setLoggedIn(false));
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className='Content'>
      <div className='content__header'>
        <h1>Carrental App</h1>
        <div className='content__header__buttons'>
          {isLoggedIn ? <button className='content__header__buttons__logoutBtn' onClick={onLogout}>Logout</button> : <a href="/login" className='content__header__buttons__loginBtn'>Login</a>}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
