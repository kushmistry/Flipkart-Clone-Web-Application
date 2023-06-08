import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../css/custombuttons.css";
import SignIn from "./SignIn";
import { useSignUp } from "./authentication-context";
import Profile from "./Profile";

const CustomButtons = ({}) => {
  const [open, setOpen] = useState(false);
  const { logedinUser, setLoggedinUser } = useSignUp();
  const loginHandler = () => {
    setOpen(true);
    console.log("login clicked...");
  };

  return (
    <>
      <Box className="custom-btns">
        {logedinUser === "" ? (
          <Button
            className="login-btn"
            variant="contained"
            onClick={loginHandler}
          >
            Login
          </Button>
        ) : (
          <Profile
            logedinUser={logedinUser}
            setLoggedinUser={setLoggedinUser}
          />
        )}

        <Typography className="custom-text">Become a Seller</Typography>
        <Box className="box-inline">
          <Typography className="custom-text">More</Typography>
          <KeyboardArrowDownIcon />
        </Box>
        <Box className="box-inline">
          <ShoppingCartIcon />
          <Typography className="custom-text">Cart</Typography>
        </Box>
      </Box>
      {open && <SignIn open={open} setOpen={setOpen} />}
    </>
  );
};

export default CustomButtons;
