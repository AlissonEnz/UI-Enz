import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native-animatable';

import { ThemeContext } from '../../constants/context';
import styles from './styles';

export default function Typography(props) {
  const {
    h1,
    h2,
    h3,
    title,
    caption,
    small,
    uppercase,
    lowercase,
    bold,
    medium,
    light,
    center,
    right,
    primary,
    secondary,
    black,
    white,
    gray,
    darkGray,
    lightGray,
    style,
    children,
    ...rest
  } = props;

  return (
    <ThemeContext.Consumer>
      {theme => {
        const stylesheet = styles(theme);

        const textStyles = [
          stylesheet.text,
          h1 && stylesheet.h1,
          h2 && stylesheet.h2,
          h3 && stylesheet.h3,
          title && stylesheet.title,
          caption && stylesheet.caption,
          small && stylesheet.small,
          uppercase && { textTransform: 'uppercase' },
          lowercase && { textTransform: 'lowercase' },
          bold && stylesheet.bold,
          medium && stylesheet.medium,
          light && stylesheet.light,
          center && stylesheet.center,
          right && stylesheet.right,
          primary && stylesheet.primary,
          secondary && stylesheet.secondary,
          black && stylesheet.black,
          white && stylesheet.white,
          gray && stylesheet.gray,
          darkGray && stylesheet.darkGray,
          lightGray && stylesheet.lightGray
        ];
        return (
          <Text style={[theme.text, textStyles, style]} {...rest}>
            {children}
          </Text>
        );
      }}
    </ThemeContext.Consumer>
  );
}

Typography.defaultProps = {
  h1: false,
  h2: false,
  h3: false,
  title: false,
  caption: false,
  small: false,
  uppercase: false,
  lowercase: false,
  bold: false,
  medium: false,
  light: false,
  center: false,
  right: false,
  primary: false,
  secondary: false,
  black: false,
  white: false,
  gray: false,
  darkGray: false,
  lightGray: false,
  style: {},
  children: null
};

Typography.propTypes = {
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  title: PropTypes.bool,
  caption: PropTypes.bool,
  small: PropTypes.bool,
  uppercase: PropTypes.bool,
  lowercase: PropTypes.bool,
  bold: PropTypes.bool,
  medium: PropTypes.bool,
  light: PropTypes.bool,
  center: PropTypes.bool,
  right: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  black: PropTypes.bool,
  white: PropTypes.bool,
  gray: PropTypes.bool,
  darkGray: PropTypes.bool,
  lightGray: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.any
};
