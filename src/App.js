import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Scholarship from "./pages/Scholarship";
import Aid from "./pages/Aid";
import Donate from "./pages/Donate";
import Faqs from "./pages/Faqs";
import Programmes from "./pages/Programmes";
import Structure from "./pages/Structure";
import ContactUs from "./pages/ContactUs";
import Patrons from "./pages/Patrons";
import OurScholars from "./pages/OurScholars";

import Dingo from "./pages/scholars/Dingo";
import Satkyar from "./pages/scholars/Satkyar";
import Blessing from "./pages/scholars/Blessing";
import Deeku from "./pages/scholars/Deeku";
import NayKawHtoo from "./pages/scholars/NayKawHtoo";
import Tony from "./pages/scholars/Tony";
import NayMin from "./pages/scholars/NayMin";
import ThanHtikeZin from "./pages/scholars/ThanHtikeZin";
import AungHtetOo from "./pages/scholars/AungHtetOo";
import NyiNyiTun from "./pages/scholars/NyiNyiTun";
import HtinLinZaw from "./pages/scholars/HtinLinZaw";
import SawSiyar from "./pages/scholars/SawSiyar";
import NaySoe from "./pages/scholars/NaySoe";

function App() {
  return (
    <BrowserRouter basename="/connecting-myanmar">
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="scholarship" element={<Scholarship />} />
          <Route path="aid" element={<Aid />} />
          <Route path="donate" element={<Donate />} />
          <Route path="faqs" element={<Faqs />} />

          {/* About */}
          <Route path="programmes" element={<Programmes />} />
          <Route path="structure" element={<Structure />} />
          <Route path="contact-us" element={<ContactUs />} />

          {/* Scholarship */}
          <Route path="patrons" element={<Patrons />} />
          <Route path="our-scholars" element={<OurScholars />} />

          {/* Scholars */}
          <Route path="dingo" element={<Dingo />} />
          <Route path="satkyar" element={<Satkyar />} />
          <Route path="blessing" element={<Blessing />} />
          <Route path="deeku" element={<Deeku />} />
          <Route path="naykawhtoo" element={<NayKawHtoo />} />
          <Route path="tony" element={<Tony />} />
          <Route path="naymin" element={<NayMin />} />
          <Route path="thanhtikezin" element={<ThanHtikeZin />} />
          <Route path="aunghtetoo" element={<AungHtetOo />} />
          <Route path="nyinyitun" element={<NyiNyiTun />} />
          <Route path="htinlinnzaw" element={<HtinLinZaw />} />
          <Route path="sawsiyar" element={<SawSiyar />} />
          <Route path="naysoe" element={<NaySoe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
