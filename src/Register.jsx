import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [photo, setPhoto] = useState("");

  const nav = useNavigate();

  const apiRegister = async () => {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirmation", confirm);
    formData.append("userPhoto", photo);

    const { data } = await axios.post(
      "http://go.contact.mmeducare.com/api/v1/register ",
      formData
    );

    if (data.success) {
      nav("/dashboard");
    }
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, email, password, confirm, photo);
    apiRegister();
  };
  return (
    <>
      <form className="col-6 mx-auto py-5" onSubmit={handleSubmit}>
        <h1>Register Account</h1>
        <input
          type="text"
          className="form-control my-5"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="form-control my-5"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control my-5"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="form-control my-5"
          placeholder="Confimation"
          onChange={(e) => setConfirm(e.target.value)}
        />
        <input
          type="file"
          className="form-control my-5"
          onChange={(e) => setPhoto(e.target.files[0])}
        />
        <button type="submit" className="btn btn-success">
          Sign up
        </button>
      </form>
    </>
  );
};

export default Register;
