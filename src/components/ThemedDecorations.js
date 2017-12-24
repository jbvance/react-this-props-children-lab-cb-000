import React, { Component } from 'react';

class ThemedDecorations extends Component {
  const newChildren = React.Children.map(this.props.children, (child) => {
    return React.cloneElement(child, {className: this.props.theme})
  });
}
