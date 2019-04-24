import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        margin: '10px 20px'
      }
    }
  }
})