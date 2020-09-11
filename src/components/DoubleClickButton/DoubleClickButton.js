import React, { Component } from 'react';

class DoubleClickButton extends Component {
  state = { clicks: 0 }

  updateClicks() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.clicks % 2 == 0;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    
  }

  render() {
    console.log("In render");
    return (
      <div>
        button double-clicked {this.state.clicks / 2} times
        <button onClick={() => this.updateClicks()}>Double click me !</button>
      </div>
    );
  }
}

export default DoubleClickButton;