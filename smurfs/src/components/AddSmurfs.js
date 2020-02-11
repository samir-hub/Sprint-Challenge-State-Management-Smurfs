import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postEntry } from "../actions/index";

function AddSmurfs() {
  const dispatch = useDispatch();

  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChange = e => {
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value
    });
  };

  const postSmurf = e => {
    e.preventDefault();
    dispatch(postEntry(smurf));
    setSmurf({
      name: "",
      age: "",
      height: ""
    });
  };

  return (
    <div>
      <form onSubmit={postSmurf}>
        Name:
        <input
          type="text"
          name="name"
          value={smurf.name}
          onChange={handleChange}
        />
        Age:
        <input
          type="text"
          name="age"
          value={smurf.age}
          onChange={handleChange}
        />
        Height:
        <input
          type="text"
          name="height"
          value={smurf.height}
          onChange={handleChange}
        />
        <button>Add Smurf</button>
      </form>
    </div>
  );
}

export default AddSmurfs;
