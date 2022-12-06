import axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const user = useSelector((state) => state.user.value);
    const nav = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");

  const formData = new FormData();
  formData.append("firstName", firstName);
  formData.append("secondName", secondName);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("contactPhoto", photo);

  const apiCreateContact = async () => {
    const { data } = await axios.post(
      "http://go.contact.mmeducare.com/api/v1/contacts",
      formData,
      {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      }
    );
      
      data.success && nav('/dashboard')
    console.log(data);
  };

  //   console.log(user.token);
  const handleSubmit = (e) => {
    e.preventDefault();

      apiCreateContact();
      

    
    // console.log(firstName, secondName, email, phone, photo);
    // setFirstName("");
    // setSecondName("");
    // setEmail("");
    // setPhone("");
    // setPhoto("");
  };

  return (
    <>
      <form className="col-5 mx-auto" onSubmit={handleSubmit}>
        <h1>Create New Contact</h1>
        <input
          type="text"
          className="form-control my-5"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className="form-control my-5"
          placeholder="Second Name"
          onChange={(e) => setSecondName(e.target.value)}
        />
        <input
          type="email"
          className="form-control my-5"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="Phone"
          className="form-control my-5"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="file"
          className="form-control my-5"
          onChange={(e) => setPhoto(e.target.files[0])}
        />
        <button className="btn btn-primary">Create Now</button>
      </form>
    </>
  );
};

export default Create;
