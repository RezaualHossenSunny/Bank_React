import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Theme } from './Theme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeProvider theme={Theme}>
  <App />
  <CssBaseline/>
  </ThemeProvider>
   
  </React.StrictMode>,
)
