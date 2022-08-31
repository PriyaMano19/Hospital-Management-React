import "./App.css";
import NavBar from "./componets/NavBar";
import Dashboard from "./P_Views/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <Route path="/nav" element={<NavBar />} /> */}
          <Route path="/labdash" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
