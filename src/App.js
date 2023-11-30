
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Register from './components/Register';
import TermsConditions from './components/TermsConditions';
import FetchData from './components/FetchData';
import HandleCoupon from './components/HandleCoupon';
function App() {
 
  return (
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<LandingPage/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/termsconditions" element={<TermsConditions/>}/>
  <Route path="/fetchdata/:eventId" element={<FetchData/>}/>
  <Route path="/coupon" element={<HandleCoupon/>}/>
 </Routes>
 </BrowserRouter>

  );
}

export default App;
