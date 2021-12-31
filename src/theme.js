import { createTheme } from "@material-ui/core";

export const theme = createTheme({
    palette: {
      primary: {
        main: '#FF452B',
      },
      secondary: {
        main: '#263238',
      },
      text: {
        primary: '#212121',
        secondary:'#263238'
      },
      grey:{
        main:'#607D8B',
        border:'#B0BEC5',
      },
 
      background: {
        default: '#F5F5F5',
        light: 'rgba(0,0,0,0.5)',
        secondary:'#ECEFF1',
        dark:'#ffdbd0'
      },
    },
    typography:{
      fontSize: 14,
      fontFamily: 'Nunito',
      body1: {
        fontFamily: 'Nunito',
        color:"#212121",
         fontSize:'12px'
      },
      body2:{
        fontFamily: 'Nunito',
        color:"#607D8B",
        fontSize:'12px'
      },
      subtitle1:{
        fontSize: 16,
        fontFamily: 'Nunito',
        letterSpacing: 0.2,
        color: '#212121',
        lineHeight: '20px',
        fontWeight: 500
      },
      h3:{
        fontSize: 18,
        fontFamily: 'Nunito',
        letterSpacing: 0.2,
        lineHeight: '20px',
        fontWeight: 500
      }
    },
  });


/*   --red: #ff5000!important;
  --salmon: #ffdbd0;
  --pink: #ffdbd0;
  --beige: #f7f0f0;
  --white: #f7eff0;
  --material-border: 0.5px solid #e9e9e9; */