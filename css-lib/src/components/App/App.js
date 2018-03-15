import React from 'react';

import { spriteFetcher } from 'utils/spriteFetcher';

import ColorSection from 'sections/ColorSection/ColorSection';
import IconSection from 'sections/IconSection/IconSection';
import InterfaceSection from 'sections/InterfaceSection/InterfaceSection';
import IntroSection from 'sections/IntroSection/IntroSection';
import LogoSection from 'sections/LogoSection/LogoSection';
import SpacingSection from 'sections/SpacingSection/SpacingSection';
import TypographySection from 'sections/TypographySection/TypographySection';
import Resizer from 'components/Resizer/Resizer';

import styles from './App.css';

class App extends React.Component {
  componentDidMount() {
    spriteFetcher(`https://casper-staging.com/assets-spa/icons/sprite.symbol.svg`);
  }
  render() {
    return (
      <div className={styles[`container`]}>
        <div className={styles[`main`]}>
          <Resizer />
          <IntroSection />
          <LogoSection />
          <ColorSection />
          <TypographySection />
          <SpacingSection />
          <InterfaceSection />
          <IconSection />
          <div id="sprite-container" className={styles[`sprite-container`]} />
        </div>
      </div>
    );
  }
}

export default App;
