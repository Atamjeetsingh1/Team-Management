import React, { useState, useEffect } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import { Link, useLocation } from "react-router-dom";
import shareit from "../assets/images/shareit.webp";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const location = useLocation();

  useEffect(() => {
    setSelectedItem(location.pathname);
  }, [location.pathname]);

  const handleListItemClick = (path) => {
    setSelectedItem(path);
  };

  return (
    <aside
      style={{
        width: "265px",
        height: "100vh",
        backgroundColor: "#f4f4f4",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        position: "fixed",
      }}
    >
      <Box
        sx={{
          paddingTop: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <img
            src={shareit}
            alt="HR"
            width={"20px"}
            height={"20px"}
            style={{ borderRadius: "30px", marginRight: "5px" }}
          />
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#1976d2" }}
          >
            Human Re...
          </Typography>
        </Box>
        <Divider sx={{ width: "100%" }} />
        <Typography variant="h7" sx={{ fontWeight: "bold", color: "black" }}>
          MENU
        </Typography>
        <List sx={{ width: "100%" }}>
          <ListItem
            button
            component={Link}
            to="/"
            onClick={() => handleListItemClick("/dashboard")}
            sx={{
              backgroundColor: selectedItem === "/" ? "#1976d2" : "inherit",
              color: selectedItem === "/" ? "#fff" : "inherit",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.08)",
              },
            }}
          >
            <ListItemIcon
              sx={{ color: selectedItem === "/dashboard" ? "#fff" : "inherit" }}
            >
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/teamMembers"
            onClick={() => handleListItemClick("/teamMembers")}
            sx={{
              backgroundColor:
                selectedItem === "/teamMembers" ? "#1976d2" : "inherit",
              color: selectedItem === "/team" ? "#fff" : "inherit",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.08)",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: selectedItem === "/teamMembers" ? "#fff" : "inherit",
              }}
            >
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Team Members" />
          </ListItem>
        </List>
      </Box>
    </aside>
  );
};

export default Sidebar;
