
import { CssBaseline,Container, createTheme, ThemeProvider } from '@mui/material';
import Header from './Header';
import { useState } from 'react';
import { Outlet } from '@mui/icons-material';


function App(){
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette:{
      mode:paletteType,
      background:{
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange(){
    setDarkMode(!darkMode);
  }

  return (
      <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange}></Header>
        <Container>
        <Outlet></Outlet>
        </Container>
        
      </ThemeProvider>
      );
    }

export default App
