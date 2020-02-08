import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchEntry } from '../actions/index';

function SmurfsList(props) {

    useEffect(() => {
        props.fetchEntry();
    }, [])

  console.log(props)  
  return (
    <div className="List">
      <div>
          {props.smurfs.map((smurf, index) => {
              return <div key={index}>
                  <h1>{smurf.name}</h1>
                  <h3>{smurf.age}</h3>
                  <h3>{smurf.height}</h3>
              </div>
          })}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
      error: state.error,
      isFetching: state.isFetching
    };
  };
  
  export default connect(
    mapStateToProps,
    { fetchEntry }
  )(SmurfsList);
