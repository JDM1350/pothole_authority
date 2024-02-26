

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./sences/dashboard/global/Topbar";
import Sidebar from "./sences/dashboard/global/Sidebar";
import Dashboard from "./sences/dashboard";
import Team from "./sences/Team";
import Invoices from "./sences/invoices";

import Bar from "./sences/bar";

import Pie from "./sences/pie";
import MAP from "./sences/faq";


import { CssBaseline, ThemeProvider } from "@mui/material";

import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
           
            <Topbar setIsSidebar={setIsSidebar} />
           
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/manageuser" element={<Team />} />
            
              <Route path="/report" element={<Invoices />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
            
              <Route path="/map" element={<MAP />} />
         
              
             
            </Routes>
          </main>
        </div>
        
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;


/*

        
            

*/