import { useEffect, useState } from "react";
import userService from "./services/user.service";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Task3 = () => {
  let navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    userService
      .getAll()
      .then((response) => {
        console.log("Printing user data", response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  };

  const handleDelete = (id) => {
    userService.remove(id).then((response) => {
      console.log("User deleted", response.data);
      init();
    });
  };

  return (
    <div className="container">
      <h1>CRUD Application</h1>
      <hr />
      <div>
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Car Type</th>
              <th>Plate Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.carType}</td>
                <td>{user.plateNum}</td>
                <td>
                  <Link className="btn btn-info" to={"/users/edit/" + user.id}>
                    Update
                  </Link>
                  <button
                    className="btn btn-danger ms-3"
                    onClick={(e) => {
                      handleDelete(user.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="btn btn-warning mt-3"
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </button>
      <button
        className="btn btn-success ms-3 mt-3"
        onClick={() => {
          navigate("/AddUser");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Task3;
