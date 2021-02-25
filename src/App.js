import React from "react"

const result = {
  answer: 0,
  arr: []
}
function handleClick_1({answer, arr}){
  // //this.App = this.App.bind (this);
  // const {arr} = this.state.arr;
  // this.setState({
  //   arr: {arr}.concat(1)
  // })
  // //alert(1);
  // console.log(this.state.arr)
  {arr} = {arr}.concat(1);
  console.log(arr);
}

function App(){

  

  // handleClick_division = () => {
  //   const {arr} = this.state.arr;
  //   this.setState({ arr : [...this.state.arr, "/"] });
  //   //alert(1);
  //   console.log(this.state.arr)
  // }
    const style = {
      backgroundColor: 'skyblue',
      padding: '30px',
      color: 'white',
      fontSize: '20px',
      width : '10%'
    };
    return (
    <div class = "cal">
      <div id = "resultArea">
        <h1 name = "window">Window Here</h1>
      </div>
      <div id = "arr1">
        <button onClick={handleClick_1} style={style}>1</button>
        <button onClick={this.handleClick_2} style={style}>2</button>
        <button onClick={this.handleClick_3} style={style}>3</button>
        <button onClick={this.handleClick_division} style={style}>/</button>
      </div>
      {/* <div id = "arr2">
        <button onClick={this.handleClick_4} style={style}>4</button>
        <button onClick={this.handleClick_5} style={style}>5</button>
        <button onClick={this.handleClick_6} style={style}>6</button>
        <button onClick={this.handleClick_multiple} style={style}>x</button>
      </div>
      <div id = "arr3">
        <button onClick={this.handleClick_7} style={style}>7</button>
        <button onClick={this.handleClick_8} style={style}>8</button>
        <button onClick={this.handleClick_9} style={style}>9</button>
        <button onClick={this.handleClick_minus} style={style}>-</button>
      </div>
      <div id = "arr4">
        <button onClick={this.handleClick_0} style={style}>0</button>
        <button onClick={this.handleClick_doubleZero} style={style}>00</button>
        <button onClick={this.handleClick_equal} style={style}>=</button>
        <button onClick={this.handleClick_plus} style={style}>+</button>
      </div> */}
    </div>
    );
  }
export default App;
