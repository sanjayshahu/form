import React, { useContext, useEffect, useState } from "react";
import { varContext } from "./App";
let initialData = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: ""
};
const Individual = () => {
  const val = useContext(varContext);
  const [formData, setform] = useState(() => initialData);
  const validateData = () => {
    let nE = "";
    let eE = "";
    let pE = "";

    if (!formData.name) {
      nE = "name Can't Be empty";
    }
    if (!formData.email.includes("@")) {
      eE = "email must include @";
    }
    if (formData.password.length < 5) {
      pE = "password should be more than 5";
    }
    if (nE || eE || pE) {
      setform((prevData) => {
        return {
          ...prevData,
          nameError: nE,
          emailError: eE,
          passwordError: pE
        };
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = validateData();
    if (isValid) {
      console.log("final", formData);
      setform({ ...initialData });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setform((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };
  useEffect(() => {
    console.log("hey", formData);
  }, [formData]);

  return (
    <div>
      {val}
      <form onSubmit={handleSubmit}>
        <div>
          <label for="name">name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
          <span>{formData.nameError}</span>
        </div>
        <div>
          <label for="email">email:</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <span>{formData.emailError}</span>
        </div>
        <div>
          <label for="password">password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />
          <span>{formData.passwordError}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Individual;
