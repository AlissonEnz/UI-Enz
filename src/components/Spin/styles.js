import { StyleSheet } from 'react-native';

export default theme =>
  StyleSheet.create({
    overlay: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      top: 0,
      left: 0,
      flex: 1,
      right: 0,
      bottom: 0,
      zIndex: 1000,
      backgroundColor: theme.spinner.overlayColor
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      height: 100,
      zIndex: 1001,
      borderRadius: 8,
      backgroundColor: theme.spinner.containerColor
    },
    spinner: {
      borderColor: '#fff',
      width: 50,
      height: 50,
      zIndex: 1002,
      borderWidth: 2,
      borderRadius: 25,
      borderBottomColor: theme.spinner.color
    }
  });
