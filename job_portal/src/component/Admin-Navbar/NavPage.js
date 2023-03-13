import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/admin/Home';
import AddJob from '../../pages/recruiter/AddJob';
import Candidates from '../../pages/recruiter/Candidates';
import CViewAllJobs from '../../pages/recruiter/CViewAllJobs';
import EditJob from '../../pages/recruiter/EditJob';
import EditProfile from '../../pages/recruiter/EditProfile';
import RHome from '../../pages/recruiter/Home';
import Interview from '../../pages/recruiter/Interview';
import ViewAllJobs from '../../pages/recruiter/ViewAllJobs';
import ViewJob from '../../pages/recruiter/ViewJob';
import ViewProfile from '../../pages/recruiter/ViewProfile';
import AViewAllJobs from '../../pages/admin/ViewAllJobs';
import AViewJob from '../../pages/admin/ViewJob';
import ViewUser from '../../pages/admin/ViewUser';
import ViewRecruiter from '../../pages/admin/ViewRecruiter';
const NavPage = () => {

    return (

        <div>
            <Routes>
                {/* <Route path='/' element={<Home />}></Route> */}


                {/* Recruiter route */}
                <Route path='/home' element={<RHome />}></Route>
                <Route path='/addJobs' element={<AddJob />}></Route>
                <Route path='/viewAllJob' element={<ViewAllJobs />}></Route>
                <Route path='/cviewAllJob' element={<CViewAllJobs />}></Route>
                <Route path='/candidates' element={<Candidates />}></Route>
                <Route path='/profile' element={<ViewProfile />}></Route>
                <Route path='/viewJob/:id' element={<ViewJob />}></Route>
                <Route path='/editJob/:id' element={<EditJob />}></Route>
                <Route path='/editProfile' element={<EditProfile />}></Route>
                <Route path='/candidates/:id' element={<Candidates />}></Route>
                <Route path='/interview/:id' element={<Interview />}></Route>
                
                {/* admin route */}

                <Route path='/ahome' element={<Home />}></Route>
                <Route path='/aviewJob' element={<AViewAllJobs />}></Route>
                <Route path='/aviewJob/:id' element={<AViewJob />}></Route>
                <Route path='/viewUser' element={<ViewUser />}></Route>
                <Route path='/viewRecruiter' element={<ViewRecruiter />}></Route>
                {/* 
                <Route path='aviewHome' element={<AviewHome />}></Route>
                <Route path='abooking' element={<ABooking />}></Route>
                <Route path='viewUser' element={<ViewUser />}></Route> */}


            </Routes>

        </div>

    )
}

export { NavPage };
