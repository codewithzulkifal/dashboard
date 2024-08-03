import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { IoSettingsOutline } from "react-icons/io5";

import { Footer, Navbar, Siderbar, ThemeSettings } from './component';
import { Ecommerce, Editor, Employees, Orders, Kanban, Calendar, ColorPicker, Customers, Area, Bar, ColorMapping, Financial, Line, Pie, Pyramid, Stacked  } from './pages';
import { useStateContext } from './context/ContextProvider';


function App() {

  const {activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();  

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className=" flex relative dark:bg-main-dark-bg ">
          <div className=" fixed right-4 bottom-4 " style={{ zIndex: 1000 }}>
            <TooltipComponent content="Setting" position="Top">
              <button
                type="button"
                className=" text-3xl p-3 text-white hover:shadow-xl hover:bg-light-gray "
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => setThemeSettings(true)}
              >
                <IoSettingsOutline />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className=" sidebar w-72 fixed bg-main-bg dark:bg-secondary-dark-bg ">
              <Siderbar />
            </div>
          ) : (
            <div className=" w-0 ">
              <Siderbar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* pages  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* apps  */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


