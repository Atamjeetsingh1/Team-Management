import { useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TeamCard from "../components/TeamCard";
import TeamModal from "../components/TeamModal";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeTeams, setActiveTeams] = useState([
    {
      name: "Development Team",
      lead: "Ashutosh Sharma",
      description: "Handles all software development",
      members: [
        { name: "Alice", profile: "Frontend Developer", project: "App A", available: true },
        { name: "Bob", profile: "Backend Developer", project: "App B", available: false },
        { name: "Ravi", profile: "ReactJs Developer", project: "App A", available: true },
      ],
    },
    {
      name: "Marketing Team",
      lead: "Vikas",
      description: "Focuses on marketing strategies",
      members: [
        { name: "Eve", profile: "Social Media Manager", project: "Campaign A", available: false },
        { name: "John", profile: "Content Writer", project: "Blog B", available: true },
        { name: "Akash", profile: "Content Writer", project: "Campaign A", available: true },
      ],
    },
  ]);

  const navigate = useNavigate();

  const handleAddTeam = (newTeam) => {
    setActiveTeams((prevTeams) => [...prevTeams, newTeam]);
    setOpenModal(false);
  };

  const handleCardClick = (team) => {
    navigate("/teamPage", { state: { team } });
  };

  return (
    <div style={{ marginLeft: "260px", padding: "20px" }}>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          marginTop: "140px",gap:"20px"
        }}
      >
        {activeTeams.map((team, index) => (
          <div key={index} onClick={() => handleCardClick(team)}>
            <TeamCard
              name={team.name}
              lead={team.lead}
              description={team.description}
              members={team.members}
            />
          </div>
        ))}
        <Card
          style={{
            border: "1px dashed lightblue",
            borderRadius: "8px",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.2s, box-shadow 0.2s",
            cursor: "pointer",
            height: "240px",
            width: "230px",
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
            <Typography
              variant="h6"
              sx={{ textAlign: "center", marginTop: "30px", padding: "10px",color:"lightgreen"}}
            >
                   <pre >+</pre> 
              Create New Team
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

