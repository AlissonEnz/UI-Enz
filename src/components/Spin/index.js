import React from 'react';
import PropTypes from 'prop-types';
import { Animated, View } from 'react-native';

import styles from './styles';

const SPIN_DURATION = 1000;

export default function Spin({ visible, fullscreen }) {
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

  if (fullscreen) {
    return (
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Animated.View style={[styles.spinner, { transform: [{ rotate: spin }] }]} />
        </View>
      </View>
    );
  }

  return <Animated.View style={[styles.spinner, { transform: [{ rotate: spin }] }]} />;
}

Spin.propTypes = {
  visible: PropTypes.bool,
  fullscreen: PropTypes.bool
};

Spin.defaultProps = {
  visible: false,
  fullscreen: false
};
