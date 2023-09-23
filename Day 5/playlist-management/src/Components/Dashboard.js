import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; 
import { logoutUser } from '../Redux/authAction';
import '../styles/dashboard.css'; // Import your dashboard CSS for styling
import '../styles/card.css';
import Navbar from './Navbar';

function Dashboard() {
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user); // Get user data from Redux
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch a logout action
    dispatch(logoutUser());
    // Redirect to the login page (you can use react-router-dom for this)
    navigate('/');
  };

  return (
    <>    
    <Navbar/>
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">PLAY-DASH</div>
        <ul>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/academic">Your Library</a></li>
          <li><a href="/application">Account</a></li>
          <li><a href="/applications">Settings</a></li>
        </ul>
      </div>
      <div className="content">
        <header>
          <div className="top-nav">
            <div className="welcome">Welcome, {user.email}</div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </header>
        
        <main>
          {/* Your dashboard content goes here */}
          <h1>Your jam is our jam!</h1>
          <p>Binge playlists of your choice!!</p>
        </main>
        <div className='card-row'>
        <div className="card">
      <h2>Playlist 1</h2>
      <p>all time,any time</p>
    </div>
        <div className="card">
      <h2>Mid-Day Playlist</h2>
      <p>when boredom hits</p>
    </div>
        <div className="card">
      <h2>Night Play</h2>
      <p>calm your mind</p>
    </div>
    </div>
      </div>
    </div>
    </>

  );
}

export default Dashboard;