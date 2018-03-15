import React from 'react';

import styles from './Navigation.css';

class Navigation extends React.Component {
  render() {
    return (
      <nav className={styles[`container`]}>
        <ul className={styles[`nav-list`]}>
          <li className={styles[`nav-item`]}>
            <a
              className={styles[`nav-link`]}
              href="#logos"
              onClick={this.props.onClickNavLink}
            >Logo</a>
          </li>
          <li className={styles[`nav-item`]}>
            <a
              className={styles[`nav-link`]}
              href="#color"
              onClick={this.props.onClickNavLink}
            >Color</a>
          </li>
          <li className={styles[`nav-item`]}>
            <a
              className={styles[`nav-link`]}
              href="#typography"
              onClick={this.props.onClickNavLink}
            >Typography</a>
          </li>
          <li className={styles[`nav-item`]}>
            <a
              className={styles[`nav-link`]}
              href="#spacing"
              onClick={this.props.onClickNavLink}
            >Spacing</a>
          </li>
          <li className={styles[`nav-item`]}>
            <a
              className={styles[`nav-link`]}
              href="#interface"
              onClick={this.props.onClickNavLink}
            >Interface</a>
          </li>
          <li className={styles[`nav-item`]}>
            <a
              className={styles[`nav-link`]}
              href="#icons"
              onClick={this.props.onClickNavLink}
            >Icons</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
