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
        window.location.replace("./");
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className='Content'>
      <div className='content__header'>
        <a href='./' className='content__header__headline'><h1>Carrental App</h1></a>
        <div className='content__header__buttons'>
          {isLoggedIn ? 
            <button className='content__header__buttons__logoutBtn' onClick={onLogout}>Logout</button>
            :
            <div className='content__header__buttons__loginBtn'>
              <a href="/login" className='content__header__buttons__loginBtn__anker'>Login</a>
            </div>}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
