import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

export const ContentEventWrapper = styled("div")({
  flex: 0.7,
});

export const ContentWrapper = styled("div")({
  display: "flex",
  height: "60%",
  gap: "10px",
});

export const FooterTextWrapper = styled(Typography)({
  color: "#999",
  fontSize: "14px",
  padding: "16px 8px",
});

export const FooterWrapper = styled("div")({
  backgroundColor: "#333333",
  height: "31vh",
});

export const HeadingWrapper = styled("div")({
  marginTop: "15px",
});

export const InfoSectionWrapper = styled("div")({
  flex: 0.3,
  marginLeft: "4px",
  height: "20em",
  overflowY: "scroll",
});

export const MainContentBoxWrapper = styled(Box)({
  backgroundColor: "#ffffff",
  height: "50vh",
  padding: "15px",
  borderRadius: "4px",
  marginBottom: "15px",
});

export const MainSeperator = styled("div")({
  width: "100%",
  height: "5vh",
  backgroundColor: "#222222",
  marginBottom: "10px",
});

export const MainWrapper = styled("div")({
  width: "100vw",
  height: "100vh",
  backgroundColor: "#2e7423",
});

export const PrimaryHeadingTextWrapper = styled(Typography)({
  fontSize: "22px",
  fontWeight: "bold",
});

export const SecondaryHeadingTextWrapper = styled(Typography)({
  fontSize: "14px",
  fontWeight: "bold",
  marginBottom: "10px",
});

export const InfoPrimaryHeadingWrapper = styled(Typography)({
  fontSize: "15px",
  fontWeight: "bold",
  paddingBottom: "15px",
});

export const InfoTextWrapper = styled(Typography)({
  fontSize: "14px",
  paddingBottom: "15px",
});
