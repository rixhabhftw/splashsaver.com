import { Container } from "../components/Container";

// Sections
import { Main } from "../components/sections/main/Main";
import { Nav } from "../components/sections/nav/Nav";

export default function Landing() {
  return (
    <Container>
      <Nav />
      <Main />
    </Container>
  );
}
