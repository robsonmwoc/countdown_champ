import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class StopWatch extends Component {
  constructor(props) {
    super(props);

    this.timer = 0;

    this.state = {
      ticking: false,
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    }
  }

  leadingZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  updateTime() {
    if(this.state.ticking) {
      this.timer += 1/60;
      const miliseconds = Math.floor((this.timer - Math.floor(this.timer)) * 100);
      const seconds = Math.floor(this.timer) - Math.floor(this.timer / 60) * 60;
      const minutes = Math.floor(this.timer / 60);

      this.setState({ minutes, seconds, miliseconds });
    }
  }

  start() {
    this.setState({ ticking: true });
  }

  stop() {
    this.setState({ ticking: false });
  }

  componentWillMount() {
    this.updateTime();
  }

  componentDidMount() {
    setInterval(() => this.updateTime(), 24);
  }

  render() {
    return(
      <div className='stopwatch'>
        <div>
          <div className='time'>{this.leadingZero(this.state.minutes)}</div>:
          <div className='time'>{this.leadingZero(this.state.seconds)}</div>:
          <div className='time'>{this.leadingZero(this.state.miliseconds)}</div>
        </div>
        <div className='controls'>
          <Button onClick={() => this.start()} bsStyle='success'>
            Start
          </Button>&nbsp;
          <Button onClick={() => this.stop()} bsStyle='danger'>
            Stop
          </Button>
        </div>
      </div>
    )
  }
}

export default StopWatch;
