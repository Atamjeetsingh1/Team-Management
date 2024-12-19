import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Card, CardContent, Tabs, Tab } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";

const TeamPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { team = { name: "",lead:"", description: "", members: [] } } = location.state || {};

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const filteredMembers = (filter) => {
    if (filter === "all") return team.members;
    if (filter === "available") return team.members.filter((member) => member.available);
    return team.members.filter((member) => !member.available);
  };

  const allMembers = team.members.length;
  const availableMembers = team.members.filter((member) => member.available).length;
  const unavailableMembers = team.members.filter((member) => !member.available).length;

  const membersToShow = filteredMembers(
    tabValue === 0 ? "all" : tabValue === 1 ? "available" : "unavailable"
  );

  return (
    <div style={{ marginLeft: "260px", padding: "20px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginTop: "60px",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: "#1976d2",
            color: "white",
            padding: "10px",
            border: "none",
            cursor: "pointer",
            borderRadius: "10px",
            width: "60px",
          }}
        >
          <ArrowBackIcon />
        </button>
      </Box>
      <Typography
        variant="h4"
        sx={{ marginBottom: "20px", fontWeight: "bold" }}
      >
        {team.name || "No Team Added"}
      </Typography> <Typography
        variant="h6"
        sx={{ marginBottom: "20px", fontWeight: "bold" }}
      >
        {team.lead || "No Lead Added"}
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: "10px", color: "#555" }}>
        {team.members.length} {team.members.length === 1 ? "Member" : "Members"}
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginBottom: "30px", lineHeight: "1.6", color: "#444" }}
      >
        {team.description || "No description available."}
      </Typography>

      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab
          label={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              All ({allMembers})
            </Box>
          }
        />
        <Tab
          label={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#4caf50',
                  marginRight: 1,
                }}
              />
              Available ({availableMembers})
            </Box>
          }
        />
        <Tab
          label={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#f44336',
                  marginRight: 1,
                }}
              />
              Unavailable ({unavailableMembers})
            </Box>
          }
        />
      </Tabs>

      <Box sx={{ marginTop: "20px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "40px"
          }}
        >
          {membersToShow.length === 0 ? (
            <Box
              sx={{
                textAlign: "center",
                gridColumn: "1 / -1",
                padding: "20px",
                backgroundColor: "#f4f4f4",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                color: "#555",width:"90vw",margin:"10px"
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                No {tabValue === 1 ? "available" : tabValue === 2 ? "unavailable" : ""} members
              </Typography>
            </Box>
          ) : (
            membersToShow.map((member, index) => (
              <Card
              
                // key={index}
                // sx={{
                //   padding: "6px",
                //   border: "1px solid #e0e0e0",
                //   height: "240px",
                //   width: "230px",
                // }}
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
              >
                <CardContent sx={{marginTop:"20px"}}>
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="body2">
                    Profile: {member.profile}
                  </Typography>
                  <Typography variant="body2">
                    Project: {member.project}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginTop: "8px",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: member.available ? "#E3F2EF" : "#CB383A1A",
                        color: member.available ? "#4FD097" : "#CB3838",
                        padding: "2px 8px",borderRadius:"5px",
                    marginLeft:"142px",marginTop:"54px",
                      }}
                    >
                      {member.available ? "Active" : "Inactive"}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))
          )}
        </div>

      </Box>
    </div>
  );
};

export default TeamPage;
