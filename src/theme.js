import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#FFF1C7',
      main: '#ffecb3',
      dark: '#BAAC83',
      contrastText: '#b3c6ff',
    },
    secondary: {
      light: '#C7D5EC',
      main: '#C7DFC5',
      dark: '#8CA2C9',
      contrastText: '#000',
    },
  },
})