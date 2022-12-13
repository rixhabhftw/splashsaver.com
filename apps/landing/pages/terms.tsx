import { Container } from "../components/layout/Container";
import { Header } from "../components/layout/Header";
import { Seo } from "../components/Seo";
import { NextPage } from "next";

const TOS: NextPage = () => {
  return (
    <Container>
      <Seo title="Splashsaver - Terms of Service" description="" />
      <Header title="Terms of Service" />
    </Container>
  );
};

export default TOS;
