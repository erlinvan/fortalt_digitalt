import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';
import amber from '@material-ui/core/colors/amber';

// Icons
import background from './background.png';

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
            backgroundPositionX: 'center',
            backgroundPositionY: '500px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto 70%',
            backgroundAttachment: 'fixed',
            backgroundImage: `url(${background})`
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
          img: {
            borderRadius: '16px'
          },
          body: {
            backgroundPositionX: 'center',
            backgroundPositionY: '500px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto 70%',
            backgroundAttachment: 'fixed',
            backgroundImage: `url(${background})`
          }
        }
      }
    }
}