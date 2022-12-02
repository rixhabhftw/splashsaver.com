import { Container } from "../components/layout/Container";
import { Header } from "../components/layout/Header";
import { Seo } from "../components/Seo";
import { NextPage } from "next";

const Privacy: NextPage = () => {
  return (
    <Container>
      <Seo title="Splashsaver - Privacy Policy" description="" />
      <Header title="Privacy Policy" />
    </Container>
  );
};

export default Privacy;
