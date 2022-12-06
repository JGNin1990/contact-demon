import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "./services/userSlice";

const Nav = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="col-5 mx-auto  my-5">
        {user.success ? (
          <NavLink to={"/login"} className="px-5">
            <button
              className="btn btn-danger"
              // onClick={() => dispatch(logout(null))}
            >
              Logout
            </button>
          </NavLink>
        ) : (
          <div className="">
            <NavLink to={"login"} className="px-5">
              <button className="btn btn-success"> Login</button>
            </NavLink>
            <NavLink to={"register"}>
              <button
                className="btn btn-secondary"
                // onClick={() => dispatch(logout(null))}
              >
                Register
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
