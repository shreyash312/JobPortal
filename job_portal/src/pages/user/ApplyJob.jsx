import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import recruiterService from "../../service/recruiter.service";
import userService from "../../service/user.service";

const ApplyJob = () => {
  const [job, setJob] = useState({
    id: "",
    title: "",
    description: "",
    category: "",
    location: "",
    publishDate: "",
    lastApplyDate: "",
    companyName: "",
    vacancy: "",
  });

  const [candidate, setCandidate] = useState({
    fullName: "",
    email: "",
    mobNo: "",
    jobId: "",
    experience: "",
    technicalSkill: "",
    interviewDate: "NA",
  });
  const [st, setSt] = useState(false);
  const loginUser = useSelector((u) => u.user);
  const [resume, setResume] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    let res = await recruiterService.getJobById(id);
    setJob(res.data);
    check(res.data);
  };

  const check = (j) => {
    if (loginUser != null) {
      userService
        .checkAppliedJob(loginUser.id, j.id)
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            setSt(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setCandidate({ ...candidate, [name]: value });
  //   };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCandidate((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleImage = (e) => {
    setResume(e.target.files[0]);
  };

  const saveApplyJob = (e) => {
    e.preventDefault();
    candidate.jobId = job.id;
    userService
      .applyJob(candidate)
      .then((res) => {
        sMsg("Job Applied Sucessfully");
        check(job);
        // setTimeout(() => {
        //   navigate("/user/applyJob/" + job.id);
        // }, 3000);

        setCandidate({
          fullName: "",
          email: "",
          mobNo: "",
          jobId: "",
          experience: "",
          technicalSkill: "",
          interviewDate: "NA",
        });
      })
      .catch((error) => {
        console.log(error);
      });
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

  return (
    <>
      <div className="container p-1">
        <div className="row">
          <div className="col-md-12 jobcard p-0 ">
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
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card">
              <div className="card-header text-center fs-3">Fill Form</div>
              <div className="card-body">
                <form onSubmit={(e) => saveApplyJob(e)} method="post">
                  <div className="mb-3">
                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="fullName"
                          value={candidate.fullName}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="col">
                        <label htmlFor="">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          value={candidate.email}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="">Mobile Number</label>
                        <input
                          type="text"
                          className="form-control"
                          name="mobNo"
                          value={candidate.mobNo}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="col">
                        <label htmlFor="">Experience</label>
                        <input
                          type="text"
                          className="form-control"
                          name="experience"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="">Technical Skill</label>
                      <input
                        type="text"
                        className="form-control"
                        name="technicalSkill"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>

                  <div className="text-center mb-3">
                    {!st && (
                      <button className="btn btn-primary col-md-12 text-white">
                        Apply
                      </button>
                    )}

                    {st && (
                      <button disabled className="btn btn-success col-md-12 text-white">
                        Applied
                      </button>
                    )}
                  </div>
                </form>
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
    </>
  );
};

export default ApplyJob;
