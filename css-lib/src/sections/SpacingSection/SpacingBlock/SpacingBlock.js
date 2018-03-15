import React from 'react';
import classNames from 'classnames/bind';
import copy from 'copy-text-to-clipboard';

import styles from './SpacingBlock.css';

const cx = classNames.bind(styles);

class SpacingBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: ``,
    };
  }

  render() {
    const blockClass = cx(`block`, `block--${this.props.variable}`);
    const varLabel = this.state.copied === `var` ? `Copied!` : this.props.variable;

    return (
      <div className={blockClass}>
        <div
          className={styles[`size-variable`]}
          onClick={() => {
            copy(this.props.variable);
            this.setState({
              copied: `var`
            });
          }}
          onMouseLeave={() => {
            this.setState({
              copied: ``
            });
          }}
        >
          {varLabel}
        </div>
        <div className={styles[`size-value`]}>
          {this.props.value} ({parseFloat(this.props.value, 10) * 16}px)
        </div>
      </div>
    );
  }
}

export default SpacingBlock;
