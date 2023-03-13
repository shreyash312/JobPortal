import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import recruiterService from "../service/recruiter.service";
import userService from "../service/user.service";

const Home = () => {
  const [job, setJob] = useState([]);
  const [ch, setCh] = useState();

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    userService
      .getAllJobs()
      .then((res) => {
        setJob(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSearch = (e) => {
    setCh(e.target.value);
  };

  const search = (e) => {
    e.preventDefault();

    if (!ch) {
      init();
    } else {
      userService
        .search(ch)
        .then((res) => {
          if (res.data.length > 0) {
            setJob(res.data);
          } else {
            notify();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const notify = () => {
    toast.error("Not Available", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <Wrapper>
      <div class="backimg justify-content-center p-4">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <form onSubmit={(e) => search(e)} method="post">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  name="ch"
                  placeholder="company name, category, location"
                  onChange={(e) => handleSearch(e)}
                />
                <button class="btn bg-primary  ms-2 col-md-2 text-light">
                  <i class="fa-solid fa-magnifying-glass"></i> Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="container">
        <h3 class="text-center text-primary mt-2">All Jobs</h3>

        {job.map((j) => (
          <div class="row">
            <div class="col-md-10 offset-md-1 mt-3 jobcard p-0 ">
              <Link to={"/viewJob/" + j.id}>
                <div class="card paint-card">
                  <div class="card-body">
                    <h5 class="ml-2">{j.title}</h5>
                    <div class="row p-2">
                      <div class="col-md-3">
                        <i class="fa-solid fa-building text-primary"></i>{" "}
                        Company : {j.companyName}
                      </div>
                      <div class="col-md-3">
                        <i class="fas fa-shopping-bag text-primary"></i>{" "}
                        Category : {j.category}
                      </div>
                      <div class="col-md-2">
                        <i class="fas fa-map-marker-alt text-warning"></i>
                        {j.location}
                      </div>
                      <div class="col-md-4">
                        <i class="fas fa-calendar-alt text-primary"></i> Last
                        Date : {j.lastApplyDate}
                      </div>
                    </div>
                    <div class="p-2">
                      <p>
                        <i class="far fa-clipboard text-primary"></i>
                        {j.description.substring(0,250)} ...
                        <span class="text-primary">Read more</span>
                      </p>

                      {/* <p>
										<i class="far fa-clipboard text-primary"></i>
										descrption.<span class="text-primary"></span>
									</p> */}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
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

  .jobcard:hover {
    /*  transform: scale(1.0); */
    /*box-shadow: 0 0 5px rgba(33, 33, 33, .2);
    cursor: pointer; */
    /* box-shadow: 0 5px  5px rgba(0,0,0,0.15);
     */
    position: relative;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.3s ease-in-out;
  }

  .jobcard a {
    text-decoration: none;
    color: black;
  }

  .jobcard a:hover {
    text-decoration: none;
    color: black;
  }
`;

export default Home;
