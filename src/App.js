import React from "react"

function App() {
  const handleClick = (num) => {
    alert(num);
  }

  return (
  <div class = "cal">
    <div id = "arr1">
      <button onClick={handleClick("1")}>1</button>
      <button onClick={handleClick}>2</button>
      <button onClick={handleClick}>3</button>
      <button onClick={handleClick}>/</button>
    </div>
    <div id = "arr2">
      <button onClick={handleClick}>4</button>
      <button onClick={handleClick}>5</button>
      <button onClick={handleClick}>6</button>
      <button onClick={handleClick}>x</button>
    </div>
    <div id = "arr3">
      <button onClick={handleClick}>7</button>
      <button onClick={handleClick}>8</button>
      <button onClick={handleClick}>9</button>
      <button onClick={handleClick}>-</button>
    </div>
    <div id = "arr4">
      <button onClick={handleClick}>0</button>
      <button onClick={handleClick}>00</button>
      <button onClick={handleClick}>=</button>
      <button onClick={handleClick}>+</button>
    </div>
  </div>
  );
}
export default App;
