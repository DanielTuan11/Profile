import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import ContactCard from "./pages/ContactCard";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/contact/:username" element={<ContactCard />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </HashRouter>
  );
};

export default App;
