
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MainPage } from './component/Admin-Navbar/MainPage';
import Navbar from './component/Navbar';
import { AuthGuard } from './guard/auth.guard';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import { Index } from './pages/Index';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UnAuthorized from './pages/UnAuthorized';
import 'react-toastify/dist/ReactToastify.css';
import ViewJob from './pages/ViewJob';
import ApplyJob from './pages/user/ApplyJob';
import AppliedJob from './pages/user/AppliedJob';
import RecSignup from './pages/RecSignup';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/rsignup' element={<RecSignup />}></Route>
        <Route path='/viewJob/:id' element={<ViewJob />}></Route>
        <Route path='/401' element={<UnAuthorized />}></Route>
        <Route path='/forgotPassword' element={<ForgotPassword />}></Route>

        {/* <Route path='/user/applyJob/:id' element={<ApplyJob />}></Route> */}

      <Route path='/user/*'>
          <Route path='applyJob/:id' element={<AuthGuard roles={['ROLE_USER']}><ApplyJob/></AuthGuard>}/>
          <Route path='appliedJob' element={<AuthGuard roles={['ROLE_USER']}><AppliedJob/></AuthGuard>}/>
      </Route>


        <Route path='/admin/*' element={
          <AuthGuard roles={['ROLE_ADMIN']}>
            <MainPage />
          </AuthGuard>
        }>


        </Route>

        <Route path='/recruiter/*' element={
          <AuthGuard roles={['ROLE_RECRUITER']}>
            <MainPage />
          </AuthGuard>
        }></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
