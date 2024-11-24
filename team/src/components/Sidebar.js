import React, { useState, useEffect } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PeopleIcon from "@mui/icons-material/People";
import { Link, useLocation } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState('');
  const location = useLocation();

  useEffect(() => {
    setSelectedItem(location.pathname);
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleListItemClick = (path) => {
    setSelectedItem(path);
  };

  return (
    <aside
      style={{
        width: isOpen ? "265px" : "100px",
        transition: "width 0.3s ease",
        height: "100vh",
        backgroundColor: "#f4f4f4",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        position: "fixed",
      }}
    >
      <IconButton
        onClick={toggleSidebar}
        style={{
          position: "absolute",
          top: "17px",
          left: isOpen ? "226px" : "36px",
          backgroundColor: "#1976d2",
          color: "#fff",
        }}
      >
        {isOpen ? (
          <CloseIcon style={{ fontSize: "18px" }} />
        ) : (
          <MenuIcon style={{ fontSize: "18px" }} />
        )}
      </IconButton>
      <Box
        sx={{
          paddingTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {isOpen && (
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
            <PeopleIcon sx={{ marginRight: '10px', color: '#1976d2' }} />
            <Typography variant="h5" sx={{ fontWeight: "bold", color: '#1976d2' }}>
              Human Res...
            </Typography>
          </Box>
        )}
        {!isOpen && (
          <PeopleIcon sx={{ color: '#1976d2' }} />
        )}
        <Divider sx={{ width: '100%' }} />
        {isOpen &&  <Typography variant="h6" sx={{ fontWeight: "bold", color: 'black' }}>
          MENU
        </Typography>}
        <List sx={{ width: '100%' }}>
          <ListItem
            button
            component={Link}
            to="/dashboard"
            onClick={() => handleListItemClick('/dashboard')}
            sx={{
              backgroundColor: selectedItem === '/dashboard' ? '#1976d2' : 'inherit',
              color: selectedItem === '/dashboard' ? '#fff' : 'inherit',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
              },
            }}
          >
            <ListItemIcon sx={{ color: selectedItem === '/dashboard' ? '#fff' : 'inherit' }}>
              <DashboardIcon />
            </ListItemIcon>
            {isOpen && <ListItemText primary="Dashboard" />}
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/team"
            onClick={() => handleListItemClick('/team')}
            sx={{
              backgroundColor: selectedItem === '/team' ? '#1976d2' : 'inherit',
              color: selectedItem === '/team' ? '#fff' : 'inherit',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
              },
            }}
          >
            <ListItemIcon sx={{ color: selectedItem === '/team' ? '#fff' : 'inherit' }}>
              <GroupIcon />
            </ListItemIcon>
            {isOpen && <ListItemText primary="Teams" />}
          </ListItem>
        </List>
      </Box>
    </aside>
  );
};

export default Sidebar;

// import React, { useState } from "react";
// import {
//   Box,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Divider,
//   IconButton,
//   Typography,
// } from "@mui/material";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import GroupIcon from "@mui/icons-material/Group";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import PeopleIcon from "@mui/icons-material/People";
// import { Link, useLocation } from "react-router-dom";
// import DeleteIcon from '@mui/icons-material/Delete';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [selectedItem, setSelectedItem] = useState('');
//   const location = useLocation();

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleListItemClick = (path) => {
//     setSelectedItem(path);
//   };

//   return (
//     <aside
//       style={{
//         width: isOpen ? "250px" : "60px",
//         transition: "width 0.3s ease",
//         height: "100vh",
//         backgroundColor: "#f4f4f4",
//         boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
//         position: "fixed",
//       }}
//     >
//       <IconButton
//         onClick={toggleSidebar}
//         style={{
//           position: "absolute",
//           top: "17px",
//           left: isOpen ? "220px" : "20px",
//           backgroundColor: "#1976d2",
//           color: "#fff",
//           zIndex: 1,
//         }}
//       >
//         {isOpen ? (
//           <CloseIcon style={{ fontSize: "18px" }} />
//         ) : (
//           <MenuIcon style={{ fontSize: "18px" }} />
//         )}
//       </IconButton>
//       <Box
//         sx={{
//           padding: "20px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           gap: "20px",
//         }}
//       >
//         {isOpen && (
//           <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
//             <PeopleIcon sx={{ marginRight: '10px', color: '#1976d2' }} />
//             <Typography variant="h5" sx={{ fontWeight: "bold", color: '#1976d2' }}>
//               Human Res...
//             </Typography>
//           </Box>
//         )}
//         {!isOpen && (
//           <PeopleIcon sx={{ color: '#1976d2' }} />
//         )}
//         <Divider sx={{ width: '100%' }} />
//         {isOpen &&  <Typography variant="h6" sx={{ fontWeight: "bold", color: '#1976d2' }}>
//           MENU
//         </Typography>}
//         <List sx={{ width: '100%' }}>
//           <ListItem
//             button
//             component={Link}
//             to="/dashboard"
//             onClick={() => handleListItemClick('/dashboard')}
//             sx={{
//               backgroundColor: selectedItem === '/dashboard' ? '#1976d2' : 'inherit',
//               color: selectedItem === '/dashboard' ? '#fff' : 'inherit',
//               '&:hover': {
//                 backgroundColor: selectedItem === '/dashboard' ? '#1976d2' : 'rgba(0, 0, 0, 0.08)',
//               },
//             }}
//           >
//             <ListItemIcon sx={{ color: selectedItem === '/dashboard' ? '#fff' : 'inherit' }}>
//               <DashboardIcon />
//             </ListItemIcon>
//             {isOpen && <ListItemText primary="Dashboard" />}
//           </ListItem>
//           <ListItem
//             button
//             component={Link}
//             to="/team"
//             onClick={() => handleListItemClick('/team')}
//             sx={{
//               backgroundColor: selectedItem === '/team' ? '#1976d2' : 'inherit',
//               color: selectedItem === '/team' ? '#fff' : 'inherit',
//               '&:hover': {
//                 backgroundColor: selectedItem === '/team' ? '#1976d2' : 'rgba(0, 0, 0, 0.08)',
//               },
//             }}
//           >
//             <ListItemIcon sx={{ color: selectedItem === '/team' ? '#fff' : 'inherit' }}>
//               <GroupIcon />
//             </ListItemIcon>
//             {isOpen && <ListItemText primary="Teams" />}
//           </ListItem>
//         </List>
//       </Box>
//     </aside>
//   );
// };

// export default Sidebar;

// import React, { useState } from "react";
// import {
//   Box,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Divider,
//   IconButton,
//   Typography,
// } from "@mui/material";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import GroupIcon from "@mui/icons-material/Group";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import PeopleIcon from "@mui/icons-material/People";
// import { Link } from "react-router-dom";
// import DeleteIcon from '@mui/icons-material/Delete';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <aside
//       style={{
//         width: isOpen ? "250px" : "60px",
//         transition: "width 0.3s ease",
//         height: "100vh",
//         backgroundColor: "#f4f4f4",
//         boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
//         position: "fixed",
//       }}
//     >
//       <IconButton
//         onClick={toggleSidebar}
//         style={{
//           position: "absolute",
//           top: "17px",
//           left: isOpen ? "220px" : "20px",
//           backgroundColor: "#1976d2",
//           color: "#fff",
//           zIndex: 1,
//         }}
//       >
//         {isOpen ? (
//           <CloseIcon style={{ fontSize: "18px" }} />
//         ) : (
//           <MenuIcon style={{ fontSize: "18px" }} />
//         )}
//       </IconButton>
//       <Box
//         sx={{
//           padding: "20px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           gap: "20px",
//         }}
//       >
//         {isOpen && (
//           <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
//             <PeopleIcon sx={{ marginRight: '10px', color: '#1976d2' }} />
//             <Typography variant="h5" sx={{ fontWeight: "bold", color: '#1976d2' }}>
//               Human Res..
//             </Typography>
//           </Box>
//         )}
//         {!isOpen && (
//           <PeopleIcon sx={{ color: '#1976d2' }} />
//         )}
//         <Divider sx={{ width: '100%' }} />
//         {isOpen &&  <Typography variant="h6" sx={{ fontWeight: "bold", color: '#1976d2' }}>
//           MENU
//         </Typography>}
//         <List sx={{ width: '100%' }}>
//           <ListItem button component={Link} to="/dashboard">
//             <ListItemIcon>
//               <DashboardIcon />
//             </ListItemIcon>
//             {isOpen && <ListItemText primary="Dashboard" />}
//           </ListItem>
//           <ListItem button component={Link} to="/team">
//             <ListItemIcon>
//               <GroupIcon />
//             </ListItemIcon>
//             {isOpen && <ListItemText primary="Teams" />}
//           </ListItem>
//         </List>
//       </Box>
//     </aside>
//   );
// };

// export default Sidebar;

// import React, { useState } from "react";
// import {
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Divider,
//   IconButton,
// } from "@mui/material";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import GroupIcon from "@mui/icons-material/Group";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import { Link } from "react-router-dom";
// import { Typography } from "@mui/material";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <aside
//       style={{
//         width: isOpen ? "250px" : "60px",
//         transition: "width 0.3s ease",
//         height: "100vh",
//         backgroundColor: "",
//         boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
//         position: "absolute",
//       }}
//     >
//       <IconButton
//         onClick={toggleSidebar}
//         style={{
//           position: "absolute",
//           top: "17px",
//           right: isOpen ? "-3px" : "-2px",
//           backgroundColor: "#1976d2",
//           color: "#fff",marginLeft:"3px",
//           backgroundColor:"green"
//         }}
//       >
//         {isOpen ? (
//           <CloseIcon style={{ fontSize: "18px" }} />
//         ) : (
//           <MenuIcon style={{ fontSize: "18px" }} />
//         )}
//       </IconButton>
//       <div
//         style={{
//           padding: "20px",
//           display: "flex",
//           flexDirection: "column",
//           gap: "20px",
//         }}
//       >
//         {isOpen && (
//           <Typography variant="h6" style={{ fontWeight: "bold" }}>
//             Team Management
//           </Typography>
//         )}
//         <Divider />
//         <List className="list">
//           <ListItem button component={Link} to="/dashboard">
//             <ListItemIcon>
//               <DashboardIcon />
//             </ListItemIcon>
//             {isOpen && <ListItemText primary="Dashboard" />}
//           </ListItem>
//           <ListItem button component={Link} to="/team">
//             <ListItemIcon>
//               <GroupIcon />
//             </ListItemIcon>
//             {isOpen && <ListItemText primary="Teams" />}
//           </ListItem>
//         </List>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

// import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import GroupIcon from '@mui/icons-material/Group';
// import { Link } from 'react-router-dom';
// import { Typography } from '@mui/material';

// const Sidebar = () => {
//   return (
//     <div className="w-64 h-screen bg-gray-100 p-4">

//       <Typography variant="h6" className="mb-6">
//         Team Management
//       </Typography>
//       <Divider className="mb-4" />
//       <List>
//         <ListItem button component={Link} to="/dashboard">
//           <ListItemIcon>
//             <DashboardIcon />
//           </ListItemIcon>
//           <ListItemText primary="Dashboard" />
//         </ListItem>
//         <ListItem button component={Link} to="/teams">
//           <ListItemIcon>
//             <GroupIcon />
//           </ListItemIcon>
//           <ListItemText primary="Teams" />
//         </ListItem>
//       </List>
//     </div>
//   );
// };

// export default Sidebar;

// import { List, ListItem, ListItemText } from '@mui/material';
// import { Link } from 'react-router-dom';

// const Sidebar = () => (
//   <div className="w-64 bg-gray-100 h-screen p-4">
//     <List>
//       <ListItem button component={Link} to="/dashboard">
//         <ListItemText primary="Dashboard" />
//       </ListItem>
//       <ListItem button component={Link} to="/teams">
//         <ListItemText primary="Teams" />
//       </ListItem>
//     </List>
//   </div>
// );

// export default Sidebar;
