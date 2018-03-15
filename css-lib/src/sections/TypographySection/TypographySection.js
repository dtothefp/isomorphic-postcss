import React from 'react';
import classNames from 'classnames/bind';

import HelperLabel from 'components/HelperLabel/HelperLabel';
import PlaceholderText from 'components/PlaceholderText/PlaceholderText';

import styles from './TypographySection.css';
import { title, description } from 'content/typography.json';

const cx = classNames.bind(styles);

class TypographySection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accordionItemsVisibility: {}
    }
  }
  render() {
    const longPlaceholderOpts = {
      count: 4,
      units: `words`
    };
    
    const shortPlaceholderOpts = {
      count: 3,
      units: `words`
    };

    return (
      <div id="typography">
        <div className={styles[`intro-section`]}>
          <p className={styles[`title`]}>{title}</p>
          <p
            className={styles[`description`]}
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </div>
        <div className={styles[`example-section`]}>
          <h3 className={styles[`example-section-title`]}>Heading Text Styles</h3>
          <div className={styles[`example`]}>
            <p className={styles[`h1`]}>
              <PlaceholderText options={longPlaceholderOpts} />
            </p>
            <HelperLabel text="heading-1" />
          </div>
          <div className={styles[`example`]}>
            <p className={styles[`h2`]}>
              <PlaceholderText options={longPlaceholderOpts} />
            </p>
            <HelperLabel text="heading-2" />
          </div>
          <div className={styles[`example`]}>
            <p className={styles[`h3`]}>
              <PlaceholderText options={longPlaceholderOpts} />
            </p>
            <HelperLabel text="heading-3" />
          </div>
          <div className={styles[`example`]}>
            <p className={styles[`h4`]}>
              <PlaceholderText options={longPlaceholderOpts} />
            </p>
            <HelperLabel text="heading-4" />
          </div>
          <div className={styles[`example`]}>
            <p className={styles[`h5`]}>
              <PlaceholderText options={longPlaceholderOpts} />
            </p>
            <HelperLabel text="heading-5" />
          </div>
          <div className={styles[`example`]}>
            <p className={styles[`h6`]}>
              <PlaceholderText options={longPlaceholderOpts} />
            </p>
            <HelperLabel text="heading-6" />
          </div>
        </div>
        <div className={styles[`example-section`]}>
          <h3 className={styles[`example-section-title`]}>Body Text Styles</h3>
          <div className={styles[`example`]}>
            <p className={styles[`body-1`]}>
              <PlaceholderText options={shortPlaceholderOpts} />
            </p>
            <HelperLabel text="body-1" />
          </div>
          <div className={styles[`example`]}>
            <p className={styles[`body-2`]}>
              <PlaceholderText options={shortPlaceholderOpts} />
            </p>
            <HelperLabel text="body-2" />
          </div>
          <div className={styles[`example`]}>
            <p className={styles[`p`]}>
              <PlaceholderText options={shortPlaceholderOpts} />
            </p>
            <HelperLabel text="<p>" />
          </div>
        </div>
        <div className={styles[`example-section`]}>
          <h3 className={styles[`example-section-title`]}>Link Styles</h3>
          <div className={styles[`example`]}>
            <p><a className={styles[`link`]}>
              <PlaceholderText options={shortPlaceholderOpts} />
            </a></p>
            <HelperLabel text="link" />
          </div>
          <div className={styles[`example`]}>
            <p><a className={styles[`link-underline`]}>
              <PlaceholderText options={shortPlaceholderOpts} />
            </a></p>
            <HelperLabel text="link-underline" />
          </div>
          <div className={styles[`example`]}>
            <p><a className={styles[`link-underline-gray`]}>
              <PlaceholderText options={shortPlaceholderOpts} />
            </a></p>
            <HelperLabel text="link-underline-gray" />
          </div>
        </div>
      </div>
    );
  }
}

export default TypographySection;
