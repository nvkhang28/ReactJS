import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Header from "./Header";
import { useCallback, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingComponent from "./LoadingComponent";
import { useAppDispatch } from "../api/store/configureStore";
import { fetchBasketAsync } from "../../fearures/basket/basketSlice";
import { fetchCurrentUser } from "../../fearures/account/accountSlice";
import HomePage from "../../fearures/home/HomePage";

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330
function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
=======
=======
import { CssBaseline,Container, createTheme, ThemeProvider } from '@mui/material';
import Header from './Header';
import { useState } from 'react';
// import { Outlet } from '@mui/icons-material';
import { Outlet } from 'react-router-dom';
>>>>>>> 38528589831e3a4d6355354a13693e0fa2111371
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330

  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [initApp]);

  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: palleteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      {loading ? (
        <LoadingComponent message="Initiasing app..." />
      ) : location.pathname === "/" ? (
        <HomePage></HomePage>
      ) : (
        <Container sx={{ mt: 4 }}>
          <Outlet></Outlet>
        </Container>
      )}
    </ThemeProvider>
  );
}

export default App;
