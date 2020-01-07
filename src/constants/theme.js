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
  sm: 10,
  md: 14,
  lg: 22,
  xl: 34,
  xxl: 48,
  xxxl: 52
};

export default {
  colors,
  fonts,
  sizes,
  button: {
    backgroundColor: colors.primary
  },
  title: {
    fontFamily: fonts.medium,
    fontSize: sizes.xxxl,
    color: colors.black,
    lineHeight: sizes.xxxl + 4
  },
  h1: {
    fontFamily: fonts.light,
    fontSize: sizes.xxl,
    color: colors.black,
    lineHeight: sizes.xxl + 2
  },
  h2: {
    fontFamily: fonts.light,
    fontSize: sizes.xl,
    color: colors.black,
    lineHeight: sizes.xl
  },
  h3: {
    fontFamily: fonts.medium,
    fontSize: sizes.md,
    color: colors.black,
    lineHeight: sizes.md
  },
  body: {
    fontFamily: fonts.regular,
    fontSize: sizes.md,
    color: colors.black,
    lineHeight: sizes.md + 2
  },
  caption: {
    fontFamily: fonts.regular,
    fontSize: sizes.sm,
    color: colors.black3,
    lineHeight: sizes.sm + 2
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
