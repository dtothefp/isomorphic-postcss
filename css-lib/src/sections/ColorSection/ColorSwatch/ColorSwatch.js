import React from 'react';
import classNames from 'classnames/bind';
import copy from 'copy-text-to-clipboard';

import styles from './ColorSwatch.css';

const cx = classNames.bind(styles);

class ColorSwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: ``,
    };
  }
  render() {
    const classNames = cx(`swatch`, {
      'swatch--dark': this.props.dark,
      'swatch--border': this.props.border,
    });
    const hexLabel = this.state.copied === `hex` ? `Copied!` : `#${this.props.hex}`;
    const varLabel = this.state.copied === `var` ? `Copied!` : this.props.variable;
    return (
      <div
        className={classNames}
        style={{
          backgroundColor: `#${this.props.hex}`,
        }}
        onClick={(event) => {
          if (event.target === this.var) {
            copy(this.props.variable);
            this.setState({
              copied: `var`
            });
          } else {
            copy( `#${this.props.hex}`);
            this.setState({
              copied: `hex`
            });
          }
        }}
        onMouseLeave={(event) => {
          this.setState({
            copied: ``
          });
        }}
      >
        <p className={styles[`color-name`]}>{this.props.name}</p>
        <p ref={(el) => this.hex = el} className={styles[`color-hex`]}>{hexLabel}</p>
        <p ref={(el) => this.var = el} className={styles[`color-variable`]}>{varLabel}</p>
      </div>
    );
  }
}

export default ColorSwatch;