import React from 'react';
import { map as _map } from 'lodash';

import ColorSwatch from './ColorSwatch/ColorSwatch';

import styles from './ColorSection.css';
import { title, description, swatches } from 'content/color.json';

class ColorSection extends React.Component {
  renderSwatches(swatches) {
    return _map(swatches, (props, i) => (
      <ColorSwatch
        key={i}
        {...props}
      />
    ));
  }
  
  renderSwatchRows(rows) {
    return _map(rows, (swatches, i) => {
      return (
        <div
          className={styles[`swatch-row`]}
          key={i}
        >
          {this.renderSwatches(swatches)}
        </div>
      );
    });
  }

  render() {
    return (
      <div id="color">
        <div className={styles[`intro-section`]}>
          <h2 className={styles[`title`]}>{title}</h2>
          <p className={styles[`description`]}>{description}</p>
        </div>
        <div className={styles[`swatch-section`]}>
          <h3 className={styles[`swatch-section-title`]}>Primary colors</h3>
          {this.renderSwatchRows(swatches.primary)}
        </div>
        <div className={styles[`swatch-section`]}>
          <h3 className={styles[`swatch-section-title`]}>Secondary colors</h3>
          {this.renderSwatchRows(swatches.secondary)}
        </div>
        <div className={styles[`swatch-section`]}>
          <h3 className={styles[`swatch-section-title`]}>Accent colors</h3>
          {this.renderSwatchRows(swatches.accent)}
        </div>
      </div>
    );
  }
}

export default ColorSection;