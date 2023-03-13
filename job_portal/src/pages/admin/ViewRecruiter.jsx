import React, { useEffect, useState } from 'react'
import userService from '../../service/user.service';

const ViewRecruiter = () => {
    const [user, setUser] = useState([]);

    const [filterUser, setFilterUser] = useState();
  
    useEffect(() => {
      init();
    }, []);
  
    const init = async () => {
      const userx = await userService.getAllRecruiter();
      setUser(userx.data);
    };
  
    return (
      <>
        <div className="card mt-3">
          <div className="card-header text-center fs-4 bg-light">All User</div>
          <div className="card-body">
            <table class="table table bordered">
              <thead>
                <tr>
                  <th scope="col">Sl No</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Mob No</th>
                  <th scope="col">Company</th>
                  <th scope="col">Address</th>
                </tr>
              </thead>
              <tbody>
                {user.map((u, num) => (
                  <tr>
                    <th scope="row">{num + 1}</th>
                    <td>{u.fullName}</td>
                    <td>{u.email}</td>
                    <td>{u.mobNo}</td>
                    <td>{u.companyName}</td>
                    <td>
                      {u.address},{u.city} <br />
                      {u.state},{u.pincode}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
}

export default ViewRecruiter