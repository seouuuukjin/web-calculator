import React from "react"
import styled from 'styled-components'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      result: 0,
      arr: []
    };
    //TODO:
    //this.handleClick = this.handleClick.bind(this);
    //this.handleClick을 바인딩하지 않고 onClick에 전달하였다면, 함수가 실제 호출될 때 this는 undefined가 됩니다.
  }
  handleClick(data){
    this.setState(state => ( {arr: state.arr.concat(data)} ) );
    console.log(this.state.arr)
  }
  render() {
    return (
    <div class = "cal">
      <div id = "resultArea">
        
        <h1 name = "window">Window Here</h1>
      </div>
      <div id = "arr1">
        <button onClick={() => this.handleClick("1")}>
          1
        </button>
        <button onClick={() => this.handleClick("2")}>
          2
        </button>
        <button onClick={() => this.handleClick("3")}>
          3
        </button>
        <button onClick={() => this.handleClick("/")}>
          /
        </button>
      </div>
      <div id = "arr2">
        <button onClick={() => this.handleClick("4")}>
          4
        </button>
        <button onClick={() => this.handleClick("5")}>
          5
        </button>
        <button onClick={() => this.handleClick("6")}>
          6
        </button>
        <button onClick={() => this.handleClick("*")}>
          *
        </button>
      </div>
      <div id = "arr1">
        <button onClick={() => this.handleClick("7")}>
          7
        </button>
        <button onClick={() => this.handleClick("8")}>
          8
        </button>
        <button onClick={() => this.handleClick("9")}>
          9
        </button>
        <button onClick={() => this.handleClick("-")}>
          /
        </button>
      </div>
      <div id = "arr1">
        <button onClick={() => this.handleClick("0")}>
          0
        </button>
        <button onClick={() => this.handleClick("00")}>
          00
        </button>
        <button onClick={() => this.handleClick("=")}>
          =
        </button>
        <button onClick={() => this.handleClick("+")}>
          +
        </button>
      </div>
    </div>
      );
    }
  }
  const button = styled.button`
    backgroundColor: 'skyblue';
    padding: 30px;
    color: white;
    fontSize: 20px;
    width : 10%;
  `;

export default App;
