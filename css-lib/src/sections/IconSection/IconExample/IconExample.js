import React from 'react';
import classNames from 'classnames/bind';
import copy from 'copy-text-to-clipboard';

import InlineIcon from 'components/InlineIcon/InlineIcon';

import styles from './IconExample.css';

const cx = classNames.bind(styles);

class IconExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }
  render() {
    const varLabel = this.state.copied ? `Copied!` : this.props.name;
    return (
      <div
        className={styles[`container`]}
        onClick={(event) => {
          copy(this.props.name);
          this.setState({
            copied: true,
          });
        }}
        onMouseLeave={(event) => {
          this.setState({
            copied: false,
          });
        }}
      >
        <InlineIcon name={this.props.name} className={styles[`icon`]} />
        <p className={styles[`label`]}>{varLabel}</p>
      </div>
    );
  }
}

export default IconExample;
