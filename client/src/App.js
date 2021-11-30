import './App.css';

function App() {
  
  function sayHello() {
    console.log("Clicked")
    } 


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Roman numerals converter</h1>
        </div>
        <div>
        <form>
          <label>Enter Number:
            <input type="text" />
          </label>
        </form>
        </div>
        <div>
        <form>
          <label>Enter Roman Number:
            <input type="text" />
          </label>
        </form>
        </div>
        <div>
        <button onClick={sayHello}>Convert</button>
        </div>
      </header>
    </div>
  );
}

export default App;
