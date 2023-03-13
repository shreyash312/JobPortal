import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import recruiterService from "../../service/recruiter.service";

const AddJob = () => {
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

  const eMsg = (msg) => {
    toast.error(msg, {
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

  const handleChange = (e) => {
    //console.log("ok")
    // return setJob(...job, [e.target.name] = e.target.value);
    // console.log(job);

    const { name, value } = e.target;
    setJob((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    //console.log(job);
  };

  const addJobs = (e) => {
    e.preventDefault();

    recruiterService
      .saveJobs(job)
      .then((data) => {
        sMsg("Job Added Suceefully");
        setJob({
          title: "",
          description: "",
          category: "Choose...",
          location: "Choose...",
          publishDate: "",
          lastApplyDate: "",
          companyName: "",
          vacancy: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="card mt-2">
        <div className="card-header fs-4 text-center">Add Jobs</div>
        <div className="card-body">
          <form method="post" onSubmit={(e) => addJobs(e)}>
            <input type="hidden" name="recruiterId" />

            <div className="mb-3">
              <label>Enter Title</label>
              <input
                type="text"
                name="title"
                required
                className="form-control"
                value={job.title}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3 row">
              <div className="col">
                <label>Company Name</label>
                <input
                  type="text"
                  required
                  name="companyName"
                  className="form-control"
                   value={job.companyName}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="col">
                <label>Location</label>
                <select
                  name="location"
                  required
                  className="form-control"
                  id="inlineFormCustomSelectPref"
                  onChange={(e) => handleChange(e)}
                  value={job.location}
                >
                  <option value="">choose...</option>
                  <option value="Banglore">Banglore</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Hydrabad">Hydrabad</option>
                  <option value="Bhubaneswar">Bhubaneswar</option>
                  <option value="Delhi">Delhi</option>
                </select>
              </div>

              <div className="col">
                <label>Category</label>
                <select
                  className="form-control "
                  required
                  id="inlineFormCustomSelectPref"
                  name="category"
                  onChange={(e) => handleChange(e)}
                  value={job.category}
                >
                  <option value="">Choose...</option>
                  <option value="IT">IT</option>
                  <option value="Devloper">Devloper</option>
                  <option value="Banking">Banking</option>
                  <option value="Engineer">Engineer</option>
                  <option value="Teacher">Teacher</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <label>Publish Date</label>
                <input
                  type="date"
                  required
                  name="publishDate"
                  className="form-control"
                   value={job.publishDate}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="col">
                <label>Last Apply Date</label>
                <input
                  type="date"
                  required
                  name="lastApplyDate"
                  className="form-control"
                    value={job.lastApplyDate}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="col">
                <label>Vacancy</label>
                <input
                  type="number"
                  required
                  name="vacancy"
                  className="form-control"
                   value={job.vacancy}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div className="mt-3">
              <label>Enter Description</label>
              <textarea
                required
                rows="6"
                cols=""
                name="description"
                maxlength="1000"
                className="form-control"
                onChange={(e) => handleChange(e)}
                value={job.description}
              >
                
              </textarea>
            </div>
            <button className="btn btn-success mt-2">Publish Job</button>
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

export default AddJob;
