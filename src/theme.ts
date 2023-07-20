import { Platform } from "react-native";

const theme = {
  appBar: {
    primary: '#24292e',
    textSecondary: '#ccc',
    textPrimary: '#fff'
  },
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    white: '#ffffff'
  },
  fontSizes: {
    body: 14,
    subheading: 16
  },
  fonts: {
    main: Platform.select({
      default: 'System',
      android: 'Roboto',
      ios: 'Arial'
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700'
  }
}

export default theme;