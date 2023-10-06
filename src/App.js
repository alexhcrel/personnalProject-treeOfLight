import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Produits from "./pages/Produits";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/produits/:produitCategory"} element={<Produits />} />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
