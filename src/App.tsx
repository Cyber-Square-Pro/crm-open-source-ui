import './App.css';

import { useMediaQuery } from "@mui/material";
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import WebRoutes from './routes';

export const MobileContext = React.createContext<{ isMobile: boolean }>({
  isMobile: false,
});


function App() {

  const matches = useMediaQuery("(max-width:900px)");

  return (
    <BrowserRouter>
      <MobileContext.Provider value={{ isMobile: matches }}>
        <WebRoutes />
      </MobileContext.Provider>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
