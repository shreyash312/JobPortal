import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import recruiterService from "../../service/recruiter.service";

const Interview = () => {
  const { id } = useParams();
  const [candidate, setCandidate] = useState({
    fullName: "",
    email: "",
    mobNo: "",
    experience: "",
    technicalSkill: "",
    user: "",
    job:"",
    interviewDate: "",
  });

  useEffect(() => {
    recruiterService
      .getCandidateById(id)
      .then((res) => {
        setCandidate(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCandidate({ ...candidate, [name]: value });
  };
  const navigate = useNavigate();
  const updateStatus = (e) => {
    e.preventDefault();

    recruiterService
      .updateSchedule(candidate.id, candidate.interviewDate)
      .then((res) => {
        sMsg("Sceduled Sucessfully");
        setTimeout(() => {
            navigate("/recruiter/candidates/"+candidate.job.id);
        }, 3000);
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
      <div className="card mt-3">
        <div className="card-header text-center fs-4 bg-light">
          Schedule Interview
        </div>
        <div className="card-body">
          <form onSubmit={(e) => updateStatus(e)}>
            <div className="mb-3">
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="form-control"
                value={candidate.user.fullName}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Date</label>
              <input
                type="date"
                name="interviewDate"
                value={candidate.interviewDate}
                className="form-control"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button className="btn btn-primary">Schedule</button>
          </form>
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

export default Interview;
