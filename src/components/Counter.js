import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    /*
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("Callback value", this.state.count);
      }
    );
    */
    this.setState(
      (prevState, props) => ({
        count: prevState.count + props.addValue,
      }),
      () => {
        console.log("Callback value", this.state.count);
      }
    );
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <div>
          <div>count add 1 - {this.state.count}</div>
          <button onClick={() => this.increment()}>Increment</button>
        </div>
        <div>
          <div>count add 5 - {this.state.count}</div>
          <button onClick={() => this.incrementFive()}>Increment</button>
        </div>
      </div>
    );
  }
}

export default Counter;
