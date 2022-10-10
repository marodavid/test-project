import logo from './logo.svg';
import './App.css';

function App() {

  const displayMyMessage = () => 'This is my message'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{displayMyMessage()}</p>
        <p>Thank you. We just updated.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Study React
        </a>
      </header>
    </div>
  );
}

export default App;
