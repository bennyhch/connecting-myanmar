import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Scholarship from "./pages/Scholarship";
import Aid from "./pages/Aid";
import Donate from "./pages/Donate";
import Art from "./pages/Art";
import Faqs from "./pages/Faqs";

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
          <Route path="/art" element={<Art />} />
          <Route path="/faqs" element={<Faqs />} />

          {/* Scholars */}
          <Route path="/dingo" element={<Dingo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
