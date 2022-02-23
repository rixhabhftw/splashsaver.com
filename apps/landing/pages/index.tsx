import { Footer } from "../components/sections/footer/Footer";
import { Container } from "../components/layout/Container";
import { Seo } from "../components/Seo";

// Sections
import { Main } from "../components/sections/main/Main";
import { Nav } from "../components/sections/nav/Nav";

// Subsections
import { DeveloperTooling } from "../components/sections/sections/DeveloperTools";
import { Pricing } from "../components/sections/sections/Pricing";
import { Why } from "../components/sections/sections/Why";
import { Animate } from "../components/Animate";

function Landing() {
  return (
    <Animate>
      <Container>
        <Seo
          title="Splashsaver - Making managing your startup team easy."
          description="Splashsaver is a platform to help startups and founders manage their teams in a more efficient way."
        />
        <Main />
        <Why />
        <Pricing />
        <DeveloperTooling />
        <Footer />
      </Container>
    </Animate>
  );
}

export default Landing;
