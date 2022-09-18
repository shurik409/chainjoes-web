import "./App.css";
import {
  First,
  Second,
  Third,
  Fourth,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
} from "./modules";
import { Box } from "@mui/material";
import FirstFooter from "./imgs/first_footer.png";

function App() {
  return (
    <Box>
      <First />
      <Box sx={{ position: "relative", width: "100%" }}>
        <Box
          sx={{
            position: "absolute",
            background: `url(${FirstFooter})`,
            height: "230px",
            width: "100%",
            top: "-66px",
            backgroundSize: "cover",
            zIndex: 1,
          }}
        />
      </Box>
      <Second />
      <Third />
      <Fourth />
      <Five />
      <Six />
      <Seven />
      <Eight />
      <Nine />
      <Ten />
    </Box>
  );
}

export default App;
