import React, { useEffect } from 'react';
import './assets/css/style.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/img/apple-touch-icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCurrentUser } from '../../store/action/user.action';

const Sidebar = () => {

    const loginUser = useSelector(state => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(clearCurrentUser());
        navigate("/login");
    }



    return (
        <>


            {
                loginUser.role[0].role === 'ROLE_RECRUITER' &&

                <aside id="sidebar" className="sidebar" >

                    <ul className="sidebar-nav" id="sidebar-nav">

                        <li className="nav-item">
                            <Link to="/recruiter/home" className="nav-link ">
                                <i className="bi bi-grid"></i>
                                <span>Dashboard</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="addJobs" className="nav-link collapsed">
                                <i class="fa-solid fa-house"></i>
                                <span>Add Jobs</span>
                            </Link></li>

                        <li className="nav-item">
                            <Link to="viewAllJob" className="nav-link collapsed">
                                <i class="fa-solid fa-list"></i>
                                <span>View Jobs</span>
                            </Link></li>


                        <li className="nav-item">
                            <Link to="cviewAllJob" className="nav-link collapsed" >
                                <i className="bi bi-app"></i>
                                <span>Candidates</span>
                            </Link></li>

                        <li className="nav-item">
                            <Link to="profile" className="nav-link collapsed">
                                <i class="fa-solid fa-circle-user"></i>
                                <span>Profile</span>
                            </Link></li>

                        <li className="nav-item">
                            <a className="nav-link collapsed" onClick={() => logout()}>
                                <i class="fa-solid fa-right-from-bracket"></i>
                                <span>Logout</span>
                            </a></li>
                    </ul>
                </aside>

            }


            {
                loginUser.role[0].role === 'ROLE_ADMIN' &&

                <aside id="sidebar" className="sidebar" >

                    <ul className="sidebar-nav" id="sidebar-nav">

                        <li className="nav-item">
                            <Link to="/admin/ahome" className="nav-link ">
                                <i className="bi bi-grid"></i>
                                <span>Dashboard</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="aviewJob" className="nav-link collapsed">
                                <i class="fa-solid fa-list"></i>
                                <span>Jobs</span>
                            </Link></li>

                        <li className="nav-item">
                            <Link to="viewUser" className="nav-link collapsed">
                                <i class="fa-solid fa-circle-user"></i>
                                <span>User</span>
                            </Link></li>

                        <li className="nav-item">
                            <Link to="viewRecruiter" className="nav-link collapsed">
                                <i class="fa-solid fa-circle-user"></i>
                                <span>Recruiter</span>
                            </Link></li>

                        <li className="nav-item">
                            <a className="nav-link collapsed" onClick={() => logout()}>
                                <i class="fa-solid fa-right-from-bracket"></i>
                                <span>Logout</span>
                            </a></li>
                    </ul>
                </aside>

            }



        </>
    )
}

export { Sidebar };
