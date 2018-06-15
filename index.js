import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Redbox from 'redbox-react';

import Presentation from './Presentation';

/* eslint-disable react/jsx-filename-extension */

const CustomErrorReporter = ({ error }) => <Redbox error={error} />;

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired,
};

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <Presentation />
  </AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./Presentation', () => {
    // eslint-disable-next-line global-require
    const NextPresentation = require('./Presentation').default; ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <NextPresentation />
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}

/* eslint-enable react/jsx-filename-extension */
