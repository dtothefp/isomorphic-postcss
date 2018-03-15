import React from 'react';
import copy from 'copy-text-to-clipboard';
import { map as _map } from 'lodash';

import IconExample from './IconExample/IconExample';
import styles from './IconSection.css';
import { title, description, iconSections } from 'content/icons.json';

class IconSection extends React.Component {
  renderIcons(icons) {
    return _map(icons, (iconName) => {
      return (
        <div
          className={styles[`icon-example`]}
          key={iconName}
        >
          <IconExample name={iconName} />
        </div>
      );
    });
  }

  renderSections() {
    return _map(iconSections, (section) => {
      return (
        <div key={section.name} className={styles[`example-section`]}>
          <p className={styles[`example-section-title`]}>{section.name}</p>
          <div className={styles[`icons-container`]}>
            {this.renderIcons(section.icons)}
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div id="icons" className={styles[`container`]}>
        <div className={styles[`intro-section`]}>
          <h2 className={styles[`title`]}>{title}</h2>
          <p className={styles[`description`]}>{description}</p>
        </div>
        {this.renderSections()}
      </div>
    );
  }
}

export default IconSection;
