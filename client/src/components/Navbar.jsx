import { Box, Typography } from "@mui/material";
import { navData } from "../constants/data";

const Navbar = ({}) => {
  return (
    <>
      <Box
        clasName="navbar-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "5% 3%",
          marginBottom: "1%"
        }}
      >
        {navData.map((item) => {
          return (
            <Box
              style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={item.url}
                alt="Product image"
                style={{ width: "64px" }}
              />
              <Typography>{item.text}</Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Navbar;
