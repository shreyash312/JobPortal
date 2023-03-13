import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import recruiterService from "../../service/recruiter.service";

const ViewAllJobs = () => {
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

export default ViewAllJobs;
