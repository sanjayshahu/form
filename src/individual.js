import React, { useContext, useEffect, useState } from "react";
import { varContext } from "./App";
let initialData = {
  name: "",
  email: "",
  password: "",
  cars: "",
  bike: Boolean,
  bikeError: "",
  carsError: "",
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
    let cE = "";

    if (!formData.name) {
      nE = "name Can't Be empty";
    }
    if (!formData.email.includes("@")) {
      eE = "email must include @";
    }
    if (formData.password.length < 5) {
      pE = "password should be more than 5";
    }
    if (!formData.cars) {
      cE = "one car required";
    }
    if (nE || eE || pE || cE) {
      setform((prevData) => {
        return {
          ...prevData,
          nameError: nE,
          emailError: eE,
          passwordError: pE,
          carsError: cE
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
    const isCheckbox = e.target.type === "checkbox";
    console.log("event", e.target.value, e.target.type);
    const { name } = e.target;
    const val = isCheckbox ? !e.target.value : e.target.value;

    setform((prevValue) => {
      return { ...prevValue, [name]: val };
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

        <div>
          <label for="cars">Choose a car:</label>
          <select
            name="cars"
            id="cars"
            value={formData.cars}
            onChange={handleChange}
          >
            <option value="">No Option</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <span>{formData.carsError}</span>
        </div>
        <div>
          <input
            type="checkbox"
            id="bike"
            name="bike"
            value={formData.bike}
            onChange={handleChange}
          />
          <label for="bike"> I have a bike</label>
          <span>{formData.bikeError}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Individual;
