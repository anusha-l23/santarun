
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Register from './components/Register';
import TermsConditions from './components/TermsConditions';
function App() {
 
  return (
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<LandingPage/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/termsconditions" element={<TermsConditions/>}/>
  
 </Routes>
 </BrowserRouter>

  );
}

export default App;
