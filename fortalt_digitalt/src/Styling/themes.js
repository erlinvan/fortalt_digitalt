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
    }
  }
  
export const darkTheme = {
    palette: {
        type: 'dark',
        primary: {
          main: amber[500],
        },
        secondary: {
          main: lightGreen[500],
        }
     }
}