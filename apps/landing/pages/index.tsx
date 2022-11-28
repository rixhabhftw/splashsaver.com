import { DeveloperTooling } from "../components/sections/sections/DeveloperTools";
import { Pricing } from "../components/sections/sections/Pricing";
import { Container } from "../components/layout/Container";
import { Why } from "../components/sections/sections/Why";
import { Main } from "../components/sections/main/Main";
import { Seo } from "../components/Seo";
import { NextPage } from "next";

const Landing: NextPage = () => {
  return (
    <Container>
      <Seo
        title="Splashsaver - Making managing your startup team easy."
        description="Splashsaver is a platform to help startups and founders manage their teams in a more efficient way."
      />
      <Main />
      <Why />
      <Pricing />
      <DeveloperTooling />
    </Container>
  );
};

export default Landing;
