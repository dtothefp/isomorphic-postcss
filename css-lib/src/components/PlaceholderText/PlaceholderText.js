import React from 'react';
import loremIpsum from 'lorem-ipsum';

import { words } from 'content/placeholder.json'

class PlaceholderText extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      text: ``,
    };
  }
  componentWillMount() {
    const options = {
      count: 4,
      words,
      ...this.props.options,
    };
    
    this.setState({
      text: loremIpsum(options),
    });
  }
  render() {
    return (
      <span>{this.state.text}</span>
    );
  }
}

export default PlaceholderText;