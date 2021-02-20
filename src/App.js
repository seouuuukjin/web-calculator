import React from "react"

class App extends React.Component {
  // state = {
  //   result: 0
  // };
  constructor(){
    super();
    this.state = {
      result: 0,
      arr: []
    };
  }
   handleClick_1= async () => {
    const {arr} = this.state;
    await this.setState({
      arr: arr.concat(1)
    })
    //alert(1);
    console.log(this.state.arr)
  }
  handleClick_2= () => {
    const {arr} = this.state;
    this.setState({
      arr: arr.concat(2)
    })
    //alert(2);
    console.log(this.state.arr)
  }
  handleClick_3= async () => {
    const {arr} = this.state;
    await this.setState({
      arr: arr.concat(3)
    })
    //alert(1);
    console.log(this.state.arr)
  }
  handleClick_4= () => {
    const {arr} = this.state;
    this.setState({
      arr: arr.concat(4)
    })
    //alert(2);
    console.log(this.state.arr)
  }
  handleClick_5= async () => {
    const {arr} = this.state;
    await this.setState({
      arr: arr.concat(5)
    })
    //alert(1);
    console.log(this.state.arr)
  }
  handleClick_6= () => {
    const {arr} = this.state;
    this.setState({
      arr: arr.concat(6)
    })
    //alert(2);
    console.log(this.state.arr)
  }
  handleClick_7= async () => {
    const {arr} = this.state;
    await this.setState({
      arr: arr.concat(7)
    })
    //alert(1);
    console.log(this.state.arr)
  }
  handleClick_8= () => {
    const {arr} = this.state;
    this.setState({
      arr: arr.concat(8)
    })
    //alert(2);
    console.log(this.state.arr)
  }
  handleClick_9= async () => {
    const {arr} = this.state;
    await this.setState({
      arr: arr.concat(9)
    })
    //alert(1);
    console.log(this.state.arr)
  }
  handleClick_0= () => {
    const {arr} = this.state;
    this.setState({
      arr: arr.concat(0)
    })
    //alert(2);
    console.log(this.state.arr)
  }
  handleClick_plus= async () => {
    const {arr} = this.state;
    await this.setState({
      arr: arr.concat("+")
    })
    //alert(1);
    console.log(this.state.arr)
  }
  handleClick_minus= () => {
    const {arr} = this.state;
    this.setState({
      arr: arr.concat("-")
    })
    //alert(2);
    console.log(this.state.arr)
  }
  handleClick_multiple= async () => {
    const {arr} = this.state;
    await this.setState({
      arr: arr.concat("*")
    })
    //alert(1);
    console.log(this.state.arr)
  }
  handleClick_division= () => {
    const {arr} = this.state;
    this.setState({
      arr: arr.concat("/")
    })
    //alert(2);
    console.log(this.state.arr)
  }
  handleClick_doubleZero= async () => {
    const {arr} = this.state;
    await this.setState({
      arr: arr.concat("00")
    })
    //alert(1);
    console.log(this.state.arr)
  }


  render(){
    const {result} = this.state;
    const {arr} = this.state.arr;
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
        <button onClick={this.handleClick_1} style={style}>1</button>
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
}
export default App;
