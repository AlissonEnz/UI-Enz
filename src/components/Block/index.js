import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native-animatable';

import { ThemeContext } from '../../constants/context';
import styles from './styles';

export default function Block(props) {
  function handleSpacing(type) {
    const value = props[type];
    if (typeof value === 'number') {
      return {
        [type]: value
      };
    }

    if (typeof margin === 'object') {
      const size = Object.keys(value).length;
      switch (size) {
        case 1:
          return {
            [type]: value
          };
        case 2:
          return {
            [`${type}Vertical`]: value[0],
            [`${type}Horizontal`]: value[1]
          };
        case 3:
          return {
            [`${type}Top`]: value[0],
            [`${type}Horizontal`]: value[1],
            [`${type}Bottom`]: value[2]
          };
        case 4:
          return {
            [`${type}Top`]: value[0],
            [`${type}Right`]: value[1],
            [`${type}Bottom`]: value[2],
            [`${type}Left`]: value[3]
          };
        default:
          return {};
      }
    }
    return {};
  }

  const {
    flex,
    row,
    column,
    center,
    middle,
    left,
    right,
    top,
    bottom,
    shadow,
    space,
    padding,
    margin,
    wrap,
    style,
    children,
    ...rest
  } = props;

  return (
    <ThemeContext.Consumer>
      {theme => {
        const stylesheet = styles(theme);

        const blockStyles = [
          stylesheet.block,
          flex === false && { flex: 0 }, // reset / disable flex
          row && stylesheet.row,
          column && stylesheet.column,
          left && stylesheet.left,
          center && stylesheet.center,
          right && stylesheet.right,
          top && stylesheet.top,
          middle && stylesheet.middle,
          bottom && stylesheet.bottom,
          margin && handleSpacing('margin'),
          padding && handleSpacing('padding'),
          shadow && stylesheet.shadow,
          space && { justifyContent: `space-${space}` },
          wrap && { flexWrap: 'wrap' },
          style
        ];

        return (
          <View style={blockStyles} {...rest}>
            {children}
          </View>
        );
      }}
    </ThemeContext.Consumer>
  );
}

Block.defaultProps = {
  flex: true,
  left: false,
  center: false,
  right: false,
  top: false,
  middle: false,
  bottom: false,
  row: false,
  shadow: false,
  wrap: false,
  column: false,
  padding: 0,
  margin: 0,
  style: {},
  space: null,
  children: null
};

Block.propTypes = {
  flex: PropTypes.bool,
  left: PropTypes.bool,
  center: PropTypes.bool,
  right: PropTypes.bool,
  top: PropTypes.bool,
  middle: PropTypes.bool,
  bottom: PropTypes.bool,
  space: PropTypes.string,
  row: PropTypes.bool,
  shadow: PropTypes.bool,
  wrap: PropTypes.bool,
  column: PropTypes.bool,
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  style: PropTypes.object,
  children: PropTypes.any
};
