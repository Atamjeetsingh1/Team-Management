import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import innow8 from "../assets/images/innow8.jpg"; 

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <AppBar position="absolute" sx={{ backgroundColor: "#1976d2", width:"86vw",padding:"3px",margin:"7px"}}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={innow8}
            alt="Company Logo"
            style={{ width: "40px", marginRight: "10px" }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Team Management
          </Typography>
        </Box>
        <Box>
          {!isAuthenticated ? (
            <Button
              color="inherit"
              onClick={() => loginWithRedirect()}
              sx={{
                backgroundColor: "#fff",
                color: "#1976d2",
                "&:hover": {
                  backgroundColor: "#e3f2fd",
                  color: "#1565c0",
                },
              }}
            >
              Login
            </Button>
          ) : (
            <Button
              color="inherit"
              onClick={() => logout({ returnTo: window.location.origin })}
              sx={{
                backgroundColor: "#fff",
                color: "#1976d2",
                "&:hover": {
                  backgroundColor: "#e3f2fd",
                  color: "#1565c0",
                },
              }}
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { useAuth0 } from '@auth0/auth0-react';

// const Navbar = () => {
//   const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

//   return (
//     <AppBar position="static" sx={{ backgroundColor: 'green' }}>
//       <Toolbar className="flex justify-between">
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           Team Management
//         </Typography>
//         <div>
//           {!isAuthenticated ? (
//             <Button color="inherit" onClick={() => loginWithRedirect()}>
//               Login
//             </Button>
//           ) : (
//             <Button
//               color="inherit"
//               onClick={() => logout({ returnTo: window.location.origin })}
//             >
//               Logout
//             </Button>
//           )}
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { useAuth0 } from '@auth0/auth0-react';

// const Navbar = () => {
//   const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

//   return (
//     <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
//       <Toolbar className="flex justify-between">
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           Team Management App
//         </Typography>
//         <div>
//           {!isAuthenticated ? (
//             <Button color="inherit" onClick={() => loginWithRedirect()}>
//               Login
//             </Button>
//           ) : (
//             <Button
//               color="inherit"
//               onClick={() => logout({ returnTo: window.location.origin })}
//             >
//               Logout
//             </Button>
//           )}
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { useAuth0 } from '@auth0/auth0-react';

// const Navbar = () => {
//   const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

//   return (
//     <AppBar position="static">
//       <Toolbar className="flex justify-between">
//         <Typography variant="h6">Team Management App</Typography>
//         <div>
//           {!isAuthenticated ? (
//             <Button color="inherit" onClick={() => loginWithRedirect()}>
//               Login
//             </Button>
//           ) : (
//             <Button
//               color="inherit"
//               onClick={() => logout({ returnTo: window.location.origin })}
//             >
//               Logout
//             </Button>
//           )}
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
