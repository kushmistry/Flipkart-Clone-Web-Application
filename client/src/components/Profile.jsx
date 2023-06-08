import { Typography, Menu, MenuItem } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useState } from "react";
import "../css/profile.css";

const Profile = ({ logedinUser, setLoggedinUser }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
    setLoggedinUser("");
  };

  return (
    <>
      <Typography onClick={handleClick} className="custom-text">
        {logedinUser}
      </Typography>

      <Menu
        className="menu"
        id="basic-menu"
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <PowerSettingsNewIcon color="primary" fontSize="small" />
          <Typography style={{ marginLeft: "5px" }}>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
