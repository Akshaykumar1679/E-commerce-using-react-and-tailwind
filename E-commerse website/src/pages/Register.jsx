import React, { useState } from "react";
import Form from "../components/common/Form";
import { registerFormcontrols } from "../config";
import { Link } from "react-router-dom";
const initialState = {

  userName: "",
  Email: "",
  Password: "",
};

function Register() {
  const [formData, setFormData] = useState(initialState);

  function onsubmit() {
    
  }
  return (
    <div className="flex flex-col gap-3 border-2 rounded border-slate-500 shadow-md shadow-red-500 py-3 px-5 min-w-[60%]">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-semibold ">Create a new account</h1>
        <p className="text-2xl font-semibold ">already have a account <Link to="/auth/login" className="text-red-400 hover:underline">LogIn</Link> </p>
      </div>
      <Form
        formControls={registerFormcontrols}
        formData={formData}
        setFormData={setFormData}
        buttonText={"SignUp"}
        onsubmit={onsubmit}
      />
    </div>
  );
}

export default Register;
