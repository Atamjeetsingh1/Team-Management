import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthWrapper from "./components/AuthWrapper";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./components/Navbar";
import LoginPage from "./Pages/LoginPage";
import TeamPage from "./Pages/TeamPage";
import Sidebar from "./components/Sidebar";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      {isAuthenticated&&<Navbar />}
      {isAuthenticated && <Sidebar />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <AuthWrapper>
              <Dashboard />
            </AuthWrapper>
          }
        />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </Router>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./Pages/Dashboard";
// import TeamPage from "./Pages/TeamPage";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";

// const App = () => {
//   return (
//     <Router>
//      < Navbar/>
//      <Sidebar/>
//       <Routes>
//       <Route path="/" element={<Dashboard />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/team" element={<TeamPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./Pages/Dashboard";
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
// import Team from './Pages/Team';

// const App = () => {
//   return (
//     <Router>

//        <Sidebar />
//        <Navbar/>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/team" element={<Team />} />
//       </Routes>
//     </Router>
//   );
// };
// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./Pages/Dashboard";
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
// import Team from './Pages/Team';

// const App = () => {
//   return (
//     <Router>

//        <Sidebar />
//        <Navbar/>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/team" element={<Team />} />
//       </Routes>
//     </Router>
//   );
// };
// export default App;

// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import Dashboard from './Pages/Dashboard';
// import Teams from './Pages/Teams';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const App = () => (
//   <Router>
//     <div>
//       <Navbar />
//       <div className="flex">
//         <Sidebar />
//         <main className="flex-1 p-4">
//           <Routes>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/teams" element={<Teams />} />
//           </Routes>
//         </main>
//       </div>
//     </div>
//   </Router>
// );

// export default App;
