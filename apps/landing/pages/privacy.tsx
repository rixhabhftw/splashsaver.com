import { Container } from "../components/layout/Container";
import { Header } from "../components/layout/Header";
import { Animate } from "../components/Animate";
import { Seo } from "../components/Seo";
import { NextPage } from "next";

const Privacy: NextPage = () => {
  return (
    <Container>
      <Animate>
        <Seo title="Splashsaver - Privacy Policy" description="" />
        <Header title="Privacy Policy" />
      </Animate>
    </Container>
  );
};

export default Privacy;
