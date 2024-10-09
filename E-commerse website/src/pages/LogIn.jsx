import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../components/common/Form";
import { loginFormcontrols } from "../config";
import { FaFacebookSquare,FaTwitter,FaGoogle } from "react-icons/fa";


const intialState = {
  UserName: "",
  password: "",
};

function Login() {
  const [formData, setFormData] = useState(intialState);

  function onsubmit() {
    
  }
  return (
    <div className="flex flex-col gap-6 border-2 rounded border-slate-500 shadow-md shadow-red-500 py-8 px-5 min-w-[70%] ">
      < div className="flex flex-col gap-3">
        <h1 className="text-4xl font-semibold ">LogIn Here</h1>
        <h2 className="text-2xl font-semibold ">
          don't have a account <Link to="/auth/register" className="text-red-400 hover:underline">SignUp</Link>
        </h2>
      </div>
      <div>
        <Form
          formControls={loginFormcontrols}
          formData={formData}
          setFormData={setFormData}
          onsubmit={onsubmit}
          buttonText={"Login"}
        />
      </div>
      <div className="flex  gap-3 text-2xl ">
      <Link to="/auth/register" className="text-red-600 "><FaFacebookSquare/></Link>
      <Link to="/auth/register" className="text-red-600 "><FaTwitter/></Link>
      <Link to="/auth/register" className="text-red-600 "><FaGoogle/></Link>
               
               
      </div>
          
    </div>
  )
}

export default Login;
