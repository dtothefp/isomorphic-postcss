import React from 'react';
import { map as _map } from 'lodash';

import SpacingBlock from './SpacingBlock/SpacingBlock';

import styles from './SpacingSection.css';
import sizes from './exports/sizes.css';
import { title, description } from 'content/spacing.json';

class SpacingSection extends React.Component {
  render() {
    const sizeKeys = Object.keys(sizes);

    return (
      <div id="spacing" className={styles[`container`]}>
        <div className={styles[`intro-section`]}>
          <p className={styles[`title`]}>{title}</p>
          <p className={styles[`description`]}>{description}</p>
        </div>
        <div className={styles[`example-section`]}>
          <div className={styles[`blocks`]}>
            {_map(sizeKeys, (key, i) => {
              return (
                <SpacingBlock
                  key={i}
                  variable={key}
                  value={sizes[key]}
                />
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SpacingSection;
