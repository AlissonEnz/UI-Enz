import React from 'react';
import PropTypes from 'prop-types';
import { Animated, View } from 'react-native';

import { ThemeContext } from '../../constants/context';
import styles from './styles';

const SPIN_DURATION = 1000;

export default function Spin(props) {
  const { visible, fullscreen, style, ...rest } = props;

  if (!visible) return null;

  const spinValue = new Animated.Value(0);
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: SPIN_DURATION,
      Infinite: true
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    <ThemeContext.Consumer>
      {theme => {
        const stylesheet = styles(theme);
        const spinStyles = [stylesheet.spinner, style, { transform: [{ rotate: spin }] }];
        if (fullscreen) {
          return (
            <View style={stylesheet.overlay}>
              <View style={stylesheet.container}>
                <Animated.View {...rest} style={spinStyles} />
              </View>
            </View>
          );
        }

        return <Animated.View {...rest} style={spinStyles} />;
      }}
    </ThemeContext.Consumer>
  );
}

Spin.propTypes = {
  visible: PropTypes.bool,
  fullscreen: PropTypes.bool,
  style: PropTypes.object
};

Spin.defaultProps = {
  visible: false,
  fullscreen: false,
  style: {}
};
