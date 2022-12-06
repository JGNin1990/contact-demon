import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./services/userSlice";

const Login = () => {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("oknasa@gmail.com");
  const [password, setPassword] = useState("aaaaaa");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const apiLogin = async () => {
    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    const { data } = await axios.post(
      "http://go.contact.mmeducare.com/api/v1/login",
      formData
    );
    dispatch(login(data));

    if (data?.success) {
      navigate("/dashboard");
    }
    // console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, email, password, confirm, photo);
    apiLogin();
  };
  return (
    <>
      <form className="col-4 mx-auto py-5" onSubmit={handleSubmit}>
        <h1>Login Account</h1>
        <input
          type="email"
          value={email}
          className="form-control my-5"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          type="password"
          className="form-control my-5"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn btn-success">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
