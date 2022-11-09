import { GlobalStyle } from "./styles/Global";

import Member from "./pages/Member/Member";
import Home from "./pages/Home/Home";

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/members"} />} />
          <Route path="/members" element={<Home />} />
          <Route path="/members/:id" element={<Member />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
