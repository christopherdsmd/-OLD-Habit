import './Habbit.css';
import frog_emoji from './frog_emoji.png';
import DateTime from './dateandtime';
import { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './habitTracker.tsx'
import DynamicCheckbox from './habitTracker.tsx'
import { getRandomInt } from './randomNumber.jsx';


function App() {
  
  const randNum = getRandomInt();
  
  return (
    <div className="App">
 <header className="App-header">
           <nav>
              <a href="https://www.linkedin.com/in/christopherpdesmond/"> about </a> 
              <button>☀️</button>   
            </nav>
        <div className="header-content">
          <h2>Habbit!</h2>
          <img src={frog_emoji} alt="frog_emoji" width="128" height="128" />
        </div>
        <p>Daily Habit Tracker</p>
        <p>Welcome back - *name*</p>
      <div className = "Date and time">
     <hr className = 'solidline'></hr>
        <DateTime></DateTime>
        </div>
        <div className="container mt-5">
      <h2 className="mb-4">Habbits</h2>
      <DynamicCheckbox />
    </div>
    <img src={'./frog streak.png'} alt="frog_emoji"/>
    </header>
    </div>
  );
}

export default App;
