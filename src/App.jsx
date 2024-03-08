import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Login from './pages/Login';
import ClintRegister from './pages/ClintRegister';
import AdminDashboard from './pages/AdminDashboard'
import { Navigate, Route, Routes } from 'react-router-dom';
import ServiceProvider from './pages/ServiceProvider';
import ClintDashboard from './pages/ClintDashboard';

function App() {

  return (
    <>
     <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/clint-register' element={<ClintRegister/>}></Route>
    <Route path='/admin-dashboard' element={<AdminDashboard/>}></Route>
    <Route path='/service-provider' element={<ServiceProvider/>}></Route>
<Route path='/clint-dashboard' element={<ClintDashboard/>}></Route>

    <Route path='/*'element={<Navigate to={'/'}/>}></Route>


   </Routes>

    </>
  )
}

export default App
