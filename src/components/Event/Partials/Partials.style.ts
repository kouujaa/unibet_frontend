import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const EventScoreWrapper = styled("div")({
  display: "flex",
  marginBottom: 0,
  padding: 0,
});

export const EventScoreTextWrapper = styled(Typography)({
  color: "#efbb05",
  fontSize: "24px",
});

export const EventTeamsWrapper = styled("div")({
  display: "flex",
  gap: "1em",
  alignItems: "center",
});

export const EventTeamsTextWrapper = styled(Typography)({
  color: "#fff",
});

export const EventTimeWrapper = styled("div")({
  display: "flex",
  gap: "1em",
  alignItems: "center",
});

export const EventTimeTextWrapper = styled(Typography)({
  color: "#999",
});
