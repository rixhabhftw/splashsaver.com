import { Container } from "../components/Container";
import { Footer } from "../components/sections/footer/Footer";

// Sections
import { Main } from "../components/sections/main/Main";
import { Nav } from "../components/sections/nav/Nav";

// Subsections
import { DeveloperTooling } from "../components/sections/sections/DeveloperTools";
import { Pricing } from "../components/sections/sections/Pricing";
import { Why } from "../components/sections/sections/Why";

export default function Landing() {
  return (
    <Container>
      <Nav />
      <Main />
      <Why />
      <DeveloperTooling />
      <Pricing />
      <Footer />
    </Container>
  );
}
