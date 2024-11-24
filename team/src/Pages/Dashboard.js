import { useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TeamCard from "../components/TeamCard";
import TeamModal from "../components/TeamModal";
import { Card, CardContent, Typography } from "@mui/material";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeTeams, setActiveTeams] = useState([
    {
      name: "Development Team",
      description: "Handles all software development",
      members: [
        { name: "Alice", profile: "Frontend Developer", project: "App A", available: true },
        { name: "Bob", profile: "Backend Developer", project: "App B", available: false },
        { name: "Ravi", profile: "ReactJs Developer", project: "App A", available: true },
      ],
    },
    {
           name: "Marketing Team",
           description: "Focuses on marketing strategies",
           members: [
            { name: "Eve", profile: "Social Media Manager", project: "Campaign A",available: false },
            { name: "John", profile: "Content Writer", project: "Blog B", available : true },
            { name: "Akash", profile: "Content Writer", project: "campaign A", available : true },
          ],
         },
  ]);

  const navigate = useNavigate();

  const handleAddTeam = (newTeam) => {
    setActiveTeams((prevTeams) => [...prevTeams, newTeam]);
    setOpenModal(false);
  };

  const handleCardClick = (team) => {
    navigate("/team", { state: { team } });
  };

  return (
    <div style={{ marginLeft: "260px", padding: "20px" }}>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {activeTeams.map((team, index) => (
          <div key={index} onClick={() => handleCardClick(team)}>
            <TeamCard
              name={team.name}
              description={team.description}
              members={team.members}
            />
          </div>
        ))}
        <Card
          // style={{
          //   border: "1px dashed lightblue",
          //   borderRadius: "8px",
          //   cursor: "pointer",
          // }}
          style={{
            border: "1px dashed lightblue",
            borderRadius: "8px",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.2s, box-shadow 0.2s",
            cursor: "pointer",
            height:"180px",marginTop:"120px"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0px 2px 8px rgba(0, 0, 0, 0.1)";
          }}
          onClick={() => setOpenModal(true)}
        >
          <CardContent>
            <Typography variant="h6" sx={{ textAlign: "center", display:"flex",marginTop:"50px",padding:"10px",paddingLeft:"90px"}}>
              + Create New Team
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <TeamModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSave={handleAddTeam}
      />
    </div>
  );
};

export default Dashboard;

// import { useState } from "react";
// import { Box, Tabs, Tab } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import TeamCard from "../components/TeamCard";
// import TeamModal from "../components/TeamModal";
// import { Card, CardContent, Typography } from "@mui/material";

// const Dashboard = () => {
//   const [tabValue, setTabValue] = useState(0);
//   const [openModal, setOpenModal] = useState(false);

//   const [activeTeams, setActiveTeams] = useState([
//     {
//       name: "Development Team",
//       description: "Handles all software development",
//       members: [
//         { name: "Alice", profile: "Frontend Developer", project: "App A" },
//         { name: "Bob", profile: "Backend Developer", project: "App B" },
//       ],
//     },
//     {
//       name: "Marketing Team",
//       description: "Focuses on marketing strategies",
//       members: [
//         { name: "Eve", profile: "Social Media Manager", project: "Campaign A" },
//       ],
//     },
//   ]);
//   const [inactiveTeams] = useState([]);

//   const navigate = useNavigate();

//   const handleTabChange = (event, newValue) => setTabValue(newValue);
//   const handleAddTeam = (newTeam) => {
//     setActiveTeams((prevTeams) => [...prevTeams, newTeam]);
//     setOpenModal(false);
//   };

//   const handleCardClick = (team) => {
//     navigate("/team", { state: { team } });
//   };

//   return (
//     <div style={{ marginLeft: "260px", padding: "20px" }}>
//       <Tabs value={tabValue} onChange={handleTabChange}>
//         <Tab label="Active" />
//         <Tab label="Inactive" />
//       </Tabs>
//       <Box>
//         {tabValue === 0 && (
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(4, 1fr)",
//               gap: "20px",
//               marginTop: "20px",
//             }}
//           >
//             {activeTeams.map((team, index) => (
//               <div key={index} onClick={() => handleCardClick(team)}>
//                 <TeamCard
//                   name={team.name}
//                   description={team.description}
//                   members={team.members}
//                 />
//               </div>
//             ))}
//             <Card
//     style={{
//       border: "1px dashed lightblue",
//       borderRadius: "8px",
//       boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
//       transition: "transform 0.2s, box-shadow 0.2s",
//       cursor: "pointer",
//     }}
//     onMouseEnter={(e) => {
//       e.currentTarget.style.transform = "translateY(-5px)";
//       e.currentTarget.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.2)";
//     }}
//     onMouseLeave={(e) => {
//       e.currentTarget.style.transform = "translateY(0)";
//       e.currentTarget.style.boxShadow = "0px 2px 8px rgba(0, 0, 0, 0.1)";
//     }}
//               onClick={() => setOpenModal(true)}
//             >
//               {" "}
//               <CardContent>
//                 {" "}
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     fontWeight: "bold",
//                     marginBottom: "8px",
//                     textAlign: "center",
//                   }}
//                 >
//                   {" "}
//                   + Create New Team{" "}
//                 </Typography>{" "}
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     marginBottom: "12px",
//                     color: "#555",
//                     textAlign: "center",
//                   }}
//                 >
//                   {" "}
//                   Click to start a new team project{" "}
//                 </Typography>{" "}
//                 <Box
//                   sx={{ display: "flex", justifyContent: "center", gap: "5px" }}
//                 >
//                   {" "}
//                   <Typography
//                     variant="caption"
//                     color="info"
//                     sx={{
//                       backgroundColor: "#e3f2fd",
//                       padding: "2px 8px",
//                       borderRadius: "12px",
//                     }}
//                   >
//                     {" "}
//                     Create and manage your team{" "}
//                   </Typography>{" "}
//                 </Box>
//               </CardContent>{" "}
//             </Card>
//             {/* <div
//               onClick={() => setOpenModal(true)}
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 border: "2px dashed #ccc",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 height: "200px",
//               }}
//             >
//               + Create New Team
//             </div> */}
//           </div>
//         )}
//         {tabValue === 1 && (
//           <div style={{ marginTop: "20px" }}>
//             {inactiveTeams.length > 0 ? (
//               inactiveTeams.map((team, index) => (
//                 <TeamCard
//                   key={index}
//                   name={team.name}
//                   description={team.description}
//                   members={team.members}
//                 />
//               ))
//             ) : (
//               <div>No inactive teams available.</div>
//             )}
//           </div>
//         )}
//       </Box>
//       <TeamModal
//         open={openModal}
//         onClose={() => setOpenModal(false)}
//         onSave={handleAddTeam}
//       />
//     </div>
//   );
// };

// export default Dashboard;

