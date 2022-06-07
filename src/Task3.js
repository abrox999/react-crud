import { useEffect, useState } from "react";
import userService from "./services/user.service";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Task3 = () => {
  let navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  const init = () => {
    userService
      .getAll()
      .then((response) => {
        console.log("Printing user data ", response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log("Printing id", id);
    userService
      .remove(id)
      .then((response) => {
        console.log("user deleted successfully", response.data);
        init();
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  };

  const deleteAll = () => {
    userService
      .removeAll()
      .then((response) => {
        console.log("all users deleted successfully", response.data);
        init();
      })
      .catch((error) => {
        console.log("something went wrong", error);
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
                    onClick={() => {
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
      <button
        className="btn btn-danger ms-3 mt-3"
        onClick={() => {
          deleteAll(users);
        }}
      >
        delete all
      </button>
    </div>
  );
};

export default Task3;
