import React, { Component } from 'react';
import { Segment, Form, Button, Header } from 'semantic-ui-react';
import Clock from './Clock';
import './App.css';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }

  render() {
    return(
      <Segment stacked>
        <Header
          as='h2'
          style={{ color: 'teal' }}
          textAlign='center'
        >
          {this.state.deadline}
        </Header>

        <Clock deadline={this.state.deadline} />

        <Form size='large' style={{ marginTop: '10px' }}>
          <Form.Input
            fluid
            icon='alarm'
            iconPosition='left'
            placeholder='New date'
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
          <Button
            color='olive'
            fluid size='large'
            onClick={()=> this.changeDeadline()}
          >Update</Button>
        </Form>
      </Segment>
    )
  }
}

export default Countdown;
