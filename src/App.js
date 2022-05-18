import React from 'react';
import Navbar from "./components/Navbar";
import Gridsystem from "./components/Gridsystem";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    /* Fragment start */
    <>
      <Navbar title="CSM TECH" />
      <Gridsystem />
    </>
    /* end */
  );
}

export default App;
