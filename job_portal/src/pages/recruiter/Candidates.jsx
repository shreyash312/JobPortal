import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import recruiterService from "../../service/recruiter.service";

const Candidates = () => {
  const { id } = useParams();
  const [cand, setCan] = useState([]);

  useEffect(() => {
    recruiterService
      .getCandidatesByJobId(id)
      .then((res) => {
        setCan(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="card mt-3">
        <div className="card-header text-center fs-4">Candidates</div>
        <div className="card-body">
          <table class="table table bordered">
            <thead>
              <tr>
                <th scope="col">Sl No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile No</th>
                <th scope="col">Interview Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {cand.map((c, num) => (
                <tr>
                  <th scope="row">{num + 1}</th>
                  <td>{c.fullName}</td>
                  <td>{c.email}</td>
                  <td>{c.mobNo}</td>
                  <td>{c.interviewDate}</td>
                  <td><Link to={'/recruiter/interview/'+c.id}>Schedule</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Candidates;
