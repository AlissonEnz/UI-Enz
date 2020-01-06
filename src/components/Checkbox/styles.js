import { StyleSheet } from 'react-native';

export default theme =>
  StyleSheet.create({
    checkbox: {
      width: 26,
      height: 26,
      borderWidth: 2,
      borderColor: theme.colors.primary,
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center'
    },
    checked: {
      backgroundColor: theme.colors.primary
    },
    small: {
      width: 22,
      height: 22
    },
    large: {
      width: 32,
      height: 32
    },
    success: {
      borderColor: theme.colors.success
    },
    danger: {
      borderColor: theme.colors.danger
    },
    warning: {
      borderColor: theme.colors.warning
    },
    info: {
      borderColor: theme.colors.info
    },
    checkedSuccess: {
      backgroundColor: theme.colors.success
    },
    checkedDanger: {
      backgroundColor: theme.colors.danger
    },
    checkedWarning: {
      backgroundColor: theme.colors.warning
    },
    checkedInfo: {
      backgroundColor: theme.colors.info
    },
    text: {
      color: theme.colors.white,
      fontSize: 18
    }
  });
