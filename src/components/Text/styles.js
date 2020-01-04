import { StyleSheet } from 'react-native';

export default theme =>
  StyleSheet.create({
    text: theme.body,
    bold: {
      fontFamily: theme.fonts.bold
    },
    medium: {
      fontFamily: theme.fonts.medium
    },
    light: {
      fontFamily: theme.fonts.light
    },
    center: { textAlign: 'center' },
    right: { textAlign: 'right' },
    primary: { color: theme.colors.primary },
    secondary: { color: theme.colors.secondary },
    black: { color: theme.colors.black },
    white: { color: theme.colors.white },
    gray: { color: theme.colors.gray },
    darkGray: { color: theme.colors.darkGray },
    lightGray: { color: theme.colors.lightGray },
    h1: theme.h1,
    h2: theme.h2,
    h3: theme.h3,
    title: theme.title,
    caption: theme.caption,
    small: theme.small
  });
