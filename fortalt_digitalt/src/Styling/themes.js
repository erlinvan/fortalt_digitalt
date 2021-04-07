// Background
import background from './background.png';

// Colors
import amber from '@material-ui/core/colors/amber';

export const lightTheme = {
  palette: {
      primary: {
        main: "#0D2F4D"
      },
      secondary: amber
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundPositionX: 'center',
          backgroundPositionY: '550px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 65%',
          backgroundAttachment: 'fixed',
          backgroundBlendMode: 'normal',
          backgroundImage: `url(${background})`
        }
      }
    }
  }
};

export const darkTheme = {
  palette: {
    type: 'dark',
    primary: {
      main: "#0D2F4D"
    },
    secondary: amber
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundPositionX: 'center',
          backgroundPositionY: '550px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 65%',
          backgroundAttachment: 'fixed',
          backgroundBlendMode: 'luminosity',
          backgroundImage: `url(${background})`
        }
      }
    }
  }
};