import { StyleSheet } from 'react-native';

export default theme =>
  StyleSheet.create({
    block: {
      flex: 1
    },
    row: {
      flexDirection: 'row'
    },
    column: {
      flexDirection: 'column'
    },
    center: {
      alignItems: 'center'
    },
    middle: {
      justifyContent: 'center'
    },
    left: {
      justifyContent: 'flex-start'
    },
    right: {
      justifyContent: 'flex-end'
    },
    top: {
      justifyContent: 'flex-start'
    },
    bottom: {
      justifyContent: 'flex-end'
    },
    shadow: theme.shadow
  });
