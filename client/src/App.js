import './App.css';
import logo from './romaversio.png';
import column from './column.png';
import RomanConverter from './components/RomanConverter.js'

function App() {
  


  return (
    <div className="App">
        <div>
          <img src={logo} width="350" height="350" />
        </div>
      <RomanConverter/>
      <div className="Column-roman-number">
          <img src={column} width="380" height="620" />
        </div>
        <div className="Column-normal-number">
          <img src={column} width="380" height="620" />
        </div>
    </div>
  );
}

export default App;


