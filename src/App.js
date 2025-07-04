// src/App.js
import './App.css';
import Login from './Components/Login';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navigationbar';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider, useTheme } from './Theme/ThemeContext'; // Adjust the import path as necessary
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';

function AppContent() {
  const location = useLocation();
  const { theme } = useTheme(); // Now this will work
  
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </MuiThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;