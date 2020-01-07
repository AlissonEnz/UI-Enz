import { StyleSheet } from 'react-native';

export default theme =>
  StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderWidth: 2,
      borderRadius: 4,
      ...theme.button
    },
    large: {
      paddingVertical: 12,
      paddingHorizontal: 24
    },
    small: {
      paddingVertical: 4,
      paddingHorizontal: 8
    },
    primary: {
      borderColor: theme.colors.primary,
      backgroundColor: theme.colors.primary
    },
    success: {
      borderColor: theme.colors.success,
      backgroundColor: theme.colors.success
    },
    danger: {
      borderColor: theme.colors.danger,
      backgroundColor: theme.colors.danger
    },
    warning: {
      borderColor: theme.colors.warning,
      backgroundColor: theme.colors.warning
    },
    transparent: {
      borderColor: 'transparent',
      backgroundColor: 'transparent'
    },
    border: {
      backgroundColor: 'transparent'
    },
    disabled: {
      borderColor: theme.colors.gray,
      backgroundColor: theme.colors.gray
    },
    text: {
      fontSize: theme.sizes.md,
      fontFamily: theme.fonts.medium,
      color: theme.colors.white
    },
    textPrimary: {
      color: theme.colors.primary
    },
    textSuccess: {
      color: theme.colors.success
    },
    textDanger: {
      color: theme.colors.danger
    },
    textWarning: {
      color: theme.colors.warning
    },
    textLarge: {
      fontSize: theme.sizes.lg
    },
    textSmall: {
      fontSize: theme.sizes.sm
    },
    textDisabled: {
      color: theme.colors.darkGray
    }
  });
