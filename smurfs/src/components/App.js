import React from "react";
import "./App.css";
import SmurfsList from './SmurfsList';
import AddSmurfs from './AddSmurfs';


function App() {

  return (
    <div className="App">
      <AddSmurfs/>
      <SmurfsList/>
    </div>
  );
}
export default App;
