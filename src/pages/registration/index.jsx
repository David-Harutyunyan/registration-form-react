import React, { useState } from "react";

import "./style.scss"

const RegisterUser = () => {
  const [regData, setRegData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "male",
    job: "",
  });

  const [errorData, setErrorData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "male",
    job: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegData({ ...regData, [name]: value });
  };

  const validation = () => {
    let isValidation = true;
    const errors = {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "male",
      job: "",
    };

    if (!regData.firstName.trim().length) {
      isValidation = false;
      errors.firstName = "First name is required";
    }
    if (!regData.lastName.trim().length) {
      isValidation = false;
      errors.lastName = "Last name is required";
    }
    if (!regData.age.trim().length) {
      isValidation = false;
      errors.age = "Age is required";
    }
    if (!regData.email.trim().length) {
      isValidation = false;
      errors.email = "Email is required";
    }
    if (!regData.password.trim().length) {
      isValidation = false;
      errors.password = "Password is required";
    }
    if (!regData.confirmPassword.trim().length) {
      isValidation = false;
      errors.confirmPassword = "Password is required";
    }
    if (
      regData.password.length &&
      regData.confirmPassword.length &&
      regData.password.length !== regData.confirmPassword.length
    ) {
      isValidation = false;
      errors.confirmPassword = `Confirm Password does'nt  match with password`;
    }
    if (!regData.job.length) {
      isValidation = false;
      errors.job = "Job is required";
    }

    setErrorData(errors);
    return isValidation;
  };

  const userCreate = () => {
    if (validation()) {
      let users = JSON.parse(localStorage.getItem("users-list"));

      if (users && users.length) {
        users.push(regData);
      } else {
        users = [regData];
      }

      localStorage.setItem("users-list", JSON.stringify(users));
      setRegData({
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "male",
        job: "",
      });
    }
  };

  return (
    <div className="reg-form">
      <p className="title">Registration</p>
      <div className="content">
        <div className="user-details">
          <div className="input-boxes">
            <span className="details">First Name</span>
            <input
              type="text"
              name={"firstName"}
              placeholder="Macho"
              required
              onChange={handleChange}
              value={regData.firstName}
            />
            {errorData.firstName ? <p>{errorData.firstName}</p> : null}
          </div>
          <div className="input-boxes">
            <span className="details">Last Name</span>
            <input
              type="text"
              name={"lastName"}
              placeholder="Alvarez"
              required
              onChange={handleChange}
              value={regData.lastName}
            />
            {errorData.lastName ? <p>{errorData.lastName}</p> : null}
          </div>
          <div className="input-boxes">
            <span className="details">Age</span>
            <input
              type="text"
              name={"age"}
              placeholder="18"
              required
              onChange={handleChange}
              value={regData.age}
            />
            {errorData.age ? <p>{errorData.age}</p> : null}
          </div>
          <div className="input-boxes">
            <span className="details">Email</span>
            <input
              type="text"
              name={"email"}
              placeholder="machoalvarez@test.com"
              required
              onChange={handleChange}
              value={regData.email}
            />
            {errorData.email ? <p>{errorData.email}</p> : null}
          </div>
          <div className="input-boxes">
            <span className="details">Password</span>
            <input
              type="text"
              name={"password"}
              placeholder="Enter your password"
              required
              onChange={handleChange}
              value={regData.password}
            />
            {errorData.password? <p>{errorData.password}</p> : null}
          </div>
          <div className="input-boxes">
            <span className="details">Confirm Password</span>
            <input
              type="text"
              name={"confirmPassword"}
              placeholder="Enter your password again"
              required
              onChange={handleChange}
              value={regData.confirmPassword}
            />
            {errorData.confirmPassword ? <p>{errorData.confirmPassword}</p> : null}
          </div>
          <div className="input-boxes">
            <label>
              <span className="details">Jobs</span>
              <select
                onChange={handleChange}
                name="jobs"
                defaultValue="Select a Job"
              >
                <option value="Web developer">Web developer</option>
                <option value="Computer programmer">Computer programmer</option>
                <option value="Computer systems engineer">
                  Computer systems engineer
                </option>
                <option value="Systems analyst">Systems analyst</option>
                <option value="Programmer analyst">Programmer analyst</option>
                <option value="Database administrator">
                  Database administrator
                </option>
                <option value="Front-end developer">Front-end developer</option>
                <option value="Mobile app developer">
                  Mobile app developer
                </option>
              </select>
            </label>
            {errorData.job ? <p>{errorData.job}</p> : null}
          </div>
          <div className="P-genderSelect">
            <label>
              <span>Male :</span>
              <input
                onChange={handleChange}
                type="radio"
                name="gender"
                checked={regData.gender === "male"}
                value={"male"}
              />
              <span>Female :</span>
              <input
                onChange={handleChange}
                type="radio"
                name="gender"
                checked={regData.gender === "female"}
                value={"female"}
              />
            </label>
          </div>
        </div>
        <div className="reg-button">
          <button onClick={userCreate}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser