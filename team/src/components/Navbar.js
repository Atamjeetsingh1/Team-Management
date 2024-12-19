import React from "react";
import { AppBar, Toolbar, Button, IconButton, Box } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import innow8 from "../assets/images/innow8.jpg";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <AppBar
      position="fixed" // Set position to fixed
      elevation={0}
      sx={{
        backgroundColor: "#f5f5f5", // Light background color
        width: "calc(100% - 265px)", // Adjust width to account for sidebar
        padding: "3px",
        marginLeft: "265px",
        boxShadow: "none", // Remove shadow
        zIndex: 1200, // Ensure navbar is above other content
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", marginRight:"35px"}}>
        {/* Left Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={innow8}
            alt="Company Logo" sizes="20px"
            style={{ width: "40px", marginLeft: "50px" }}
          />
        </Box>
        {/* Right Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ color: "#000", marginRight: "10px" }}>
            <NotificationsIcon />
          </IconButton>
          <IconButton sx={{ color: "#000" }}>
            <AccountCircleIcon />
          </IconButton>
          <Box sx={{ width: "50px" }}>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

