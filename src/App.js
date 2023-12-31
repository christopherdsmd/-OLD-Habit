import './Habbit.css';
import frog_emoji from './frog_emoji.png';
import DateTime from './dateandtime';
import { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './habitTracker.tsx'
import DynamicCheckbox from './habitTracker.tsx'
import { getRandomInt, getDailyRandomInt } from './randomNumber.jsx';
import { lightDarkmode } from './random_frog_img.js';

//random image 
//<img src={`${process.env.PUBLIC_URL}/frog_photos/frog_0.png`} alt="frog_emoji" />

function App() {
const DailyrandNum = getDailyRandomInt(); //var for daily random image  - img 
const RefreshrandNum  = getRandomInt();   //var for refresh page  refereshimage - img 


return (
<div className="App">
 <header className="App-header">
     <nav>
       <a href="https://www.linkedin.com/in/christopherpdesmond/"> about </a> 
        <button className='light/dark' onClick={lightDarkmode}>☀️</button>   
        </nav>
    <div className="header-content">
      <h2>Habbit!</h2>
      <img src={`${process.env.PUBLIC_URL}/frog_photos/frog_${DailyrandNum}.png`} alt="frog_emoji" width="128" height="128" />
      </div>
      <p>Daily Habit Tracker</p>
       <p>Welcome back - *name*</p>
    <div className = "Date and time">
    <hr className = 'solidline'></hr>
     <DateTime></DateTime>
      </div>
     <div className="container mt-5">
      <DynamicCheckbox/>
    </div>
  </header>
  </div>
  );
}

export default App;