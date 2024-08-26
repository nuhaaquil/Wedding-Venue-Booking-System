import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
 
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import VenueList from './Components/VenueList';
import FAQ from './Components/FAQ';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Booking from './Components/Booking';
import Cancellation from './Components/Cancellation';

import V1_TheBeginning from './Components/V1_TheBeginning';
import V2_Wiwaha from './Components/V2_Wiwaha';
import V3_Trisara_Hall from './Components/V3_Trisara_Hall';
import V4_Rustique_Winds from './Components/V4_Rustique_Winds';
import V5_JR_Resorts from './Components/V5_JR_Resorts';
import V6_Aarambha from './Components/V6_Aarambha';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Home></Home>}/>
        <Route path='/AboutUs' element={<AboutUs></AboutUs>}/>
        <Route path='/VenueList' element={<VenueList></VenueList>}/>
        <Route path='/FAQ' element={<FAQ></FAQ>}/>
        <Route path='/Booking' element={<Booking></Booking>}/>
        <Route path='/Cancellation' element={<Cancellation></Cancellation>}/>

        <Route path='/V1_TheBeginning' element={<V1_TheBeginning></V1_TheBeginning>}/>
        <Route path='/V2_Wiwaha' element={<V2_Wiwaha></V2_Wiwaha>}/>
        <Route path='/V3_Trisara_Hall' element={<V3_Trisara_Hall></V3_Trisara_Hall>}/>
        <Route path='/V4_Rustique_Winds' element={<V4_Rustique_Winds></V4_Rustique_Winds>}/>
        <Route path='/V5_JR_Resorts' element={<V5_JR_Resorts></V5_JR_Resorts>}/>
        <Route path='/V6_Aarambha' element={<V6_Aarambha></V6_Aarambha>}/>

        <Route path='/Contact' element={<Contact></Contact>}/>
        <Route path='/' element={<Login></Login>}/>
        <Route path='/Signup' element={<Signup></Signup>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

