//components
import Header from "./components/Header";
import Home from "./components/Home";

import {Box} from '@mui/material'

function App() {
  return (
    <div>
      <Header />
      <Box  style={{marginTop: '54px'}}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
