import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import Block from '../Block';
import { ThemeContext } from '../../constants/context';

export default function Divider(props) {
  const { style, ...rest } = props;

  return (
    <ThemeContext.Consumer>
      {theme => {
        const stylesheet = styles(theme);
        const dividerStyles = [stylesheet.divider, style];

        return <Block style={dividerStyles} {...rest} />;
      }}
    </ThemeContext.Consumer>
  );
}

Divider.defaultProps = {
  style: {}
};

Divider.propTypes = {
  style: PropTypes.object
};
