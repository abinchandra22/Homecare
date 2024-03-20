import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Login from './pages/Login';
import ClintRegister from './pages/ClintRegister';
import AdminDashboard from './pages/AdminDashboard'
import { Navigate, Route, Routes } from 'react-router-dom';
import ServiceProvider from './pages/ServiceProvider';
import AdminLogin from './pages/AdminLogin';
import BookingAdmin from './pages/BookingAdmin';
import LeaverequestAdmin from './pages/LeaverequestAdmin';
import ClintDashboard from './pages/ClintDashboard';
import ClintLogin from './pages/ClintLogin';
import Clinttreatment from './pages/Clinttreatment';
import ServiceproviderDashboard from './pages/ServiceproviderDashboard';
import ServiceLogin from './pages/ServiceLogin';
import SpServiceReq from './pages/SpServiceReq';
import SpList from './SpList';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>

        <Route path='/clint-register' element={<ClintRegister />}></Route>
        <Route path='/clint-login' element={<ClintLogin />}></Route>
        <Route path='/clint-dashboard' element={<ClintDashboard />}></Route>
        <Route path='/clint-treatment' element={<Clinttreatment />}></Route>

        <Route path='/service-provider' element={<ServiceProvider />}></Route>
        <Route path='/service-dashboard' element={<ServiceproviderDashboard />}></Route>
        <Route path='/service-login' element={<ServiceLogin/>}></Route>
        <Route path='/service-request' element={<SpServiceReq/>}></Route>


        <Route path='/leave-request' element={<LeaverequestAdmin />}></Route>
        <Route path='/adm-login' element={<AdminLogin />}></Route>
        <Route path='/admin-dashboard' element={<AdminDashboard />}></Route>
        <Route path='/bookings' element={<BookingAdmin />}></Route>
        <Route path='/service-providerlist' element={<SpList />}></Route>


        <Route path='/*' element={<Navigate to={'/'} />}></Route>


      </Routes>

    </>
  )
}

export default App
