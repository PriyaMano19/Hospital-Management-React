import './App.css';
import NavBar from './componets/NavBar';
import AddMedicines from './componets/m_AddMedicines';
import MedicinesAdmin from './componets/m_MedicinesAdmin';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
   <Routes>
    
   <Route   path='/nav' element={<NavBar/>}/>
   <Route exact path='/med' element={<AddMedicines/>}/>
   <Route exact path='/med' element={<AddMedicines/>}/>
   <Route exact path='/show' element={<MedicinesAdmin/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
