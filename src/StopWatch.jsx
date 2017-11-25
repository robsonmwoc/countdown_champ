import React, { Component } from 'react';
import { Segment, Button, Header, Divider } from 'semantic-ui-react';

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

  pause() {
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
      <Segment stacked>
        <Header
          as='h2'
          style={{ color: 'teal' }}
          textAlign='center'
        >
          Stopwatch
        </Header>

        <div>
          <div className='time'>{this.leadingZero(this.state.minutes)}</div>:
          <div className='time'>{this.leadingZero(this.state.seconds)}</div>:
          <div className='time'>{this.leadingZero(this.state.miliseconds)}</div>
        </div>

        <Divider />
        <Button
          color='green'
          content='Start'
          icon='play'
          size='large'
          labelPosition='left'
          onClick={()=> this.start()}
        />

        <Button
          content='Pause'
          icon='pause'
          size='large'
          labelPosition='right'
          onClick={()=> this.pause()}
        />
      </Segment>
    )
  }
}

export default StopWatch;
