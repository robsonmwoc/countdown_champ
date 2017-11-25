import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';

import Countdown from './Countdown';
import StopWatch from './StopWatch';

class App extends Component {
  render() {
    return (
      <div>
        <style>
          {`
            body > div,
            body > div > div {
              height: 100%;
            }
          `}
        </style>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header
              as='h1'
              style={{ color: 'white', fontSize: '45px' }}
              textAlign='center'
            >
              Countdown Champ
            </Header>

            <Countdown />
            <StopWatch />

          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default App;
