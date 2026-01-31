import React from "react";
import { Route, Routes } from 'react-router-dom';
import { InfoPage } from "./pages/infoPage";
import { Main } from "./pages/main";
import { Shop } from "./pages/shop";
import { Inventory } from "./pages/inventory";
import { RH } from "./pages/humanResources";
import { Finance } from "./pages/finance";
import { Logistics } from "./pages/logistics";
import { Options } from "./pages/options";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InfoPage />} />
      <Route path="/main" element={<Main />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/rh" element={<RH />} />
      <Route path="/finance" element={<Finance />} />
      <Route path="/logistics" element={<Logistics />} />
      <Route path="/options" element={<Options />} />
    </Routes>
  );
}

export default App;