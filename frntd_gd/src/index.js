import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createMuiTheme, ThemeProvider} from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#C5CAE9",
      main: "#3F51B5" ,
      dark: "#303F9F"
    },
    secondary: {
      main: "#303F9F"
    },
  },
  typography: {
    fontFamily: [
      'Arial'
    ],
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
