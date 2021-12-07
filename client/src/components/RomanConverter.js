import React, {useState} from 'react';
import Axios from 'axios';
import '../App.css';

function RomanConverter(){
    const [numbers, setNumbers] = useState({romanNumber: "", normalNumber: "", action: ""})

    
    const romanDecoder = () => {
        Axios.post("http://localhost:5000/roman-decoder", {romanNumber: numbers.romanNumber}).then((response => {
            setNumbers({romanNumbmer: numbers.romanNumber, normalNumber: response.data, action: "roman-decode"})
        }))
    }

    const romanEncoder = () => {
        Axios.post("http://localhost:5000/roman-encoder", {normalNumber: numbers.normalNumber}).then((response => {
            setNumbers({normalNumber: numbers.normalNumber, romanNumber: response.data, action: "roman-encode"})
        }))
    }

    const convert = () => {
        if(numbers.action == "roman-decode"){
            romanDecoder()
        }
        if(numbers.action == "roman-encode"){
            romanEncoder()
        }
    }

    const clear = () => {
        setNumbers({romanNumber: "", normalNumber: "", action: ""})
    }


    return  <div id="root">
               
                <div>
                    <h1>Roman numerals converter</h1>
                </div>
                <div>
                 
                        {(!numbers.romanNumber && !numbers.normalNumber)
                        ?   <div>   
                                <input type="text" placeholder="Normal Number" value={numbers.normalNumber} onChange={(event) => {setNumbers({normalNumber: event.target.value, action: "roman-encode"})}}/> 
                                <input type="text" placeholder="Roman Number" value={numbers.romanNumber} onChange={(event) => {setNumbers({romanNumber: event.target.value, action: "roman-decode"})}}/>
                            </div>
                        
                        : (numbers.action === "roman-encode" && numbers.normalNumber)

                            ?   <div>   
                                    <input type="text" placeholder="Normal Number" onChange={(event) => {setNumbers({normalNumber: event.target.value, action: "roman-encode"})}}/> 
                                    <input type="text" placeholder="Roman Number" disabled={true} value={numbers.romanNumber}/>
                                </div>


                            :   <div>
                                    <input type="text" placeholder="Normal Number" disabled={true} value={numbers.normalNumber}/>
                                    <input type="text" placeholder="Roman Number" onChange={(event) => {setNumbers({romanNumber: event.target.value, action: "roman-decode"})}}/>
                                </div>
                    }
                  
                </div>
                <div>
                    <button onClick={convert}>Convert</button>
                    <button onClick={clear}>Clear</button>
                </div>
            </div>
}

export default RomanConverter;