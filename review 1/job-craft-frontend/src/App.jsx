import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Home from "./pages/home";
import JobSeeker from "./pages/jobseeker";
import ManageProfile from "./pages/ManageProfile";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import AdminDashboard from "./pages/admin"; // ✅ import your admin dashboard
import  MyJobs from "./pages/MyJobs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobseeker" element={<JobSeeker />} />
        <Route path="/manage-profile" element={<ManageProfile />} />
        <Route path="/recruiter" element={<RecruiterDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} /> {/* ✅ Admin route */}
        <Route 
  path="/recruiter/my-jobs" 
  element={<MyJobs recruiterId={localStorage.getItem("userId")} />} 
/>


      </Routes>
    </Router>
  );
};

export default App;
