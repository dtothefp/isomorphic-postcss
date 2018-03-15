import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { hot, setConfig } from 'react-hot-loader';
import styles from './App.css';
import Child from '../Child';
import SubChild from '../SubChild';

setConfig({ logLevel: 'debug' });

class App extends React.Component {
  render() {
    return (
      <div>
        SSR, and I work fine! State <span>{this.props.currState}</span>
        <Child />
        <SubChild />
      </div>
    );
  }
}

App.propTypes = {
  currState: propTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  currState: state.init && state.init.data || ''
});

const Connected = connect(mapStateToProps)(App);
const Root = () => <Connected />;

export default hot(module)(Root);
