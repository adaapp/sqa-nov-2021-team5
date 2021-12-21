import './App.css';
import logo from './romaversio.png';
import column from './column.png';
import RomanConverter from './components/RomanConverter.js'

function App() {
  


  return (
    <div className="App">
        <div>
          <img alt="Website logo, featuring a Roman style helmet and the word Romaversio" src={logo} width="350" height="350" />
        </div>
      <RomanConverter/>
      <div className="Column-roman-number">
          <img alt="An image of a Roman style pillar" src={column}/>
        </div>
        <div className="Column-normal-number">
          <img alt="An image of a Roman style pillar" src={column}/>
        </div>
    </div>
  );
}

export default App;


