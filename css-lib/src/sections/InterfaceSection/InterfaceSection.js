import React from 'react';

import Accordion from 'components/Accordion/Accordion';
import HelperLabel from 'components/HelperLabel/HelperLabel';
import Dropdown from 'components/Dropdown/Dropdown';
import InputGroup from 'components/InputGroup/InputGroup';
import Option from 'components/Option/Option';
import Pane from 'components/Tabs/Pane/Pane';
import Tabs from 'components/Tabs/Tabs';

import styles from './InterfaceSection.css';
import { title, description } from 'content/interface.json';

class InterfaceSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownValue: `1`,
      optionValue: `1`,
      inputGroupLoading: false,
      selectedTabIndex: 0,
    };
    this.onClickDropdown = this.onClickDropdown.bind(this);
    this.onClickOption = this.onClickOption.bind(this);
    this.onClickTab = this.onClickTab.bind(this);
  }
  onClickDropdown(value) {
    this.setState({
      dropdownValue: value
    });
  }
  onClickOption(event) {
    this.setState({
      optionValue: event.target.value,
    });
  }
  onClickTab(index) {
    this.setState({
      selectedTabIndex: index,
    });
  }
  render() {
    return (
      <div id="interface" className={styles[`container`]}>
        <div className={styles[`intro-section`]}>
          <p className={styles[`title`]}>{title}</p>
          <p className={styles[`description`]}>{description}</p>
        </div>
        <div className={styles[`example-section`]}>
          <h3 className={styles[`example-section-title`]}>Buttons</h3>
          <p><button className={styles[`button--primary`]}>Primary Button</button></p>
          <p><button className={styles[`button--primary`]} disabled={true}>Primary Button (Disabled)</button></p>
          <HelperLabel text="button--primary" />
          <p><button className={styles[`button--secondary`]}>Secondary Button</button></p>
          <HelperLabel text="button--secondary" />
          <p><button className={styles[`button--accent`]}>Accent Button</button></p>
          <HelperLabel text="button--accent" />
          <p><button className={styles[`button--ghost`]}>Ghost Button</button></p>
          <HelperLabel text="button--ghost" />
        </div>
        <div className={styles[`example-section`]}>
          <h3 className={styles[`example-section-title`]}>Inputs</h3>
          <p><input className={styles[`form-input`]} placeholder="Text Input" /></p>
          <HelperLabel text="form-input" />
          <p>
            <InputGroup
              autofocus={false}
              buttonName={`Submit`}
              isLoading={this.state.inputGroupLoading}
              onButtonClick={() => {
                this.setState({
                  inputGroupLoading: true
                });
                
                setTimeout(() => {
                  this.setState({
                    inputGroupLoading: false
                  });
                }, 1000);
              }}
              placeholder={`Input Group`}
            />
          </p>
          <HelperLabel text="<InputGroup />" />
          <p>
            <Dropdown
              onClick={this.onClickDropdown}
              options={[
                {
                  label: `Option 1`,
                  value: `1`
                },
                {
                  label: `Option 2`,
                  value: `2`
                },
                {
                  label: `Option 3`,
                  value: `3`
                },
              ]}
              selectedValue={this.state.dropdownValue}
            />
          </p>
          <HelperLabel text="<Dropdown />" />
          <Option
            description="Option description"
            label="Option 1"
            name="optionExample"
            onClick={this.onClickOption}
            selected={this.state.optionValue == `1`}
            value="1"
          />
          <Option
            label="Option 2"
            name="optionExample"
            onClick={this.onClickOption}
            selected={this.state.optionValue == `2`}
            value="2"
          />
          <Option
            label="Option 3"
            name="optionExample"
            onClick={this.onClickOption}
            selected={this.state.optionValue == `3`}
            value="3"
          />
          <HelperLabel text="<Option />" />
        </div>
        <div className={styles[`example-section`]}>
          <h3 className={styles[`example-section-title`]}>Accordion</h3>
          <p>
            <Accordion
              contentKey="mattress"
              items={[
                {
                  title: `Section 1 Title`,
                  content: `Section 1 Content`
                },
                {
                  title: `Section 2 Title`,
                  content: `Section 2 Content`
                },
                {
                  title: `Section 3 Title`,
                  content: `Section 3 Content`
                },
              ]}
              itemsVisibility={this.state.accordionItemsVisibility}
              toggle={(accordion, key, show, title) => {
                this.setState({
                  accordionItemsVisibility: {
                    [key]: {
                      show,
                    },
                  },
                });
              }}
            />
          </p>
          <HelperLabel text="<Accordion />" />
        </div>
        <div className={styles[`example-section`]}>
          <h3 className={styles[`example-section-title`]}>Tabs</h3>
          <p>
            <div className={styles[`example-tabs`]}>
              <Tabs onClick={this.onClickTab} selectedIndex={this.state.selectedTabIndex}>
                <Pane label="Tab 1">
                  <div className={styles[`example-pane-content`]}>
                    Tab 1 Content
                  </div>
                </Pane>
                <Pane label="Tab 2">
                  <div className={styles[`example-pane-content`]}>
                    Tab 2 Content
                  </div>
                </Pane>
              </Tabs>
            </div>
          </p>
          <HelperLabel text="<Tabs />" />
        </div>
      </div>
    );
  }
}

export default InterfaceSection;