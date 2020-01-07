import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native-animatable';

import { ThemeContext } from '../../constants/context';
// import Text from '../Text';
import Spin from '../Spin';
import styles from './styles';

export default function Button(props) {
  const {
    style,
    primary,
    success,
    danger,
    warning,
    transparent,
    border,
    large,
    small,
    disabled,
    loading,
    opacity,
    children,
    ...rest
  } = props;

  return (
    <ThemeContext.Consumer>
      {theme => {
        const stylesheet = styles(theme);

        const buttonStyles = [
          stylesheet.button,
          primary && stylesheet.primary,
          success && stylesheet.success,
          danger && stylesheet.danger,
          warning && stylesheet.warning,
          transparent && stylesheet.transparent,
          border && stylesheet.border,
          large && stylesheet.large,
          small && stylesheet.small,
          disabled && stylesheet.disabled,
          loading && stylesheet.loading,
          style
        ];

        const textStyles = [
          stylesheet.text,
          (transparent || border) && primary && stylesheet.textPrimary,
          (transparent || border) && success && stylesheet.textSuccess,
          (transparent || border) && danger && stylesheet.textDanger,
          (transparent || border) && warning && stylesheet.textWarning,
          large && stylesheet.textLarge,
          small && stylesheet.textSmall,
          disabled && stylesheet.textDisabled
        ];

        return (
          <View {...rest} style={buttonStyles}>
            <TouchableOpacity
              disabled={disabled || loading}
              activeOpacity={opacity}
              hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            >
              {loading ? <Spin visible /> : <Text style={textStyles}>{children}</Text>}
            </TouchableOpacity>
          </View>
        );
      }}
    </ThemeContext.Consumer>
  );
}

Button.defaultProps = {
  opacity: 1,
  style: {},
  primary: true,
  success: false,
  danger: false,
  warning: false,
  transparent: false,
  border: false,
  large: false,
  small: false,
  disabled: false,
  loading: false,
  children: ''
};

Button.propTypes = {
  opacity: PropTypes.number,
  style: PropTypes.object,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  transparent: PropTypes.bool,
  border: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.string
};
