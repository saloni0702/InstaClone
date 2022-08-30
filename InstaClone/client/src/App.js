import React from "react";
import LandingPage from "./landingPage";
import { Routes, Route } from "react-router-dom";
import PostView from "./post-view";
import Form from "./form";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="PostView" element={<PostView />} />
        <Route path="Form" element={<Form />} />
      </Routes>
    </>
  );
};
export default App;