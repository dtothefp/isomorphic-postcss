import PropTypes from 'prop-types';
import React from 'react';

class InlineIcon extends React.Component {
  componentWillMount() {
    this.Icon = require(`assets/icons/${this.props.name}.svg`);
  }
  render() {
    return <this.Icon className={this.props.className} />;
  }
}

InlineIcon.propTypes = {
  className: PropTypes.string,
};

export default InlineIcon;
