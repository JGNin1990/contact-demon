import { Route, Routes } from "react-router-dom";
import Create from "./Create";
import Dashboard from "./Dashboard";
import Guard from "./Guard";
import Home from "./Home";
import Login from "./Login";
import Nav from "./Nav";
import Register from "./Register";

const App = () => {
  return (
    <>
      <div className="container">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="dashboard"
            element={
              <Guard>
                <Dashboard></Dashboard>
              </Guard>
            }
          />
          <Route
            path="create"
            element={
              <Guard>
                <Create />
              </Guard>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
