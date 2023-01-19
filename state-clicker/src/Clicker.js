import React, { Component } from "react";

class Clicker extends Component {
  constructor (props){
      super(props);
      this.state = {num: 1};
      this.getRandNum = this.getRandNum.bind(this);
  }

  getRandNum(){
      let randNum = Math.floor(Math.random() * 10) + 1;
      //adding +1 gets the random number up to 10, but can't get zero
      this.setState({num : randNum})
  }

  render() {
      let button;
      if (this.state.num === 7){
        button = <h2>You Win!!</h2>
      }else {
          button = <button onClick={this.getRandNum}>Get Random Number</button>;
      }
    return (
      <div className="Clicker">
        <h1>Number is: {this.state.num}</h1>
        {button}
      </div>
    );
  }
}

export default Clicker;
