import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import userService from "./services/user.service";

const AddUser = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [name, setName] = useState("");
  const [carType, setType] = useState("");
  const [plateNum, setPlate] = useState("");

  const saveUser = (e) => {
    e.preventDefault();

    const user = { name, carType, plateNum, id };
    if (id) {
      userService.update(user).then((response) => {
        console.log("data updated successfully", response.data);
        navigate("/task3");
      });
    } else {
      userService.create(user).then((response) => {
        console.log("data added successfully", response.data);
        navigate("/task3");
      });
    }
  };

  useEffect(() => {
    if (id) {
      userService.get(id).then((user) => {
        setName(user.data.name);
        setType(user.data.carType);
        setPlate(user.data.plateNum);
      });
    }
  }, []);

  return (
    <div className="container">
      <h1>Add Users</h1>
      <hr />
      <form>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter name"
            className="form-control mb-2"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter car type"
            className="form-control mb-2"
            id="type"
            value={carType}
            onChange={(e) => setType(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter plate number"
            className="form-control"
            id="plate"
            value={plateNum}
            onChange={(e) => setPlate(e.target.value)}
          />
        </div>
        <div>
          <button
            className="btn btn-warning mt-3"
            onClick={() => {
              navigate("/task3");
            }}
          >
            Back
          </button>
          <button
            className="btn btn-success ms-3 mt-3"
            onClick={(e) => saveUser(e)}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
