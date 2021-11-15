import React, { useState } from "react";
import { user } from "../service/APICall";

const RegisterForm = ({ setToken }) => {
  const [state, setState] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const getData = await user(state.name, state.email);
      const data = await getData.json();
      console.log(data);
      const token = data.data.sl_token;
      console.log(token);
      setToken(token);
    } catch (error) {
      console.log("error in submitData RegisterForm.js");
    }
  };

  return (
    <div className="register">
      <h1>LOGING</h1>
      <form className="registerform" onSubmit={submitData}>
        {/* <form className="registerform"> */}
        <label>
          {" "}
          Name:
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          {" "}
          E.mail:
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            required
          />
        </label>

        <div className="go">
          <input type="submit" value="Go" />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
