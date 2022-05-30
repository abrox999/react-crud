import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Error from "./Error";
import Task1 from "./Task1";
import Task2 from "./Task2";
import Task3 from "./Task3";
import AddUser from "./AddUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/users/edit/:id" element={<AddUser />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
