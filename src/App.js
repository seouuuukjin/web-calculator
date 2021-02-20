import React from "react"

class App extends React.Component {
  state = {
    result: 0
  };
  handleClick_1= () => {
    alert(1);
  }
  handleClick_2= () => {
    alert(1);
  }
  handleClick_3= () => {
    alert(1);
  }
  handleClick_4= () => {
    alert(1);
  }
  handleClick_5= () => {
    alert(1);
  }
  handleClick_6= () => {
    alert(1);
  }
  handleClick_7= () => {
    alert(1);
  }
  handleClick_8= () => {
    alert(1);
  }
  handleClick_9= () => {
    alert(1);
  }
  handleClick_0= () => {
    alert(1);
  }
  render(){
    const {result} = this.state;
    const {handleClick_0} = this.handleClick_0
    return (
    <div class = "cal">
      <div id = "arr1">
        <button onClick={handleClick_0}>1</button>
        <button onClick={handleClick_0}>2</button>
        <button onClick={handleClick_0}>3</button>
        <button onClick={handleClick_0}>/</button>
      </div>
      <div id = "arr2">
        <button onClick={handleClick_0}>4</button>
        <button onClick={handleClick_0}>5</button>
        <button onClick={handleClick_0}>6</button>
        <button onClick={handleClick_0}>x</button>
      </div>
      <div id = "arr3">
        <button onClick={handleClick_0}>7</button>
        <button onClick={handleClick_0}>8</button>
        <button onClick={handleClick_0}>9</button>
        <button onClick={this.handleClick_9}>-</button>
      </div>
      <div id = "arr4">
        <button onClick={handleClick_0}>0</button>
        <button onClick={handleClick_0}>00</button>
        <button onClick={handleClick_0}>=</button>
        <button onClick={handleClick_0}>+</button>
      </div>
    </div>
    );
  }
}
export default App;
