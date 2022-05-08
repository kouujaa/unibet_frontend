import Container from "@mui/material/Container";
import { NavBar } from "src/components";
import Events from "src/containers/Event";
import {
  ContentEventWrapper,
  ContentWrapper,
  FooterTextWrapper,
  FooterWrapper,
  HeadingWrapper,
  InfoPrimaryHeadingWrapper,
  InfoSectionWrapper,
  InfoTextWrapper,
  MainContentBoxWrapper,
  MainSeperator,
  MainWrapper,
  PrimaryHeadingTextWrapper,
  SecondaryHeadingTextWrapper,
} from "./Home.style";

const Home = () => {
  return (
    <MainWrapper>
      <NavBar />
      <MainSeperator />

      <Container maxWidth="md">
        <MainContentBoxWrapper>
          <HeadingWrapper>
            <PrimaryHeadingTextWrapper variant="h3">
              Live matches
            </PrimaryHeadingTextWrapper>
          </HeadingWrapper>
          <HeadingWrapper>
            <SecondaryHeadingTextWrapper variant="h5">
              Here is a list of matches that are live right now.
            </SecondaryHeadingTextWrapper>
          </HeadingWrapper>
          <ContentWrapper>
            <ContentEventWrapper>
              <Events />
            </ContentEventWrapper>
            <hr />
            <InfoSectionWrapper>
              <InfoPrimaryHeadingWrapper>
                Live betting
              </InfoPrimaryHeadingWrapper>
              <InfoTextWrapper>
                Place your bets as the action unfolds. We offer a wide selection
                of live betting events and you can place both single and
                combination bets.
              </InfoTextWrapper>
              <InfoTextWrapper>
                You will be able to see an in-play scoreboard with the current
                result and match stats, while on selected events you will also
                be able to watch the action live with Unibet TV on the desktop
                site.
              </InfoTextWrapper>
            </InfoSectionWrapper>
          </ContentWrapper>
        </MainContentBoxWrapper>
      </Container>

      <FooterWrapper>
        <Container maxWidth="md">
          <FooterTextWrapper>
            © 1997-2015, Unibet. All rights reserved.
          </FooterTextWrapper>
        </Container>
      </FooterWrapper>
    </MainWrapper>
  );
};

export default Home;
