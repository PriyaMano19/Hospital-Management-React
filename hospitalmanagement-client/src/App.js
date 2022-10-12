import './App.css';
import NavBar from './componets/NavBar';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import AddMedicines from './componets/m_AddMedicines';
import MedicinesAdmin from './componets/m_MedicinesAdmin';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <NavBar/>
   <Routes>
    
   <Route   path='/nav' element={<NavBar/>}/>
   <Route exact path='/med' element={<AddMedicines/>}/>
   <Route exact path='/show' element={<MedicinesAdmin/>}/>
   <Route path='/phar' element={<Pharmacy/>}/>
    <Route  path="/map" element={<Map/>} />
    <Route  path="/pay" element={<Pay/>} />
    <Route  path="/deliverydetails" element={<P_DeliveryDetails/>} />
    <Route path='/navad' element={<NavBarAdmin/>}/>
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
