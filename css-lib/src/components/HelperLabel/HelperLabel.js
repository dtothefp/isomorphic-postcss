import React from 'react';
import copy from 'copy-text-to-clipboard';

import styles from './HelperLabel.css';

class HelperLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
    
    this.onClick = this.onClick.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  onClick(event) {
    copy(this.props.text);
    this.setState({
      copied: true,
    });
  }
  onMouseLeave(event) {
    this.setState({
      copied: false,
    });
  }
  render() {
    const label = this.state.copied ? `Copied!` : this.props.text;
    
    return (
      <p className={styles[`helper-label`]} onMouseLeave={this.onMouseLeave}>
        <span className={styles[`helper-label-text`]} onClick={this.onClick}>
          {label}
        </span>
      </p>
    );
  }
}

export default HelperLabel;