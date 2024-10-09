import React from "react";

function Form({formControls, formData, setFormData, onsubmit, buttonText}) {



  function renderInputByComponentType(getcontrolItem) {
    let element = null;
    let value =formData[getcontrolItem.name] || "";

    switch (getcontrolItem.coponentType) {
      case "input":
        element = (
          <input className="border-2 rounded border-slate-500 py-1 px-2"
            type={getcontrolItem.type}
            name={getcontrolItem.name}
            placeholder={getcontrolItem.placeholder}
            id={getcontrolItem.name}
            value={value}
            onChange={ event=> setFormData({
                ...formData,
                [getcontrolItem.name] : event.target.value
            })
                
            }
            
            
          />
        );
        break;

      case "textarea":
        element = (
          <textarea
            name={getcontrolItem.name}
            placeholder={getcontrolItem.placeholder}
            id={getcontrolItem.id}
    
            value={value}
            onChange={ event=>setFormData({
                ...formData,
                [getcontrolItem.name] : event.target.value
            })}
          ></textarea>
        );
        break;

      default:
        element = (
          <input
            type={getcontrolItem.type}
            name={getcontrolItem.name}
            placeholder={getcontrolItem.placeholder}
            id={getcontrolItem.name}
            value={value}
            onChange={ event=>setFormData({
                ...formData,
                [getcontrolItem.name] : event.target.value
            })}
          />
        );
        break;
    }
    return element;
  }

  return (
    <form onSubmit={onsubmit} className="">
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            <label >{controlItem.label}</label>
            {renderInputByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <button className="border-2 border-slate-500 py-1 px-3 rounded text-base font-medium mt-3" type="submit">{buttonText || "submit"}</button>
    </form>
  );
}

export default Form;
