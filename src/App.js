import './Habbit.css';
import frog_emoji from './frog_emoji.png';
import DateTime from './dateandtime';

function App() {
  return (
    <div className="App">
 <header className="App-header">
           <nav>
              <a href="https://www.linkedin.com/in/christopherpdesmond/">about</a> 
              <button>light/dark mode</button>   
            </nav>
        <div className="header-content">
          <h2>Habbit!</h2>
          <img src={frog_emoji} alt="frog_emoji" width="128" height="128" />
        </div>
        <p>Daily Habbit Tracker</p>
        <p>Welcome back - *name*</p>
      <div className = "Date and time">
      <p>-----------------------</p>
        <DateTime></DateTime>
        </div>
        </header>

    </div>
  );
}

export default App;
