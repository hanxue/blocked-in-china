import React from 'react';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import MyAppBar from './AppBar';
import WebAddress from './WebAddress';

const App = () => (
  <MuiThemeProvider>
    <MyAppBar />
    <WebAddress />
  </MuiThemeProvider>
);

export default App;
