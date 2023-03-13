import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import recruiterService from "../service/recruiter.service";
import userService from "../service/user.service";

const ViewJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const loginUser = useSelector((u) => u.user);

  const [job, setJob] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    publishDate: "",
    lastApplyDate: "",
    companyName: "",
    vacancy: "",
  });

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    let res = await recruiterService.getJobById(id);
    setJob(res.data);
  };

  
  const sMsg = (msg) => {
    toast.success(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };



  const applyJob = (job) => {
    navigate("/user/applyJob/" + job.id);
  };

  return (
    <Wrapper>
      <div class="backimg justify-content-center p-4">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <form action="/user/search" method="post">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  name="ch"
                  placeholder="company name, category, location"
                />
                <button class="btn bg-primary  ms-2 col-md-2 text-light">
                  <i class="fa-solid fa-magnifying-glass"></i> Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-3 jobcard p-0 ">
            <div className="card paint-card">
              <div className="row p-2">
                <h3 className="text-center">Job</h3>
              </div>
              <div className="card-body">
                <h5 className="ml-4">{job.title}</h5>
                <div className="row p-2">
                  <div className="col-md-3">
                    <i className="fas fa-shopping-bag text-primary"></i> Company
                    : {job.companyName}
                  </div>
                  <div className="col-md-3">
                    <i className="fas fa-shopping-bag text-primary"></i>{" "}
                    Category : {job.category}
                  </div>
                  <div className="col-md-2">
                    <i className="fas fa-map-marker-alt text-warning"></i>
                    {job.location}
                  </div>
                  <div className="col-md-4">
                    <i className="fas fa-calendar-alt text-primary"></i> Publish
                    Date : {job.publishDate}
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-md-3">
                    <i className="fas fa-shopping-bag text-primary"></i> Vacancy
                    : {job.vacancy}
                  </div>
                  <div className="col-md-4">
                    <i className="fas fa-calendar-alt text-primary"></i> Last
                    Date : {job.lastApplyDate}
                  </div>
                </div>
                <hr />
                <div className="p-2">
                  <p>
                    <i className="far fa-clipboard text-primary"></i>
                    <span className="ms-2">{job.description}</span> .
                  </p>
                </div>
              </div>
              <div className="text-center mb-3">
                {!loginUser && (
                  <Link
                    to="/login"
                    className="btn btn-primary col-md-3 text-white"
                  >
                    Apply Now
                  </Link>
                )}





                 { loginUser && (
                  <button
                    onClick={() => applyJob(job)}
                    className="btn btn-primary col-md-3 text-white"
                  >
                    Apply Now
                  </button>
                )}

               


                
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .backimg {
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url("../img/job5.jpg");
    height: 20vh;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default ViewJob;
