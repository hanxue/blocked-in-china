import React from 'react';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import MyAppBar from './AppBar';

const App = () => (
  <MuiThemeProvider>
    <MyAppBar />
  </MuiThemeProvider>
);

export default App;
