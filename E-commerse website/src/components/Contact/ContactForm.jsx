import React from "react";
import Input_label from "./Input_label";

function ContactForm() {
  return (
    <form className="md:grid flex flex-col gap-5 mt-5 place-items-center  ">
      <Input_label
        placeholder={"Enter your name"}
        id={"name"}
        labelFor={"name"}
        labelName={"Name"}
      />

      <Input_label
        placeholder={"Enter your email "}
        id={"email"}
        labelFor={"email"}
        labelName={"Email"}
      />

      <Input_label
        placeholder={"Enter your phone  "}
        id={"Phone"}
        labelFor={"Phone"}
        labelName={"Phone Number"}
      />

      <Input_label
        placeholder={"Enter your subject "}
        id={"subject"}
        labelFor={"subject"}
        labelName={"Subject"}
      />

      <Input_label
        placeholder={"Enter your message "}
        id={"message"}
        labelFor={"message"}
        labelName={"Message"}
      />

      <div className="flex justify-center col-span-2 md:mt-5">
        <button className=" border-2 py-2 px-4 rounded-lg">
          Submit <i className="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
