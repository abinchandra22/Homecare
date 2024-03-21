import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Client/Home';
import Login from './pages/Login';
import ClintRegister from './Client/ClintRegister';
import AdminDashboard from './Admin/AdminDashboard'
import { Navigate, Route, Routes } from 'react-router-dom';
import ServiceProvider from './Service Provider/ServiceProvider';
import AdminLogin from './Admin/AdminLogin';
import BookingAdmin from './Admin/BookingAdmin';
import LeaverequestAdmin from './Admin/LeaverequestAdmin';
import ClintDashboard from './Client/ClintDashboard';
import ClintLogin from './Client/ClintLogin';
import Clinttreatment from './Client/Clinttreatment';
import ServiceproviderDashboard from './Service Provider/ServiceproviderDashboard';
import ServiceLogin from './Service Provider/ServiceLogin';
import SpServiceReq from './Service Provider/SpServiceReq';
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
