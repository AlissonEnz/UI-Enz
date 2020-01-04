import { StyleSheet } from 'react-native';

export default theme =>
  StyleSheet.create({
    button: {
      ...theme.button,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    large: theme.buttonLarge,
    small: theme.buttonSmall,
    primary: {
      borderColor: theme.color.primary,
      backgroundColor: theme.color.primary
    },
    success: {
      borderColor: theme.color.success,
      backgroundColor: theme.color.success
    },
    danger: {
      borderColor: theme.color.danger,
      backgroundColor: theme.color.danger
    },
    warning: {
      borderColor: theme.color.warning,
      backgroundColor: theme.color.warning
    },
    transparent: {
      borderColor: 'transparent',
      backgroundColor: 'transparent'
    },
    border: {
      backgroundColor: 'transparent'
    },
    disabled: {
      borderColor: theme.color.gray,
      backgroundColor: theme.color.gray
    },
    textPrimary: {
      color: theme.color.primary
    },
    textSuccess: {
      color: theme.color.success
    },
    textDanger: {
      color: theme.color.danger
    },
    textWarning: {
      color: theme.color.warning
    },
    textLarge: {
      fontSize: theme.size.large
    },
    textSmall: {
      fontSize: theme.size.small
    },
    textDisabled: {
      color: theme.color.darkGray
    }
  });
