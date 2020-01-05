const colors = {
  primary: '#0F4C81',
  lightPrimary: '#778398',
  darkPrimary: '#001129',
  success: '#14822C',
  danger: '#D82C29',
  warning: '#FCB400',
  info: '#007AD8',
  black: '#111111',
  white: '#FFFFFF',
  gray: '#C4C4C4',
  lightGray: '#E9EBED',
  darkGray: '#474A5E',
  shadow: '#000000'
};

const fonts = {
  regular: 'Rubik-Regular',
  medium: 'Rubik-Medium',
  bold: 'Rubik-Bold',
  light: 'Rubik-Light'
};

const sizes = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32
};

export default {
  colors,
  fonts,
  sizes,
  button: {
    borderWidth: 2,
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 12
  },
  buttonLarge: {
    paddingVertical: 6,
    paddingHorizontal: 16
  },
  buttonSmall: {
    paddingVertical: 2,
    paddingHorizontal: 8
  },
  title: {
    fontFamily: fonts.medium,
    fontSize: 52,
    color: colors.black,
    lineHeight: 60
  },
  h1: {
    fontFamily: fonts.light,
    fontSize: 48,
    color: colors.black,
    lineHeight: 56
  },
  h2: {
    fontFamily: fonts.light,
    fontSize: 34,
    color: colors.black,
    lineHeight: 34
  },
  h3: {
    fontFamily: fonts.light,
    fontSize: 28,
    color: colors.black,
    lineHeight: 32
  },
  h4: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.black,
    lineHeight: 18
  },
  body: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.black,
    lineHeight: 22
  },
  caption: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.black3,
    letterSpacing: 1,
    lineHeight: 14
  },
  shadow: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2
  },
  spinner: {
    overlayColor: 'rgba(0, 0, 0, 0.2)',
    spinnerColor: colors.black,
    containerColor: colors.white
  },
  switch: {
    thumbColor: colors.primary,
    backgroundColor: colors.lightGray
  }
};
