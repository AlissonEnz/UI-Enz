import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import { ThemeContext } from '../../constants/context';

export default function Checkbox(props) {
  const { checked, onChange, success, danger, warning, info, small, large, style, ...rest } = props;

  function handleChange() {
    onChange(!checked);
  }

  return (
    <ThemeContext.Consumer>
      {theme => {
        const stylesheet = styles(theme);

        const checkboxStyles = [
          stylesheet.checkbox,
          small && stylesheet.small,
          large && stylesheet.large,
          success && stylesheet.success,
          danger && stylesheet.danger,
          warning && stylesheet.warning,
          info && stylesheet.info,
          checked && stylesheet.checked,
          checked && success && stylesheet.checkedSuccess,
          checked && danger && stylesheet.checkedDanger,
          checked && warning && stylesheet.checkedWarning,
          checked && info && stylesheet.checkedInfo,
          style
        ];

        return (
          <TouchableOpacity
            {...rest}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            onPress={handleChange}
          >
            <View style={checkboxStyles}>{checked && <Text style={stylesheet.text}>✓</Text>}</View>
          </TouchableOpacity>
        );
      }}
    </ThemeContext.Consumer>
  );
}

Checkbox.defaultProps = {
  checked: false,
  success: false,
  danger: false,
  warning: false,
  info: false,
  small: false,
  large: false,
  onChange: () => null,
  style: {}
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  onChange: PropTypes.func,
  style: PropTypes.object
};
