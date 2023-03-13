import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import recruiterService from "../../service/recruiter.service";
const RHome = () => {
  const [job, setJob] = useState([]);

  useEffect(() => {
    recruiterService
      .getAllJobs()
      .then((res) => {
        setJob(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="row ">
        <p class="text-center fs-1">Recruiter Dashboard</p>
        <div class="col-md-6 cardx">
          <a class="text-decoration-none bg-custom">
            <div class="card paint-card">
              <div class="card-body text-center">
                <i class="bi bi-journal-check fa-2x"></i>
                <br />
                <p class="fs-3 text-dark"> Jobs</p>
                <p class="fs-3 text-dark"></p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6">
          <a class="text-decoration-none bg-custom">
            <div class="card paint-card">
              <div class="card-body text-center">
                <i class="bi bi-minecart fa-2x"></i>
                <br />
                <p class="fs-3 text-dark">Candidates</p>
                <p class="fs-3 text-dark"></p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-header text-center fs-4">All Jobs</div>
        <div className="card-body">
          <table class="table table bordered">
            <thead>
              <tr>
                <th scope="col">Sl No</th>
                <th scope="col">Title</th>
                <th scope="col">Category</th>
              </tr>
            </thead>
            <tbody>
              {job.map((j, num) => (
                <tr>
                  <th scope="row">{num + 1}</th>
                  <td>
                    <Link to={"/recruiter/viewJob/" + j.id}>{j.title}</Link>
                  </td>
                  <td>{j.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RHome;
