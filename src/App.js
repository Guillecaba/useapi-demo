import './App.css';

import { useEffect } from 'react';
import axios from 'axios';
import Content from './components/Content';
import {AppBar,Box,Typography,Toolbar } from "@material-ui/core";
import {  MuiThemeProvider } from '@material-ui/core/styles';
import {theme} from './theme';

function App() {
 
  return (
    <MuiThemeProvider theme={theme}>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h3" >
              Yu-Gi-Oh - Portal
            </Typography>
          </Toolbar>
        </AppBar>
        <Content />
      </Box>
    </MuiThemeProvider>
  );
}

export default App;
