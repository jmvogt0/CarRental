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
        <a href='/' className='content__header__headline'><h1>Carrental</h1><p>rent now or walk later</p></a>
        <div className='content__header__buttons'>
          {isLoggedIn ? 
            <div className='content__header_buttons__group'>
              <div className='content__header__buttons__group__newCarBtn'>
                <a href="/newRental">Auto vermieten</a>
              </div>
              <button className='content__header__buttons__group__logoutBtn' onClick={onLogout}><svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="48"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43 102-102H375v-60h348L621-612l43-43 176 176-174 174Z"/></svg></button>
            </div>
            :
            <div className='content__header__buttons__loginBtn'>
              <a href="/login" className='content__header__buttons__loginBtn__anker'>Login</a>
            </div>
          }
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
