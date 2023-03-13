import React, { useState } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ViewProfile = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    mobNo: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    roleId: "",
  });

  const [msg, setMsg] = useState(true);
  const loginUser = useSelector((state) => state.user);
  console.log(loginUser);
  if (msg) {
    setUser(loginUser);
    setMsg(false);
  }

  const navigate = useNavigate();

  const updateConfirm = () => {
    const con = window.confirm("Are you confirm want to Edit Profile");
    if (con) {
      navigate("/recruiter/editProfile");
    }
  };

  return (
    <>
      <div className="container p-3">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card border-0 cardx">
              <div className="card-header fs-4 text-center bg-light">
                <i class="fa-solid fa-circle-user"></i>
                <br></br>View Profile
              </div>
              <div className="card-body">
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td>Full Name</td>
                      <td>:</td>
                      <td>{user.fullName}</td>
                    </tr>
                    <tr>
                      <td>Email </td>
                      <td>:</td>
                      <td>{user.email}</td>
                    </tr>

                    <tr>
                      <td>Mob No </td>
                      <td>:</td>
                      <td>{user.mobNo}</td>
                    </tr>

                    <tr>
                      <td>Address </td>
                      <td>:</td>
                      <td>{user.address}</td>
                    </tr>

                    <tr>
                      <td>City </td>
                      <td>:</td>
                      <td>{user.city}</td>
                    </tr>
                    <tr>
                      <td>State </td>
                      <td>:</td>
                      <td>{user.state}</td>
                    </tr>
                    <tr>
                      <td>Pincode </td>
                      <td>:</td>
                      <td>{user.pincode}</td>
                    </tr>
                  </tbody>
                </table>
                <button
                  onClick={() => updateConfirm()}
                  className="btn btn-primary btn-sm col-md-12"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProfile;
