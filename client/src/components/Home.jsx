import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Banner from "./Banner";
import '../css/home.css';

const Home = ({}) => {
  return (
    <>
      <Navbar />
      <Box className="other-components">
        <Banner />
      </Box>
    </>
  );
};

export default Home;
