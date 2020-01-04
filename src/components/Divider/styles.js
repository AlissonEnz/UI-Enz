import { StyleSheet } from 'react-native';

export default theme =>
  StyleSheet.create({
    divider: {
      height: 0,
      margin: theme.sizes.base * 2,
      borderBottomColor: theme.colors.gray,
      borderBottomWidth: StyleSheet.hairlineWidth
    }
  });
