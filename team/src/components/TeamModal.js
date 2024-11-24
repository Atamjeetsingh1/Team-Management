import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Alert,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

const TeamModal = ({ open, onClose, onSave }) => {
  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState("");
  const [memberName, setMemberName] = useState("");
  const [profile, setProfile] = useState("");
  const [project, setProject] = useState("");
  const [members, setMembers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const handleAddMember = () => {
    if (memberName.trim() && profile.trim() && project.trim()) {
      setMembers((prev) => [
        ...prev,
        { name: memberName.trim(), profile, project, available: true },
      ]);
      setMemberName("");
      setProfile("");
      setProject("");
      setFieldErrors({});
    } else {
      setFieldErrors({
        memberName: !memberName.trim(),
        profile: !profile.trim(),
        project: !project.trim(),
      });
    }
  };

  const handleDeleteAllMembers = () => {
    setMembers([]);
  };

  const handleSave = () => {
    const newFieldErrors = {
      teamName: !teamName.trim(),
      description: !description.trim(),
      members: members.length === 0,
    };

    setFieldErrors(newFieldErrors);

    if (!newFieldErrors.teamName && !newFieldErrors.description && !newFieldErrors.members) {
      onSave({ name: teamName, description, members });
      setTeamName("");
      setDescription("");
      setMembers([]);
      onClose();
    } else {
      setErrorMessage("Please fill in all fields and add at least one member.");
    }
  };

  const selectedCheckboxes = members.filter((member) => member.available).length;

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          boxShadow: 24,
          borderRadius: "8px",
          padding: "24px",
          width: "800px",
          display: "flex",
          gap: "24px",
        }}
      >
        {/* Left Section */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>
          <Typography variant="h4">Create Team</Typography>
          <Typography variant="h6">Team Name</Typography>
          <TextField
            label="Team Name"
            fullWidth
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            error={fieldErrors.teamName}
            helperText={fieldErrors.teamName ? "Team Name is required" : ""}
          />
          <Typography variant="h6">Team Description</Typography>
          <TextField
            label="Description"
            fullWidth
            multiline
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            error={fieldErrors.description}
            helperText={fieldErrors.description ? "Description is required" : ""}
          />
        
        </Box>
        {/* Right Section */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px", marginTop:"72px" }}>
        <Typography variant="h6">Team Member</Typography>

          <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>

            <TextField
              label="Member Name"
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
              error={fieldErrors.memberName}
              helperText={fieldErrors.memberName ? "Member Name is required" : ""}
            />
            <TextField
              label="Profile"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              error={fieldErrors.profile}
              helperText={fieldErrors.profile ? "Profile is required" : ""}
            />
            <TextField
              label="Project"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              error={fieldErrors.project}
              helperText={fieldErrors.project ? "Project is required" : ""}
            />
            <IconButton onClick={handleAddMember}>
              <AddIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="subtitle1">Selected: {selectedCheckboxes}</Typography>
            <IconButton onClick={handleDeleteAllMembers}>
              <DeleteIcon />
            </IconButton>
          </Box>
          <Box sx={{ overflowY: "scroll", maxHeight: "200px" }}>
            <List>
              {members.map((member, index) => (
                <ListItem key={index}>
                  <ListItemText primary={member.name} secondary={member.profile} />
                  <Checkbox
                    checked={member.available}
                    onChange={(e) =>
                      setMembers((prev) =>
                        prev.map((m, i) =>
                          i === index ? { ...m, available: e.target.checked } : m
                        )
                      )
                    }
                  />
                  <IconButton onClick={() => setMembers((prev) => prev.filter((_, i) => i !== index))}>
                    <RemoveIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>

          </Box>
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "16px", marginTop:"120px"}}>
          <Button onClick={onClose} variant="contained" color="white" sx={{border:"1px solid lightblue"}}>
              Cancel
            </Button>
            <Button onClick={handleSave} variant="contained" color="primary">
              Save
            </Button>
          
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default TeamModal;


