import { Dialog, Box, TextField, Button, Typography } from "@mui/material";
import "../css/signin.css";
import { useState } from "react";
import authenticateUser from "../sevice/api";

const SignIn = ({ open, setOpen }) => {
  const [togglelogin, setToggleLogin] = useState(true);
  const [leftPart, setLeftPart] = useState({
    header: "Login",
    description: "Get access to your Orders, Wishlist and Recommendations",
  });

  const [signupDetails, setSignupDetails] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    mobileNumber: "",
  });

  const toggleLoginHandler = () => {
    setToggleLogin(false);
    setLeftPart({
      header: "Looks like you're new here!",
      description: "Sign up with your personal details to get started",
    });
  };

  const dialogBoxHandler = () => {
    setOpen(false);
    setToggleLogin(true);
  };

  const signupDetailsHandler = (e) => {
    setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
  };

  const signupHandler = async () => {
    const response = await authenticateUser(signupDetails);
    if(!response) return;
    dialogBoxHandler();
  }

  return (
    <Dialog
      open={open}
      onClose={dialogBoxHandler}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Box className="dialog-box">
        <Box className="left-part">
          <h2 style={{ color: "white" }}>{leftPart.header}</h2>
          <p>{leftPart.description}</p>
        </Box>
        {togglelogin ? (
          <Box className="right-part">
            <TextField label="Enter Email/Mobile number" variant="standard" />
            <TextField
              style={{ marginTop: "10px" }}
              label="Enter Password"
              variant="standard"
            />
            <Typography
              style={{
                fontSize: "12px",
                marginTop: "2rem",
                marginBottom: "12px",
                color: "#878787",
              }}
            >
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </Typography>
            <Button variant="contained">Login</Button>
            <Typography style={{ textAlign: "center", marginTop: "1rem" }}>
              OR
            </Typography>
            <Button className="register-otp-btn" variant="contained">
              Request OTP
            </Button>
            <Typography id="signup-text" onClick={toggleLoginHandler}>
              New to Flipkart? Create an account
            </Typography>
          </Box>
        ) : (
          <Box className="right-part">
            <TextField
              label="Enter Firstname"
              onChange={(e) => {
                signupDetailsHandler(e);
              }}
              name="firstname"
              variant="standard"
            />
            <TextField
              style={{ marginTop: "10px" }}
              onChange={(e) => {
                signupDetailsHandler(e);
              }}
              label="Enter lastname"
              name="lastname"
              variant="standard"
            />
            <TextField
              style={{ marginTop: "10px" }}
              onChange={(e) => {
                signupDetailsHandler(e);
              }}
              label="Enter Username"
              name="username"
              variant="standard"
            />
            <TextField
              style={{ marginTop: "10px" }}
              onChange={(e) => {
                signupDetailsHandler(e);
              }}
              label="Enter Email"
              type="email"
              name="email"
              variant="standard"
            />
            <TextField
              style={{ marginTop: "10px" }}
              onChange={(e) => {
                signupDetailsHandler(e);
              }}
              label="Enter Password"
              type="password"
              name="password"
              variant="standard"
            />
            <TextField
              style={{ marginTop: "10px" }}
              onChange={(e) => {
                signupDetailsHandler(e);
              }}
              label="Enter Mobile number"
              name="mobileNumber"
              variant="standard"
            />
            <Button variant="contained" onClick={signupHandler} >Continue</Button>
          </Box>
        )}
      </Box>
    </Dialog>
  );
};

export default SignIn;
