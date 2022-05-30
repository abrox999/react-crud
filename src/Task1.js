import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Task1 = () => {
  let navigate = useNavigate();

  const [text, setText] = useState("");
  const [plate, setPlate] = useState("");

  const handleOnChange = (e) => {
    setPlate(e.target.value);
  };

  const plateValidate = () => {
    const regExOld = /^[0-9]{1,3}\s?(-|\s)\s?[0-9]{4}$/;
    const regExNew = /^([a-zA-Z]{2}\s)?[a-zA-Z]{2,3}\s?(-|\s)\s?[0-9]{4}$/;
    const regExVintage = /^[0-9]{1,2}\s?(ශ්‍රී|\s)\s?[0-9]{4}$/;

    if (regExOld.test(plate)) {
      setText("This Vehicle Is Old");
    } else if (regExNew.test(plate)) {
      setText("This Vehicle Is New");
    } else if (regExVintage.test(plate)) {
      setText("This Vehicle Is Vintage");
    } else {
      setText("Enter Valid Plate Number");
    }
  };

  return (
    <div className="container">
      <h1>Enter Vehicle License Plate Number</h1>
      <hr />
      <input
        className="form-control"
        placeholder="Plate Number"
        onChange={handleOnChange}
      ></input>
      {text}
      <button
        className="btn btn-warning ms-5 mt-3"
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </button>
      <button className="btn btn-success ms-5 mt-3" onClick={plateValidate}>
        Submit
      </button>
    </div>
  );
};

export default Task1;
