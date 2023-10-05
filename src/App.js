import './App.css';
import {
  BrowserRouter as Router, Route, Routes, NavLink,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { ComponentFromReactBootstrap } from 'react-bootstrap';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import logo from './assets/logo.png';
import { getDataFromServer } from './redux/Rockets/RocketsSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataFromServer());
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <header>
          <div className="header-container">
            <div className="header-left">
              <div className="logo-container">
                <img src={logo} className="logo" alt="header logo" />
                <h1 className="header-title">Space Travelars Hub</h1>
              </div>
              <nav>
                <ul className="links">
                  <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Rockets</NavLink>
                  </li>
                  <li>
                    <NavLink to="missions" className={({ isActive }) => (isActive ? 'active-link' : '')}>Missions</NavLink>
                  </li>
                  <li>
                    <NavLink to="myprofile" className={({ isActive }) => (isActive ? 'active-link' : '')}>My Profile</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="missions" element={<Missions />} />
          <Route path="myprofile" element={<MyProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
