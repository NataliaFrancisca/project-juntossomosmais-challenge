import { GlobalStyle } from "./styles/Global";

import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Nav />
      <Header />
    </div>
  );
}

export default App;
