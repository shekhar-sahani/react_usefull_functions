import React from "react";

export default function Card(props) {
    const {item, id, data, setData} = props

    const handleLike = (id) => {
      const dataCopy = [...data];
      console.log("data", dataCopy);
      if (dataCopy[id]["like"]) {
        dataCopy[id]["like"] = false;
      } else {
        dataCopy[id]["like"] = true;
      }
      setData(dataCopy);
    };

    const handleDelete = (id) => {
      const dataCopy = [...data];
      dataCopy.splice(id, 1);
      setData(dataCopy);
    };

  return (
    <div  className="col-sm-6 col-md-6 col-lg-4">
      <div className="card m-3">
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-between">
            {item.full_name}<span>{item.gender} </span>{" "}
          </h5>
          <p className="card-text">{item.email}</p>
          <div className="d-flex justify-content-between">
            <button onClick={() => handleLike(id)} className="btn btn-primary">
              {item.like ? "Liked" : "Like"}
            </button>
            <button onClick={() => handleDelete(id)} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
