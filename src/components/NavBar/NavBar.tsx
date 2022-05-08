import Container from "@mui/material/Container";
import { AppBarWrapper, NavWrapper } from "./NavBar.style";

const UnibetLogo = require("src/assets/images/unibet-logo.png");

const ButtonAppBar = () => {
  return (
    <NavWrapper>
      <AppBarWrapper position="static">
        <Container maxWidth="md">
          <img src={UnibetLogo} alt={"sport"} width={200} height={30} />
        </Container>
      </AppBarWrapper>
    </NavWrapper>
  );
};

export default ButtonAppBar;
