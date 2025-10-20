import React, { Component } from "react";

class Message extends Component {
  constructor(params) {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }

  chageMessage() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.chageMessage()}>subscribe</button>
      </div>
    );
  }
}

export default Message;
