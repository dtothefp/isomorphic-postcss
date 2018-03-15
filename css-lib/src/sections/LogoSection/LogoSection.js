import React from 'react';

import Icon from 'components/Icon/Icon';

import styles from './LogoSection.css';
import { title, description, thumbnails } from 'content/logo.json';

class LogoSection extends React.Component {
  renderThumbnails() {
    return thumbnails.map((thumb) => {
      const className = thumb.border === `true` ? styles[`thumbnail--border`] : styles[`thumbnail`];
      const imageSrc = require(`../../assets/images/${thumb.filename}`);
      
      return (
        <div className={className}>
          <img key={thumb.path} src={imageSrc} className={styles[`thumbnail-img`]} />
        </div>
      );
    });
  }
  
  render() {
    return (
      <div id="logos">
        <div className={styles[`intro-section`]}>
          <h2 className={styles[`title`]}>{title}</h2>
          <p className={styles[`description`]}>{description}</p>
        </div>
        <div className={styles[`thumbnails-section`]}>
          <div className={styles[`thumbnails`]}>
            {this.renderThumbnails()}
          </div>
        </div>
      </div>
    );
  }
}

export default LogoSection;