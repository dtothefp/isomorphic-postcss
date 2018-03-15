import React from 'react';
import classnames from 'classnames/bind';
import { map as _map } from 'lodash';

import styles from './Resizer.css';

const sizes = [
  {
    label: `Max`,
    min: 1600,
  },
  {
    label: `Wide`,
    min: 1280,
  },
  {
    label: `Large`,
    min: 1024,
  },
  {
    label: `Medium`,
    min: 768,
  },
  {
    label: `Small`,
    min: 560,
  },
  {
    label: `Mobile`,
    min: 350,
  },
  {
    label: `Tiny`,
    min: 320,
  },
];

const cx = classnames.bind(styles);

const getLabel = (width) => {
  let label = ``;
  
  for (let i = 0; i < sizes.length; i++) {
    if (width >= sizes[i].min || i === sizes.length - 1) {
      label = sizes[i].label;
      break;
    }
  }
  
  return label;
}

class Resizer extends React.Component {
  constructor() {
    super();
    
    this.state = {
      menuOpen: false,
      width: window.innerWidth,
      label: getLabel(window.innerWidth),
    };
  }
  componentDidMount() {
    window.addEventListener(`resize`, () => {
      this.setState({
        width: window.innerWidth,
        label: getLabel(window.innerWidth),
      });
    });
  }
  setSize(width) {
    parent.postMessage({
      width,
    }, window.location.origin);
    
    this.setState({
      menuOpen: false,
    });
  }
  renderSizeMenu() {
    const menuClassName = cx(`size-menu`, {
      'size-menu--open': this.state.menuOpen,
    });
    return (<ul className={menuClassName} ref={(el) => {this.listEl = el;}}>
      {_map(sizes, (size, index) => {
        const min = `${size.min}px`;
        const max = index === 0 ? `∞` : `${(sizes[index - 1].min - 1)}px`
        return (<li key={index} className={styles[`size-option`]} onClick={(event) => {
          event.stopPropagation();
          
          if (index === 0) {
            this.setSize(`100%`);
          } else {
            this.setSize(min);
          }
        }}>
          <p className={styles[`size-option-label`]}>{size.label}</p>
          <p className={styles[`size-option-range`]}>{min} - {max}</p>
        </li>);
      })}
    </ul>);
  }
  render() {
    return (
      <div>
        <div className={styles[`indicator`]} onClick={() => {
          this.setState({
            menuOpen: !this.state.menuOpen,
          });
        }}>
          <div className={styles[`indicator-text`]}>
            <p className={styles[`label`]}>{this.state.label}</p>
            <p className={styles[`width`]}>{this.state.width}px</p>
          </div>
        </div>
        {this.renderSizeMenu()}
      </div>
    )
  }
}

export default Resizer;