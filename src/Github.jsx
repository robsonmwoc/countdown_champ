import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

export default class Github extends Component {
  render() {
    return(
      <div className='github-button'>
        <Button
          as='a'
          href='#'
          color='secondary'
          icon='github'
          content='View Source'
        />
      </div>
    )
  }
}
