import React from "react";

export default function ModalForm(props) {
    const {setFormData, formData, addCard, formError, close} = props  
    
    
  return (
    <div
      className="modal fade"
      id="modalRegisterForm"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <form onSubmit={(e) => addCard(e)}>
        <div className="modal-content">
          <div className="modal-header text-center">
            <h4 className="modal-title w-100 font-weight-bold">Create Card</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body mx-3">
          <div className="md-form mb-1">
                <label>Full name</label>
                <input value={formData.full_name} onChange={(e) => setFormData({...formData, full_name: e.target.value})} type="text" className="form-control" />
                <span className="small text-danger">
                    <b> {formError.full_name_error} </b>{" "}
                  </span>
            </div>
            <div className="md-form mb-1">
              <label>Your email</label>
              <input value={formData.email}  onChange={(e) => setFormData({...formData, email: e.target.value})} type="email" className="form-control" />
              <span className="small text-danger">
                    <b> {formError.email_error} </b>{" "}
                  </span>
            </div>

            <div className="form-group">
              <label>Select Gender:</label>
              <select onChange={(e) => setFormData({...formData, gender: e.target.value})} defaultValue={"DEFAULT"} className="form-control">
                <option value="DEFAULT" hidden>
                  Select gender...
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <span className="small text-danger">
                    <b> {formError.gender_error} </b>{" "}
                  </span>
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button data-dismiss={close ? "modal" : ""} aria-label={close ? "Close" : ""}  type="submit" className="btn btn-outline-dark btn-lg btn-block">Submit</button>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
}
