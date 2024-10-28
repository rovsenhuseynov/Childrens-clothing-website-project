import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/notFound/NotFound";
import Shop from "./pages/Shop/Shop";
import OurTeam from "./pages/OurTeam/OurTeam";
import OurImpact from "./pages/OurImpact/OurImpact";
import GiftCard from "./pages/GiftCard/GiftCard";
import Faq from "./pages/Faq/Faq";
import Journal from "./pages/Journal/Journal";
import Contacts from "./pages/Contacts/Contacts";
import SearchPage from "./pages/SearchPage/SearchPage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/ourTeam" element={<OurTeam />} />
          <Route path="/ourImpact" element={<OurImpact />} />
          <Route path="/giftCard" element={<GiftCard />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
