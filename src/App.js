import React from "react";
import Navbar from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";

const  App=() =>{
  // DO NOT CHANGE/MODIFY this app-structure here
  return (
    <div data-cy="shoe-app">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
