import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Home = () => {
  let navigate = useNavigate();

  return (
    <div className="home">
      <button
        class="btn btn-outline-primary btn-lg w-100 py-5 my-5"
        onClick={() => {
          navigate("/Task1");
        }}
      >
        Task 1
      </button>
      <button
        class="btn btn-outline-secondary  btn-lg w-100 py-5 my-5"
        onClick={() => {
          navigate("/Task2");
        }}
      >
        Task 2
      </button>
      <button
        class="btn btn-outline-success btn-lg w-100 py-5 my-5 "
        onClick={() => {
          navigate("/Task3");
        }}
      >
        Task 3
      </button>
    </div>
  );
};

export default Home;
