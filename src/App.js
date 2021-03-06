import './App.css';
import Content from "./screens/Content";

import { Box } from "@material-ui/core";
import {  MuiThemeProvider } from '@material-ui/core/styles';
import {theme} from './theme';
import Header from './components/Header';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
 
  return (
    <MuiThemeProvider theme={theme}>
      <LanguageSwitcher />
      <Box>
        <Header />
        <Content />
      </Box>
    </MuiThemeProvider>
  );
}

export default App;
