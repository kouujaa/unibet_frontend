import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const UnibetLogo = require("src/assets/images/unibet-logo.png");

const ButtonAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1, minHeigth: "20vh" }}>
      <AppBar
        position="static"
        sx={{
          minHeigth: "40vh",
          backgroundColor: "#2e7423",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
      >
        <Container maxWidth="md">
          <img src={UnibetLogo} alt={"sport"} width={200} height={50} />
        </Container>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
