import { Card, CardContent, Typography, Box } from "@mui/material";
import group from "../assets/images/group.png";
import slack from "../assets/images/slack.png"
const TeamCard = ({
  name = "Unnamed Team",
  lead = "No Lead",
  description = "No description",
  members = [],
  onClick,
}) => {
  // Define a function to truncate the description
  const truncate = (str, n) => {
    return str.length > n ? str.substring(0, n - 1) + "..." : str;
  };

  return (
    <Card
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
        height: "240px",
        width: "230px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0px 2px 8px rgba(0, 0, 0, 0.1)";
      }}
      onClick={onClick}
    >
      <CardContent style={{ flexGrow: 1 }}>
        <Box style={{ display: "flex", justifyContent: "space-between", alignItems:"flex-start",marginBottom:"7px", }}>
          <img src={slack} alt="slack" width={"32px"} height={"28px"} style={{borderRadius:"40px"}}/>
        </Box>
        <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h7" style={{ fontWeight: "bold" }}>
            {truncate(name, 20)}
          </Typography>
        </Box>
        <Typography variant="h9" style={{ fontWeight:"normal", marginBottom: "8px" }}>
          {truncate(lead, 15)}
        </Typography>
        <Typography
          variant="body2"
          style={{ color: "#555" }}
        >
          {truncate(description, 35)}
        </Typography>
      </CardContent>
      <Box style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
        <img src={group} alt="Group Icon" style={{ width: "80px", height: "30px" }} />
        <Typography
          variant="caption"
          style={{
            color:"lightgrey",
            padding: "2px 8px",
            marginLeft: "5px",
            borderRadius: "12px",
          }}
        >
          {`${members.length.toString().concat("+")} Candidates`}
        </Typography>
      </Box>
    </Card>
  );
};

export default TeamCard;