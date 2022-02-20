import React from "react";
import Layout from "./components/layout/Layout";
import "./App.css";
import DrawerContextProvider from "./store/DrawerContextProvider";

function App() {
  return (
    <DrawerContextProvider>
      <div className="App">
        <Layout></Layout>
      </div>
    </DrawerContextProvider>
  );
}

export default App;
