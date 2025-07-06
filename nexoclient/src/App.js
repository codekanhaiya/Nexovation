import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./landingPages/homePages/Main";
import AdminDashboard from "./adminDash/MainAdmin";
import ClientDashboard from "./cleintDash/MainClient";
import Error from "./commonPages/Error";
import Signup from "./commonPages/client/Signup";
import Signin from "./commonPages/client/Signin";
import Reset from "./commonPages/client/Reset";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/client" element={<ClientDashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
