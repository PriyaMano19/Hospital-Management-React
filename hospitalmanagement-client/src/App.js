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
    <Route  path="/deliverydetails" element={<DeliveryDetails/>} />
    <Route path='/navad' element={<NavBarAdmin/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
