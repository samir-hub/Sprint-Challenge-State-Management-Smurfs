import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEntry } from "../actions/index";

function SmurfsList(props) {
  const state = useSelector(state => {
    return {
      smurfs: state.smurfs,
      error: state.error,
      isFetching: state.isFetching
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntry());
  }, []);

  console.log(props);
  return (
    <div className="List">
      <div>
        {state.smurfs.map((smurf, index) => {
          return (
            <div key={index}>
              <h1>{smurf.name}</h1>
              <h3>{smurf.age}</h3>
              <h3>{smurf.height}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SmurfsList;
