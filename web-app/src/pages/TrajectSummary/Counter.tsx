import React, { Component } from 'react';

interface Props {}

interface State {
  count: number;
}

class Counter extends Component<Props, State> {
  state = {
    count: 15,
  };

  dec = () => {
    this.setState({ count: this.state.count - 1 });
  };

  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div
        style={{
          marginLeft: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <button
          onClick={this.dec}
          style={{
            width: 30,
            height: 30,
            borderRadius: '50%',
            border: 'none',
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#535353',
          }}
        >
          -
        </button>
        <input
          required
          id="lastName"
          name="number"
          min="10"
          max="60"
          placeholder={'10'}
          value={this.state.count}
          style={{
            backgroundColor: '#48c8d4',
            border: 'none',
            width: 30,
            height: 30,
            fontSize: '20px',
            fontWeight: 900,
            textAlign: 'center',
            color: 'white',
            marginLeft: 20,
            marginRight: 20,
          }}
        />
        <button
          onClick={this.inc}
          style={{
            width: 30,
            height: 30,
            borderRadius: '50%',
            border: 'none',
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#535353',
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
