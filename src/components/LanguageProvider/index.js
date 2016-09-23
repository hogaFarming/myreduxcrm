import React, {Component} from 'react';
import {IntlProvider} from 'react-intl';

import en from '../../base/i18n/en';
import zh from '../../base/i18n/zh';

const translatedMessages = {
  en,
  zh
};

class LanguageProvider extends Component {
  state = { lang: 'zh' };
  render() {
    const message = translatedMessages[this.state.lang] || {};
    return (
      <IntlProvider locale="en" messages={message}>
        {this.props.children}
      </IntlProvider>
    );
  }
}

export default LanguageProvider;
