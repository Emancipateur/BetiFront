import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hebergement from "./Pages/Hebergement";
import Index from "./Pages/Index";

import Lodge from "./Pages/Lodge";
import Prestations from "./Pages/Prestations";
import Reservation from "./Pages/Reservation";
import Restauration from "./Pages/Restauration";


const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>

        <Route path="/" element={<Index />} />
  
        <Route path="/lodge" element={<Lodge />} />
        <Route path="/hebergement" element={<Hebergement />} />
        <Route path="/restauration" element={<Restauration />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/reservation" element={<Reservation />} />
        {/*    */}
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
    
      </Routes>
    </BrowserRouter>
  );
};

export default App;
