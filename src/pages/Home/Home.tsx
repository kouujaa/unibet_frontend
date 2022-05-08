import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { NavBar } from "src/components";
import Events from "src/containers/Event";

const Home = () => {
  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "#2e7423" }}
    >
      <NavBar />

      <div
        style={{
          width: "100%",
          height: "5vh",
          backgroundColor: "#222222",
          marginBottom: "10px",
        }}
      ></div>
      <>
        <CssBaseline />
        <Container maxWidth="md">
          <Box
            sx={{
              bgcolor: "#ffffff",
              height: "50vh",
              padding: "15px",
              borderRadius: "4px",
              marginBottom: "15px",
            }}
          >
            <section style={{ marginTop: "15px" }}>
              <Typography
                variant="h3"
                sx={{ fontSize: "22px", fontWeight: "bold" }}
              >
                Live matches
              </Typography>
            </section>
            <section style={{ marginTop: "15px" }}>
              <Typography
                variant="h5"
                sx={{ fontSize: "14px", fontWeight: "bold" }}
              >
                Here is a list of matches that are live right now.
              </Typography>
            </section>
            <div style={{ display: "flex", height: "60%", gap: "10px" }}>
              <div style={{ flex: 0.7 }}>
                <Events />
              </div>
              <hr />
              <div
                style={{
                  flex: 0.3,
                  marginLeft: "4px",
                  height: "20em",
                  overflowY: "scroll",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    paddingBottom: "15px",
                  }}
                >
                  Live betting
                </Typography>
                <Typography sx={{ fontSize: "14px", paddingBottom: "15px" }}>
                  Place your bets as the action unfolds. We offer a wide
                  selection of live betting events and you can place both single
                  and combination bets.
                </Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  You will be able to see an in-play scoreboard with the current
                  result and match stats, while on selected events you will also
                  be able to watch the action live with Unibet TV on the desktop
                  site.
                </Typography>
              </div>
            </div>
          </Box>
        </Container>
      </>

      <div
        style={{
          backgroundColor: "#333333",
          height: "31vh",
        }}
      >
        <Container maxWidth="md">
          <Typography
            style={{ color: "#999", fontSize: "14px", padding: "16px 8px" }}
          >
            © 1997-2015, Unibet. All rights reserved.
          </Typography>
        </Container>
      </div>
    </div>
  );
};

export default Home;
//
