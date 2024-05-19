import './App.css';
import {
  
  Routes,
  Route,
} 
from "react-router-dom";
import LoginPage from './pages/Login';
import SignupPage from './pages/SignUp';
import LandingPage from './pages/LandingPage'


// import PatientDashboard from "./pages/"
import DoctorsPortal from './pages/DoctorsPortal'
import ProtectedRoute from './components/auth/Protected';
import Room from './components/room/Room';
import PatientPortal from './pages/PatientsPortal';



function App() {
  return (
    <div>
     
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/" element={<LandingPage/>} />

            <Route path="/patientspage" element={<ProtectedRoute><PatientPortal/></ProtectedRoute>} />
            {/* <Route path="/patientdashboard" element={<PatientDashboard/>}/> */}
            <Route path="/doctorspage" element={<ProtectedRoute><DoctorsPortal/></ProtectedRoute>} />
            <Route path="/room/:roomid" element={<ProtectedRoute><Room/></ProtectedRoute>}/>

        </Routes>
     
    </div>

  );
}

export default App;