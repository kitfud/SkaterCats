import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import {store} from './store'
import { createTheme, ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme({
  typography: {
    fontFamily: ["Rubik Marker Hatch", "cursive"].join(","),
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "lightgreen"
        }
      }
    }
  }

});


root.render(
<ThemeProvider theme={theme}>
<BrowserRouter> 
<Provider store={store}>
<App />
</Provider>
</BrowserRouter>
</ThemeProvider>

);

