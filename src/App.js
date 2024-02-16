import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) {
    e.preventDefault();
    console.log(inputRef);
    console.log(resultRef);
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  	// Add the code for the minus function 
  };
 
  function times(e) { 
    // Add the code for the plus function 
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }; 
 
  function divide(e) { 
    // Add the code for the divide function 
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
    e.preventDefault();
    // setResult(null);
    inputRef.current.value = 0;
  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function 
     e.preventDefault();
    setResult(null);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          { result } 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus} className="button">add</button> 
        <button onClick={minus} className="button">Substract</button> 
        <button onClick={times} className="button">multiply</button> 
        <button onClick={divide} className="button">divide</button> 
        <button onClick={resetInput} className="button">reset input</button> 
        <button onClick={resetResult} className="button">reset result</button> 
        {/* Add the subtract button */} 
        {/* Add the multiply button */} 
        {/* Add the divide button */} 
        {/* Add the resetInput button */} 
        {/* Add the resetResult button */} 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
