import { GlobalStyle } from "./styles/Global";

import Member from "./pages/Member/Member";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";

import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
       
          <Route path="/" 
          element={
              <>
                <Nav />
                <Header />
              </>} 
          />

          <Route path="/members/:id" element={<Member />} />
         
        </Routes>

      </BrowserRouter>
    
    </div>
  );
}

export default App;
