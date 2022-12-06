import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const user = useSelector((state) => state.user.value);
  const [contacts, setContacts] = useState();
  //   console.log(user)
  //   console.log(user.token)

  const getContact = async () => {
    const { data } = await axios.get(
      "http://go.contact.mmeducare.com/api/v1/contacts",
      { headers: { authorization: `Bearer ${user.token}` } }
    );
    setContacts(data.contacts);
    console.log(data.contacts);
  };

  const apiDelete = async (id) => {
    const { data } = await axios.delete(
      `http://go.contact.mmeducare.com/api/v1/contacts/${id}`,
      {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      }
    );
    if (data.success) {
      getContact();
    }
  };

  useEffect(() => {
    getContact();
  }, []);

  return (
    <>
      <h1>Disboard</h1>
      <h3>{user?.auth?.name}</h3>
      <NavLink to={"/create"}>
        <button className="btn btn-primary my-5">Create new contact</button>
      </NavLink>

      <table className="table py-5">
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone No</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts?.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  width={"30px"}
                  height={"30px"}
                  className="rounded-circle"
                  src={contact.contactPhoto}
                  alt=""
                />
              </td>
              <td>{contact.fullName}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>
                <button className="btn text-success">
                  <AiFillEdit />
                </button>
                <button className="btn text-danger" onClick={()=>apiDelete(contact.id)}>
                  <AiFillDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Dashboard;
