import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Dingo from "./pages/scholars/Dingo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/dingo" element={<Dingo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
