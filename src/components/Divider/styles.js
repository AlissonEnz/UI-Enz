import { StyleSheet } from 'react-native';

export default theme =>
  StyleSheet.create({
    divider: {
      height: 0,
      marginVertical: theme.sizes.md * 2,
      borderBottomColor: theme.colors.gray,
      borderBottomWidth: StyleSheet.hairlineWidth,
      width: '100%'
    }
  });
