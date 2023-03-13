import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import homeService from "../../service/home.service";
import userService from "../../service/home.service";
import recruiterService from "../../service/recruiter.service";
import { setCurrentUser } from "../../store/action/user.action";

const EditProfile = () => {
  const [user, setUser] = useState({
    id: "",
    fullName: "",
    email: "",
    password: "",
    mobNo: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    role: "",
    companyName:"",
    experience:"",
    skill:"" 
  });

  const loginUser = useSelector((state) => state.user);
  const [msg, setMsg] = useState(true);
  if (msg) {
    setUser(loginUser);
    setMsg(false);
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const register = (e) => {
    e.preventDefault();

    recruiterService
      .updateProfile(user)
      .then((res) => {
        dispatch(setCurrentUser(user));
        setTimeout(pageRedirect, 3000);
        notify();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const notify = () => {
    toast.success("Profile Update Sucesfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const pageRedirect = () => {
    navigate("/recruiter/profile");
  };

  return (
    <div
      className="container-fluid p-2"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="row">
        <div className="col-md-12 cardx">
          <div className="card paint-card">
            <div className="card-header">
              <h3 className="text-center text-dark">Edit Profile</h3>
            </div>
            <div className="card-body">
              <form
                className=""
                method="post"
                id="userRegister"
                onSubmit={(e) => register(e)}
              >
                <div className="row">
                  <div className="col">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      className="form-control form-control-sm"
                      value={user.fullName}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="col">
                    <label>Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      className="form-control form-control-sm"
                      value={user.companyName}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <label>Email Id</label>
                    <input
                      type="email"
                      name="email"
                      readOnly
                      required
                      className="form-control form-control-sm"
                      value={user.email}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="col">
                    <label>Mobile No</label>
                    <input
                      type="number"
                      name="mobNo"
                      required
                      maxLength={10}
                      minLength={10}
                      className="form-control form-control-sm"
                      value={user.mobNo}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>

                <div className="form-group mt-3">
                  <label>Address</label>
                  <textarea
                    required
                    rows="3"
                    cols=""
                    className="form-control"
                    name="address"
                    value={user.address}
                    onChange={(e) => handleChange(e)}
                  ></textarea>
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      required
                      className="form-control form-control-sm"
                      value={user.city}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="col">
                    <label>State</label>
                    <input
                      type="text"
                      name="state"
                      className="form-control form-control-sm"
                      value={user.state}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="col">
                    <label>Pincode</label>
                    <input
                      type="number"
                      name="pincode"
                      className="form-control form-control-sm"
                      value={user.pincode}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>

                <div className="text-center mt-3">
                  <button className="btn btn-primary col-md-12">Update</button>
                </div>
              </form>
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
      />
    </div>
  );
};

export default EditProfile;
