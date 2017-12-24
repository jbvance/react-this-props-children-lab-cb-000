import React, { Component } from 'react';

class Invitation extends Component {
  render() {
    const inviteHeader = "You've been invited!";
    return (
      <div>
        <h1>
          {inviteHeader}
        </h1>
        {this.props.children}
      </div>
    );
  }
}
export default Invitation;
