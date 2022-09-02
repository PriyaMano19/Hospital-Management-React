import './App.css';
import NavBar from './componets/NavBar';
import AddMedicines from './component/m_AddMedicines';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
   <Routes>
    
   <Route   path='/nav' element={<NavBar/>}/>
   <Route exact path='/med' element={<AddMedicines/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
