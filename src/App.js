import { useState } from "react";
import { jsondata } from "./components/Data";
import "./App.css";
import Card from "./components/Card";
import ModalForm from "./components/ModalForm";

export default function App() {
  const [data, setData] = useState(jsondata);
  const [searchData] = useState(data);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    gender: "",
  })
  const [formError, setFormError] = useState({})
  const [close, setClose] = useState(false)

  const emptyfield = "This Field can not be blank"

  const validateForm = () => {
    setFormError({})
    var formErrorData = {};
    var formValidated = true;
    if(!formData.full_name) {
      formErrorData["full_name_error"] = emptyfield;
      formValidated = false;
    }
    if(!formData.email) {
      formErrorData["email_error"] = emptyfield;
      formValidated = false;
    }
    if(!formData.gender) {
      formErrorData["gender_error"] = emptyfield;
      formValidated = false;
    }
    setFormError(formErrorData)
    return formValidated;
  }

  const handleSearch = (val) => {
    console.log("search", val);
    const filterData = searchData.filter((item) =>
      item.full_name.toLowerCase().includes(val)
    );
    setData(filterData);
  };

  const addCard = (e) => {
    e.preventDefault()
   if(validateForm()) {
    setData([...data, {
      full_name: formData.full_name,
      email: formData.email,
      gender: formData.gender
    }])
    setClose(true)
    alert("Successfully added " + formData.full_name)
    setFormData({...formData,
       full_name: "",
       email: "",
       gender: ""})
   }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="form-group m-4">
          <h5 style={{ display: "inline" }}> Search Here: </h5>
          <input
            className="form-control"
            type="text"
            onChange={(e) => handleSearch(e.target.value.toLowerCase())}
          />
        </div>
        <div className="text-right">
          <div>
            Add a card:{" "}
            <button
              className="btn btn-outline-secondary mb-1"
              data-toggle="modal"
              data-target="#modalRegisterForm"
            >
              Add Card
            </button>
          </div>
        </div>
        <div className="row">
          {data.map((item, id) => (
            <Card
            key={id}
              data={data}
              setData={setData}
              item={item}
              id={id}
            />
          ))}
        </div>
        <ModalForm close={close} formError={formError} addCard={addCard} formData={formData} setFormData={setFormData} />
      </div>
    </div>
  );
}
