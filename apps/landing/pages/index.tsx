import { Container } from "../components/Container";

// Sections
import { Main } from "../components/sections/main/Main";
import { Nav } from "../components/sections/nav/Nav";

// Subsections
import { DeveloperTooling } from "../components/sections/sections/DeveloperTooling";
import { Why } from "../components/sections/sections/Why";

export default function Landing() {
  return (
    <Container>
      <Nav />
      <Main />
      <Why />
      <DeveloperTooling />
    </Container>
  );
}
