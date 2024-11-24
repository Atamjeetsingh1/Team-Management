import { Card, CardContent, Typography, Box } from "@mui/material";

const TeamCard = ({
  name = "Unnamed Team",
  description = "No description",
  members = [],
}) => (
  <Card
    style={{
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s, box-shadow 0.2s",
      cursor: "pointer",height:"180px",
      marginTop:"120px"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.2)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0px 2px 8px rgba(0, 0, 0, 0.1)";
    }}
  >
    <CardContent>
      <Typography variant="h6" style={{ fontWeight: "bold", marginBottom: "8px" }}>
        {name}
      </Typography>
      <Typography variant="body2" style={{ marginBottom: "12px", color: "#555" }}>
        {description}
      </Typography>
      <Box style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
          <Typography
            variant="caption"
            color="info"
            style={{
              backgroundColor: "#e3f2fd",
              padding: "2px 8px",
              borderRadius: "12px",
            }}
          >
           {`${members.length.toString().concat("+")}Members`}
           
          </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default TeamCard;



// import { Card, CardContent, Typography, Box } from "@mui/material";

// const TeamCard = ({ name = "Unnamed Team", description = "No description", members = [] }) => (
//   <Card
//     style={{
//       border: "1px solid #e0e0e0",
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
//   >
//     <CardContent>
//       <Typography variant="h6" style={{ fontWeight: "bold", marginBottom: "8px" }}>
//         {name}
//       </Typography>
//       <Typography variant="body2" style={{ marginBottom: "12px", color: "#555" }}>
//         {description}
//       </Typography>
//       <Box style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
//         {members.map((member, index) => (
//           <Typography
//             key={index}
//             variant="caption"
//             style={{
//               backgroundColor: "#e3f2fd",
//               padding: "2px 8px",
//               borderRadius: "12px",
//             }}
//           >
//             {typeof member === "string" ? member : member.name} {/* Render `name` if `member` is an object */}
//           </Typography>
//         ))}
//       </Box>
//     </CardContent>
//   </Card>
// );

// export default TeamCard;




// import { Card, CardContent, Typography, Box } from "@mui/material";

// const TeamCard = ({ name = "Unnamed Team", description = "No description", members = [] }) => (
//   <Card
//     style={{
//       border: "1px solid #e0e0e0",
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
//   >
//     <CardContent>
//       <Typography variant="h6" style={{ fontWeight: "bold", marginBottom: "8px" }}>
//         {name}
//       </Typography>
//       <Typography variant="body2" style={{ marginBottom: "12px", color: "#555" }}>
//         {description}
//       </Typography>
//       <Box style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
//         {members.map((member, index) => (
//           <Typography
//             key={index}
//             variant="caption"
//             style={{
//               backgroundColor: "#e3f2fd",
//               padding: "2px 8px",
//               borderRadius: "12px",
//             }}
//           >
//             {member}
//           </Typography>
//         ))}
//       </Box>
//     </CardContent>
//   </Card>
// );

// export default TeamCard;



// import { Card, CardContent, Typography } from '@mui/material';

// const TeamCard = ({ name = "Unnamed Team", description = "No description", members = [] }) => (
//   <Card>
//     <CardContent>
//       <Typography variant="h6">{name}</Typography>
//       <Typography variant="body2">{description}</Typography>
//       <Typography variant="caption">{`${members.length} members`}</Typography>
//     </CardContent>
//   </Card>
// );

// export default TeamCard;




// import { Card, CardContent, Typography } from '@mui/material';

// const TeamCard = ({ name, description, members }) => (
//   <Card>
//     <CardContent>
//       <Typography variant="h6">{name}</Typography>
//       <Typography variant="body2">{description}</Typography>
//       <Typography variant="caption">{`${members.length} members`}</Typography>
//     </CardContent>
//   </Card>
// );

// export default TeamCard;