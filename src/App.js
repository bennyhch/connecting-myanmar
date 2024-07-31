import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/aid" element={<Aid />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/faqs" element={<Faqs />} />

          {/* About */}
          <Route path="programmes" element={<Programmes />} />
          <Route path="structure" element={<Structure />} />
          <Route path="contact-us" element={<ContactUs />} />

          {/* Scholarship */}
          <Route path="patrons" element={<Patrons />} />
          <Route path="our-scholars" element={<OurScholars />} />

          {/* Scholars */}
          <Route path="/dingo" element={<Dingo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
