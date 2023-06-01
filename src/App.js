import './App.css';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className='Content'>
      <p>Header Content hier rein!</p>
      <Outlet />
    </div>
  );
}

export default App;
