import React from 'react';
import classnames from 'classnames/bind';

import Navigation from 'components/Navigation/Navigation';

import styles from './AppContainer.css';

const cx = classnames.bind(styles);

class AppContainer extends React.Component {
  constructor() {
    super();
    
    this.state = {
      maxWidth: `100%`,
      navOpen: false,
      navHash: ``,
    };
  }
  componentDidMount() {
    window.addEventListener(`message`, (event) => {
      if (event.data.width) {
        this.onSelectSize(event.data.width);
      }
    });
  }
  onClickNavLink(event) {
    this.setState({
      navHash: event.target.getAttribute(`href`),
    });
  }
  onSelectSize(width) {
    this.setState({
      maxWidth: width,
    });
  }
  render() {
    const navClassName = cx(`nav`, {
      'nav--open': this.state.navOpen,
    });
    return (
      <div className={styles[`container`]} style={{
        maxWidth: this.state.maxWidth,
      }}>
        <div className={styles[`header`]}>
          <button className={styles[`nav-toggle`]} onClick={() => {
            this.setState({
              navOpen: !this.state.navOpen,
            })
          }}></button>
        </div>
        <div className={styles[`main`]}>
          <div className={navClassName}>
            <Navigation onClickNavLink={this.onClickNavLink.bind(this)} />
          </div>
          <iframe className={styles[`app-frame`]} src={`app.html${this.state.navHash}`}></iframe>
        </div>
      </div>
    );
  }
}

export default AppContainer;