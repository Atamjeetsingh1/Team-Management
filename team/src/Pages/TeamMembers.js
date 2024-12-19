import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const teamsData = [
  {
    name: "Development Team",
    description: "Handles all Frontend Development",
    lead: "Ashutosh Sharma",
    members: [
      { name: "Alice", profile: "Frontend Developer", project: "App A" },
      { name: "Bob", profile: "Laravel Developer", project: "App B" },
      { name: "Ravi", profile: "PHP Developer", project: "App A" },
    ],
  },
  {
    name: "Full Stack Development Team",
    description: "Handles all full stack software development work",
    lead: "Atul Sharma",
    members: [
      { name: "Alice", profile: "Frontend Developer", project: "App A" },
      { name: "Bob", profile: "Backend Developer", project: "App B" },
      { name: "Ravi", profile: "ReactJs Developer", project: "App A" },
    ],
  },
  {
    name: "Development Team",
    description: "Handles all Frontend Development",
    lead: "Saksham",
    members: [
      { name: "Alice", profile: "Frontend Developer", project: "App A" },
      { name: "Rajat", profile: "Laravel Developer", project: "App B" },
      { name: "Ravi", profile: "PHP Developer", project: "App A" },
    ],
  },
  {
    name: "Development Team",
    description: "Handles all Development work",
    lead: "Ashutosh Sharma",
    members: [
      { name: "Alice", profile: "Frontend Developer", project: "App A" },
      { name: "Bob", profile: "Laravel Developer", project: "App B" },
      { name: "Ravi", profile: "PHP Developer", project: "App A" },
    ],
  },
  {
    name: "Backend Development Team",
    description: "Handles all Backend Development",
    lead: "Anoop Sharma",
    members: [
      { name: "Alice", profile: "Strapi Developer", project: "App A" },
      { name: "Bob", profile: "MongoDB Developer", project: "App B" },
      { name: "Ravi", profile: "NodeJs Developer", project: "App A" },
    ],
  },
  {
    name: "Marketing Team",
    description: "Focuses on marketing strategies",
    lead: "Vikas",
    members: [
      { name: "Eve", profile: "Social Media Manager", project: "Campaign A" },
      { name: "John", profile: "Content Writer", project: "Blog B" },
      { name: "Akash", profile: "Content Writer", project: "Campaign A" },
    ],
  },
];

const TeamMembers= () => {
  return (
    <Box sx={{ padding: "20px", marginLeft: "285px", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px", color: "#1976d2", fontWeight: "bold" }}>
        Teams Information
      </Typography>
      {teamsData.map((team, index) => (
        <Box key={index} sx={{ marginBottom: "40px", padding: "20px", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)" }}>
          <Typography variant="h5" sx={{ marginBottom: "10px", color: "#1565c0", fontWeight: "bold" }}>
            {team.name}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "10px", color: "#424242" }}>
            Description: {team.description}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "10px", color: "#424242" }}>
            Team Lead: {team.lead}
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: "10px", color: "#1976d2", fontWeight: "bold" }}>
            Members
          </Typography>
          <TableContainer component={Paper} sx={{ backgroundColor: "#f1f1f1" }}>
            <Table>
              <TableHead sx={{ backgroundColor: "#e0e0e0" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Profile</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Project</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {team.members.map((member, index) => (
                  <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#fafafa' } }}>
                    <TableCell>{member.name}</TableCell>
                    <TableCell>{member.profile}</TableCell>
                    <TableCell>{member.project}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ))}
    </Box>
  );
};

export default TeamMembers;

// import React from "react";
// import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

// const teamsData = [
//   {
//     name: "Development Team",
//     description: "Handles all Frontend Development",
//     lead: "Ashutosh Sharma",
//     members: [
//       { name: "Alice", profile: "Frontend Developer", project: "App A" },
//       { name: "Bob", profile: "Laravel Developer", project: "App B" },
//       { name: "Ravi", profile: "PHP Developer", project: "App A" },
//     ],
//   },
//   {
//     name: "Full Stack Development Team",
//     description: "Handles all full stack software development work",
//     lead: "Atul Sharma",
//     members: [
//       { name: "Alice", profile: "Frontend Developer", project: "App A" },
//       { name: "Bob", profile: "Backend Developer", project: "App B" },
//       { name: "Ravi", profile: "ReactJs Developer", project: "App A" },
//     ],
//   },
//   {
//     name: "Development Team",
//     description: "Handles all Frontend Development",
//     lead: "Saksham",
//     members: [
//       { name: "Alice", profile: "Frontend Developer", project: "App A" },
//       { name: "Rajat", profile: "Laravel Developer", project: "App B" },
//       { name: "Ravi", profile: "PHP Developer", project: "App A" },
//     ],
//   },
//   {
//     name: "Development Team",
//     description: "Handles all Development work",
//     lead: "Ashutosh Sharma",
//     members: [
//       { name: "Alice", profile: "Frontend Developer", project: "App A" },
//       { name: "Bob", profile: "Laravel Developer", project: "App B" },
//       { name: "Ravi", profile: "PHP Developer", project: "App A" },
//     ],
//   },
//   {
//     name: "Backend Development Team",
//     description: "Handles all Backend Development",
//     lead: "Anoop Sharma",
//     members: [
//       { name: "Alice", profile: "Strapi Developer", project: "App A" },
//       { name: "Bob", profile: "MongoDB Developer", project: "App B" },
//       { name: "Ravi", profile: "NodeJs Developer", project: "App A" },
//     ],
//   },
//   {
//     name: "Marketing Team",
//     description: "Focuses on marketing strategies",
//     lead: "Vikas",
//     members: [
//       { name: "Eve", profile: "Social Media Manager", project: "Campaign A" },
//       { name: "John", profile: "Content Writer", project: "Blog B" },
//       { name: "Akash", profile: "Content Writer", project: "Campaign A" },
//     ],
//   },
// ];

// const TeamMembers= () => {
//   return (
//     <Box sx={{ padding: "20px", marginLeft: "285px" }}>
//       <Typography variant="h4" sx={{ marginBottom: "20px" }}>
//         Teams Information
//       </Typography>
//       {teamsData.map((team, index) => (
//         <Box key={index} sx={{ marginBottom: "40px" }}>
//           <Typography variant="h5" sx={{ marginBottom: "10px" }}>
//             {team.name}
//           </Typography>
//           <Typography variant="body1" sx={{ marginBottom: "10px" }}>
//             Description: {team.description}
//           </Typography>
//           <Typography variant="body1" sx={{ marginBottom: "10px" }}>
//             Team Lead: {team.lead}
//           </Typography>
//           <Typography variant="h6" sx={{ marginBottom: "10px" }}>
//             Members
//           </Typography>
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Name</TableCell>
//                   <TableCell>Profile</TableCell>
//                   <TableCell>Project</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {team.members.map((member, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{member.name}</TableCell>
//                     <TableCell>{member.profile}</TableCell>
//                     <TableCell>{member.project}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default TeamMembers;
