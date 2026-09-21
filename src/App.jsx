import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar"
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;