import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';
import amber from '@material-ui/core/colors/amber';

export const lightTheme = {
    palette: {
        primary: {
          main: lightGreen[500],
        },
        secondary: {
          main: amber[500],
        }
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            //backgroundPosition: '97% 95%',
            //backgroundRepeat: 'no-repeat',
            //backgroundAttachment: 'fixed',
            //backgroundImage: `url(${sun})`
          }
        }
      }
    }
  }
  
export const darkTheme = {
    palette: {
        type: 'dark',
        primary: {
          main: green[500],
        },
        secondary: {
          main: amber[500],
        }
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            //backgroundPosition: '97% 95%',
            //backgroundRepeat: 'no-repeat',
            //backgroundAttachment: 'fixed',
            //backgroundImage: `url(${moon})`
          }
        }
      }
    }
}