import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userService from "../../service/user.service";

const AppliedJob = () => {
  const [candidate, setCandidate] = useState([]);

  useEffect(() => {
    userService
      .getAppliedJob()
      .then((res) => {
        setCandidate(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="container p-2">
        <div class="card paint-card">
          <div className="card-header bg-light">
            <h4 class="form-signin-heading text-center">Applied Job</h4>
          </div>
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">SL No</th>
                  <th scope="col">Job</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Email </th>
                  <th scope="col">Mob No</th>
                  <th scope="col">Interview Date</th>
                </tr>
              </thead>
              <tbody>
                {candidate.map((c, num) => (
                  <tr>
                    <th scope="row">{num + 1}</th>

                    <td>
                      <Link to={"/viewJob/" + c.job.id}>{c.job.title}</Link>
                    </td>

                    <td>{c.fullName}</td>

                    <td>{c.email}</td>
                    <td>{c.mobNo}</td>
                    <td>{c.interviewDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppliedJob;
