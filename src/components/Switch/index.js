import React from 'react';
import { Switch } from 'react-native';

import { ThemeContext } from '../../constants/context';

export default function SwitchInput(props) {
  return (
    <ThemeContext.Consumer>
      {theme => {
        return (
          <Switch
            thumbColor={theme.switch.thumbColor}
            ios_backgroundColor={theme.switch.backgroundColor}
            trackColor={{
              false: theme.switch.backgroundColor,
              true: theme.switch.thumbColor
            }}
            {...props}
          />
        );
      }}
    </ThemeContext.Consumer>
  );
}
