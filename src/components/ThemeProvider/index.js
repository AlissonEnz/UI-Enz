import React from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../constants/context';
import defaultTheme from '../../constants/theme';

export default function ThemeProvider({ theme, children }) {
  return (
    <ThemeContext.Provider value={{ ...defaultTheme, ...theme }}>{children}</ThemeContext.Provider>
  );
}

ThemeProvider.defaultProps = {
  theme: {},
  children: null
};

ThemeProvider.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.element
};
