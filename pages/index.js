import Button from "./components/Button";
import { StyledLink, StyledLinkWarning } from "./components/Link";
import Container from "./components/Container";
import Infobox from "./components/InfoBox";

export default function HomePage() {
  return (
    <>
      <h1>Styled Components</h1>
      <Container $direction="column">
        <Button $color="ocean">I'm a button</Button>
        <Button>I'm a button</Button>
        <Button>I'm a button</Button>
        <StyledLink href="/">I'm a link</StyledLink>
      </Container>

      <Container>
        <StyledLinkWarning href="/">I'm also a link</StyledLinkWarning>
        <StyledLinkWarning href="/">I'm also a link</StyledLinkWarning>
      </Container>

      <Container>
        <Infobox title="This is an infobox" message="This is a message" />
        <Infobox title="This is an infobox" message="This is a message" />
        <Infobox
          $variant="warning"
          title="This is an infobox"
          message="This is a message"
        />
        <Infobox
          $variant="error"
          title="This is an infobox"
          message="This is a message"
        />
      </Container>
    </>
  );
}
