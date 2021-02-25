import React from "react"

// const result = {
//   answer: 0,
//   arr: []
// }
// function handleClick_1({answer, arr}){
//   console.log(arr);
//   {arr} = {arr}.concat(1)
//   return (
    
//   );
// }

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
    //this.handleClick을 바인딩하지 않고 onClick에 전달하였다면, 함수가 실제 호출될 때 this는 undefined가 됩니다.
  }
  // handleClick_division = () => {
  //   const {arr} = this.state.arr;
  //   this.setState({ arr : [...this.state.arr, "/"] });
  //   //alert(1);
  //   console.log(this.state.arr)
  // }
  handleClick_1(){
    this.setState(state => ({isToggleOn: !state.isToggleOn}));
  }
  render() {
    return (
    <div class = "cal">
      <div id = "resultArea">
        <h1 name = "window">Window Here</h1>
      </div>
      <div id = "arr1">
        <button onClick={this.handleClick_1} style={style}>
          1
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        {/*
        <button onClick={this.handleClick_2} style={style}>2</button>
        <button onClick={this.handleClick_3} style={style}>3</button>
        <button onClick={this.handleClick_division} style={style}>/</button>
        */}
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
  }
  const Button = styled.button`
    backgroundColor: 'skyblue';
    padding: '30px';
    color: 'white';
    fontSize: '20px';
    width : '10%';
  `;
export default App;
