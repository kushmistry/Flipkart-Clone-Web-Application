import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import "../css/header.css";
import Search from "./Search";
import CustomButtons from "./CustomButtons";

const Header = ({}) => {
  return (
    <div>
      <AppBar className="headerAppBar">
        <Toolbar style={{minHeight: '55px'}}>
          <Box className="header-logo">
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="Flipkart logo"
              style={{ width: "75px" }}
            />
            <Box>
              <Typography className="header-logo-details">
                Explore
                <span style={{ color: "#ffe500" }}> plus </span>
                <img
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                  alt="plus logo"
                  style={{ width: "10px" }}
                />
              </Typography>
            </Box>
          </Box>
          <Search />
          <CustomButtons />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
