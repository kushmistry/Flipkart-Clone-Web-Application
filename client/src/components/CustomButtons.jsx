import { Box, Button, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import '../css/custombuttons.css';

const CustomButtons = ({}) => {
  return (
    <Box className="custom-btns">
      <Button className="login-btn" variant="contained">
        Login 
      </Button>
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
  );
};

export default CustomButtons;
