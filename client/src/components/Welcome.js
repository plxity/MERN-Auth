import React, { Component } from 'react';
import loggedIn from './loggedIn';

class Welcome extends Component {
  render() {
    return (
      <div>
          Welcome! Sign up or Sign In.
        
      </div>
    )
  }
}

export default loggedIn(Welcome)
