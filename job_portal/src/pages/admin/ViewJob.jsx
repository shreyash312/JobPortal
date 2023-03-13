import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import recruiterService from "../../service/recruiter.service";

const AViewJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
    recruiterService.getJobById(id).then((res) => {
      setJob(res.data);
    });
  }, []);

  const edit = (id) => {
    const st = window.confirm("Do you want Edit");
    if (st) {
      navigate("/recruiter/editJob/" + id);
    }
  };

  const deleteJOb = (id) => {
    const st = window.confirm("Do you want Delete");
    if (st) {
      recruiterService.deleteJob(id).then(() => {
        sMsg("Delete Sucessfully");
        setTimeout(() => {
          navigate("/recruiter/viewAllJob");
        }, 3000);
      });
    }
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12  mt-3 jobcard p-0 ">
            <div className="card paint-card">
              <div className="row p-2">
                <div className="col-md-4 offset-md-3 text-center">
                  <h3>Job</h3>
                </div>
                {/* <div className="col-md-4 text-end p-1">
                  <a
                    onClick={() => edit(job.id)}
                    className="btn btn-sm btn-success text-white"
                  >
                    Edit
                  </a>
                  <a
                    onClick={() => deleteJOb(job.id)}
                    className="btn btn-sm btn-danger text-white ms-2"
                  >
                    Delete
                  </a>
                </div> */}
              </div>
              <div className="card-body">
                <h5 className="ml-2">{job.title}</h5>
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
                  <div className="col-md-4">
                    <i className="fas fa-calendar-alt text-primary"></i> Last
                    Date : {job.lastApplyDate}
                  </div>
                  <div className="col-md-3">
                    <i className="fas fa-shopping-bag text-primary"></i> Vacancy
                    : {job.vacancy}
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

export default AViewJob;
