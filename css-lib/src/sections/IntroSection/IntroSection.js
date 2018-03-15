import React from 'react';

import InlineIcon from 'components/InlineIcon/InlineIcon';

import styles from './IntroSection.css';
import { title, description } from 'content/intro.json';

class IntroSection extends React.Component {
  render() {
    return (
      <div id="intro" className={styles[`container`]}>
        <InlineIcon name="logo" className={styles[`logo`]} />
        <h1 className={styles[`title`]}>{title}</h1>
        <p className={styles[`description`]}>{description}</p>
      </div>
    );
  }
}

export default IntroSection;
