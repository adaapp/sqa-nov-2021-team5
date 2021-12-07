import './App.css';
import RomanConverter from './components/RomanConverter.js'

function App() {
  
  function sayHello() {
    console.log("Clicked")
    } 


  return (
    <div className="App">
      <RomanConverter/>
    </div>
  );
}

export default App;
