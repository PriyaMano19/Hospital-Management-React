import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./componets/NavBar";
import "antd/dist/antd.css";
import P_Dashboard from "./P_Views/P_Dashboard";
import P_ViewAllAppointments from "./P_Views/P_ViewAllAppointments";
import P_Booking from "./P_Views/P_Booking";
import P_Form from "./P_Views/P_Form";
import P_UserEdit from "./P_Views/P_UserEdit";
import P_Details from "./P_Views/P_Details";
import P_AssignDate from "./P_Views/P_AssignDate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <Route path="/nav" element={<NavBar />} /> */}
          <Route path="/labdash" element={<P_Dashboard />} />
          <Route path="/book" element={<P_Booking />} />
          <Route path="/" element={<P_ViewAllAppointments />} />
          <Route path="/form" element={<P_Form />} />
          <Route path="/edit/:id" element={<P_UserEdit />} />
          <Route path="/view" element={<P_Details />} />
          <Route path="/editdate/:id" element={<P_AssignDate />} />
          {/* <Route path="/view/:id" element={<P_Details />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
