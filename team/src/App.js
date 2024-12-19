import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./components/Navbar";
import LoginPage from "./Pages/LoginPage";
import Sidebar from "./components/Sidebar";
import TeamPage from "./components/TeamPage";
import TeamMember from "./Pages/TeamMembers";

function App() {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, isLoading, loginWithRedirect]);

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      {isAuthenticated && <Sidebar />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/teamPage" element={<TeamPage />} />
        <Route path="/teamMembers" element={<TeamMember />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AuthWrapper from "./components/AuthWrapper";
// import Dashboard from "./Pages/Dashboard";
// import Navbar from "./components/Navbar";
// import LoginPage from "./Pages/LoginPage";
// import Sidebar from "./components/Sidebar";
// import { useAuth0 } from "@auth0/auth0-react";
// import TeamPage from "./components/TeamPage";
// import TeamMember from "./Pages/TeamMembers";
// function App() {
//   const { isAuthenticated } = useAuth0();

//   return (
//     <Router>
//       {isAuthenticated && <Navbar />}
//       {isAuthenticated && <Sidebar />}
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route
//           path="/dashboard"
//           element={
//             <AuthWrapper>
//               <Dashboard />
//             </AuthWrapper>
//           }
//         />
//         <Route path="/teamPage" element={<TeamPage />} />
//         <Route path="/teamMembers" element={<TeamMember />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
