import { Box, InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "../css/search.css";

const Search = ({}) => {
  return (
    <Box className="search-bar">
      <InputBase className="search-input" placeholder="Search for products, brands and more"></InputBase>
      <Box>
        <SearchIcon className="search-icon" />
      </Box>
    </Box>
  );
};

export default Search;
