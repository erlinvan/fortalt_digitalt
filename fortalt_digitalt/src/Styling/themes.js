import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';
import amber from '@material-ui/core/colors/amber';

// Icons
import stars from './stars.svg';

export const lightTheme = {
    palette: {
        primary: {
          main: "#212F3C",
        },
        secondary: {
          main: amber[500],
        }
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          img: {
            borderRadius: '16px'
          },
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
          main: "#2471A3",
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
            //backgroundImage: `url(${stars})`
          }
        }
      }
    }
}